import { EventEmitter } from 'events';
import { Server } from 'socket.io';
import axios from 'axios';
import { RadarToken, EnrichedToken } from '../types/radar.types';
import { calculateMomentum } from '../scoring/momentumScore';
import { calculateRisk } from '../scoring/riskScore';
import { calculateAlpha, getAlphaLabel } from '../scoring/alphaScore';
import { detectRug } from '../rug/rugDetector';
import { upsertToken } from '../db/mongo';

const DEXSCREENER_URL = process.env.DEXSCREENER_BASE_URL || 'https://api.dexscreener.com';
const BIRDEYE_API_KEY = process.env.BIRDEYE_API_KEY || '';
const HELIUS_API_KEY = process.env.HELIUS_API_KEY || '';
const HELIUS_RPC = process.env.HELIUS_RPC || 'https://mainnet.helius-rpc.com';

const pendingEnrichments = new Set<string>();

export function initEnricher(emitter: EventEmitter, io: Server): void {
  emitter.on('token:discovered', async (token: { mint: string; name: string; symbol: string; source: string }) => {
    if (pendingEnrichments.has(token.mint)) return;
    pendingEnrichments.add(token.mint);
    
    try {
      const delay = token.source === 'helius' || 
                    token.source === 'helius_swap' 
                    ? 8000   // esperar 8 segundos para tokens de webhook
                    : 0;     // DexScreener polling ya tiene datos

      if (delay > 0) {
        console.log(`[RADAR] Waiting ${delay/1000}s for ${token.mint} to appear in APIs...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }

      let enriched = await enrichToken(token.mint, token.name, token.symbol);
      
      // Retry logic if no data found
      const isEmpty = (data: any) => 
        data.liquidity === 0 && data.volume_1m === 0 && data.holders === 0;

      if (enriched && isEmpty(enriched)) {
        console.log(`[RADAR] No data yet for ${token.mint}, retrying in 15s...`);
        await new Promise(resolve => setTimeout(resolve, 15000));
        enriched = await enrichToken(token.mint, token.name, token.symbol);
      }

      if (enriched) {
        const isStillEmpty = isEmpty(enriched);
        const radarToken = buildRadarToken(enriched, isStillEmpty);
        
        io.emit('radar:token', radarToken);

        upsertToken(radarToken).catch(err =>
          console.error('[RADAR ERROR] Failed to persist token:', err)
        );

        console.log(
          `[RADAR] ${radarToken.symbol} | ` +
          `Alpha: ${radarToken.alpha_score} (${radarToken.alpha_label}) | ` +
          `Risk: ${radarToken.risk_level} | ` +
          `Liq: $${radarToken.liquidity.toFixed(0)}${isStillEmpty ? ' (PENDING)' : ''}`
        );
      }
    } catch (err: any) {
      console.error('[RADAR ERROR] Enrichment failed:', err.message);
    } finally {
      pendingEnrichments.delete(token.mint);
    }
  });
}

async function enrichToken(
  mint: string,
  discoveredName: string,
  discoveredSymbol: string
): Promise<EnrichedToken | null> {
  const [dexData, birdeyeData, heliusData] = await Promise.all([
    fetchDexScreener(mint),
    fetchBirdeye(mint),
    fetchMintAuthority(mint)
  ]);

  const price_usd = dexData?.price_usd || 0;
  const liquidity = dexData?.liquidity || 0;
  const volume_1m = dexData?.volume_1m || 0;
  const volume_5m = dexData?.volume_5m || 0;
  const buys_1m = dexData?.buys_1m || 0;
  const sells_1m = dexData?.sells_1m || 0;
  const detected_at = dexData?.detected_at || Date.now();
  
  const finalName = birdeyeData?.name || dexData?.name || discoveredName || 'Unknown';
  const finalSymbol = birdeyeData?.symbol || dexData?.symbol || discoveredSymbol || '???';
  
  const age_seconds = Math.floor((Date.now() - detected_at) / 1000);
  const volume_velocity = volume_1m / Math.max(age_seconds / 60, 1);
  const holder_growth_rate = (birdeyeData?.holders || 0) / Math.max(age_seconds / 60, 1);
  const tx_spike_ratio = (buys_1m + sells_1m) / Math.max(age_seconds / 60, 1);

  return {
    price_usd,
    liquidity,
    volume_1m,
    volume_5m,
    buys_1m,
    sells_1m,
    detected_at,
    holders: birdeyeData?.holders || 0,
    name: finalName,
    symbol: finalSymbol,
    mint_authority_active: heliusData,
    age_seconds,
    volume_velocity,
    holder_growth_rate,
    tx_spike_ratio,
    wallet_concentration: 0,
    lp_locked: false,
    mint
  };
}

async function fetchDexScreener(mint: string): Promise<Partial<EnrichedToken> | null> {
  try {
    const response = await axios.get(
      `${DEXSCREENER_URL}/latest/dex/tokens/${mint}`,
      { timeout: 5000 }
    );

    const pair = response.data.pairs?.[0];
    if (!pair) return null;

    return {
      price_usd: parseFloat(pair.priceUsd) || 0,
      liquidity: pair.liquidity?.usd || 0,
      volume_1m: pair.volume?.h1 || 0,
      volume_5m: pair.volume?.h5 || 0,
      buys_1m: pair.txns?.h1?.buys || 0,
      sells_1m: pair.txns?.h1?.sells || 0,
      detected_at: pair.pairCreatedAt ? new Date(pair.pairCreatedAt).getTime() : Date.now(),
      name: pair.baseToken?.name,
      symbol: pair.baseToken?.symbol
    };
  } catch (err: any) {
    console.error('[RADAR ERROR] DexScreener fetch failed:', err.message);
    return null;
  }
}

async function fetchBirdeye(mint: string): Promise<Partial<EnrichedToken> | null> {
  if (!BIRDEYE_API_KEY) return null;
  
  try {
    const response = await axios.get(
      `https://public-api.birdeye.so/defi/token_overview?address=${mint}`,
      {
        headers: { 'X-API-KEY': BIRDEYE_API_KEY },
        timeout: 5000
      }
    );

    const data = response.data?.data;
    if (!data) return null;

    return {
      holders: parseInt(data.holder) || 0,
      name: data.name,
      symbol: data.symbol
    };
  } catch (err: any) {
    console.error('[RADAR ERROR] Birdeye fetch failed:', err.message);
    return null;
  }
}

async function fetchMintAuthority(mint: string): Promise<boolean> {
  if (!HELIUS_API_KEY) return false;

  try {
    const response = await axios.post(
      `${HELIUS_RPC}/?api-key=${HELIUS_API_KEY}`,
      {
        jsonrpc: '2.0',
        id: 1,
        method: 'getAccountInfo',
        params: [mint, { encoding: 'jsonParsed' }]
      },
      { timeout: 5000 }
    );

    const mintAuthority = response.data?.result?.value?.data?.parsed?.info?.mintAuthority;
    return mintAuthority !== null && mintAuthority !== undefined;
  } catch (err: any) {
    console.error('[RADAR ERROR] Helius mint authority check failed:', err.message);
    return false;
  }
}

function buildRadarToken(enriched: EnrichedToken, dataPending = false): RadarToken {
  const momentum = calculateMomentum(enriched);
  const { score: riskScore, level: riskLevel } = calculateRisk(enriched);
  const alphaScore = calculateAlpha(momentum, riskScore, enriched.age_seconds);
  const rugSignal = detectRug(enriched, []);

  const token: RadarToken = {
    mint: enriched.mint,
    name: enriched.name,
    symbol: enriched.symbol,
    age_seconds: enriched.age_seconds,
    liquidity: enriched.liquidity,
    volume_1m: enriched.volume_1m,
    volume_5m: enriched.volume_5m,
    holders: enriched.holders,
    tx_count: enriched.buys_1m + enriched.sells_1m,
    buys_1m: enriched.buys_1m,
    sells_1m: enriched.sells_1m,
    alpha_score: alphaScore,
    momentum_score: momentum,
    risk_score: riskScore,
    risk_level: rugSignal.isRug ? 'RUG PROBABLE' : riskLevel,
    wallet_concentration: enriched.wallet_concentration,
    lp_locked: enriched.lp_locked,
    mint_authority_active: enriched.mint_authority_active,
    price_usd: enriched.price_usd,
    last_update: new Date(),
    detected_at: new Date(enriched.detected_at),
    alpha_label: getAlphaLabel(alphaScore),
    rug_signals: rugSignal.signals,
    data_pending: dataPending,
    price_at_detection: enriched.price_usd,
    market_cap: 0
  };

  return token;
}

export function enrichTokenData(token: RadarToken): RadarToken {
  return token;
}