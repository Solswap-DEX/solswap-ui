import { EventEmitter } from 'events';
import { Server } from 'socket.io';
import axios from 'axios';
import { RadarToken, EnrichedToken } from '../types/radar.types';
import { calculateMomentum } from '../scoring/momentumScore';
import { calculateRisk } from '../scoring/riskScore';
import { calculateAlpha, getAlphaLabel } from '../scoring/alphaScore';
import { detectRug } from '../rug/rugDetector';
import { upsertToken } from '../db/mongo';
import { updateSnapshot, getDeltas, getPreviousLabel, updatePreviousLabel, getFirstSeen } from '../state/tokenStateTracker';

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
        
        const prevLabel = getPreviousLabel(radarToken.mint);
        if (prevLabel && prevLabel !== radarToken.alpha_label && radarToken.alpha_label !== '❌ IGNORE' && prevLabel !== '🔥 HIGH ALPHA') {
          console.log(`[TRANSITION] ${radarToken.symbol}: ${prevLabel} → ${radarToken.alpha_label}`);
          io.emit('radar:alert', {
            type: 'ALPHA_SURGE',
            mint: radarToken.mint,
            message: `🚀 ${radarToken.symbol} upgraded: ${prevLabel} → ${radarToken.alpha_label}`,
            severity: 'INFO',
            timestamp: new Date()
          });
        }
        updatePreviousLabel(radarToken.mint, radarToken.alpha_label);

        io.emit('radar:token', radarToken);

        upsertToken(radarToken).catch(err =>
          console.error('[RADAR ERROR] Failed to persist token:', err)
        );

        console.log(
          `[RADAR] ${radarToken.symbol} | ` +
          `Alpha: ${radarToken.alpha_score} (${radarToken.alpha_label}) | ` +
          `Risk: ${radarToken.risk_level} | ` +
          `Liq: $${radarToken.liquidity.toFixed(0)}${isStillEmpty ? ' (PENDING)' : ''} | ` +
          `Top holder: ${(radarToken.wallet_concentration * 100).toFixed(1)}%`
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
  const dexData = await fetchDexScreener(mint);
  
  const [birdeyeData, heliusData, walletData, lpData] = await Promise.all([
    fetchBirdeye(mint),
    fetchMintAuthority(mint),
    fetchWalletConcentration(mint),
    fetchLPConcentration(mint, dexData?.pairAddress || '')
  ]);

  const price_usd = dexData?.price_usd || 0;
  const liquidity = dexData?.liquidity || 0;
  const volume_1m = dexData?.volume_1m || 0;
  const volume_5m = dexData?.volume_5m || 0;
  const buys_1m = dexData?.buys_1m || 0;
  const sells_1m = dexData?.sells_1m || 0;
  
  // Stabilize detected_at using in-memory firstSeen if API has no data
  const detected_at = getFirstSeen(mint, dexData?.detected_at || Date.now());
  
  const finalName = birdeyeData?.name || dexData?.name || discoveredName || 'Unknown';
  const finalSymbol = birdeyeData?.symbol || dexData?.symbol || discoveredSymbol || '???';
  
  const age_seconds = Math.floor((Date.now() - detected_at) / 1000);
  const volume_velocity = volume_1m / Math.max(age_seconds / 60, 1);
  const holder_growth_rate = 0; // Birdeye holders removed
  const totalTx = buys_1m + sells_1m;
  const sell_ratio = totalTx > 0 ? Math.round((sells_1m / totalTx) * 100) / 100 : 0;
  const tx_spike_ratio = totalTx / Math.max(age_seconds / 60, 1);

  const currentSnapshot = {
    liquidity: liquidity,
    holders: 0,
    top10_concentration: walletData.top10 || 0,
    volume_1m: volume_1m,
    timestamp: Date.now()
  };

  const deltas = getDeltas(mint, currentSnapshot);
  updateSnapshot(mint, currentSnapshot);

  if (deltas.has_previous) {
    console.log(
      `[RADAR DELTA] ${finalSymbol} | ` +
      `liq: ${deltas.delta_liquidity >= 0 ? '+' : ''}${deltas.delta_liquidity.toFixed(0)} | ` +
      `holders: ${deltas.delta_holders >= 0 ? '+' : ''}${deltas.delta_holders} | ` +
      `top10: ${deltas.delta_top10 >= 0 ? '+' : ''}${(deltas.delta_top10*100).toFixed(1)}%`
    );
  }

  return {
    price_usd,
    liquidity,
    volume_1m,
    volume_5m,
    buys_1m,
    sells_1m,
    detected_at,
    holders: 0,
    name: finalName,
    symbol: finalSymbol,
    mint_authority_active: heliusData,
    age_seconds,
    holder_growth_rate,
    tx_spike_ratio,
    wallet_concentration: walletData.top1,
    top10_concentration: walletData.top10,
    lp_holder_concentration: lpData.lp_holder_concentration,
    lp_locked: lpData.lp_locked,
    sell_ratio,
    mint,
    delta_liquidity: deltas.delta_liquidity,
    delta_holders: deltas.delta_holders,
    delta_top10: deltas.delta_top10,
    delta_volume: deltas.delta_volume,
    liquidity_velocity: deltas.liquidity_velocity,
    volume_velocity: deltas.volume_velocity,
    market_cap: dexData?.market_cap || 0
  };
}

async function fetchDexScreener(mint: string): Promise<Partial<EnrichedToken> | null> {
  try {
    const response = await axios.get(
      `${DEXSCREENER_URL}/latest/dex/tokens/${mint}`,
      { timeout: 5000 }
    );

    const pair = response.data.pairs?.sort((a: any, b: any) => 
      (b.liquidity?.usd || 0) - (a.liquidity?.usd || 0)
    )?.[0];

    if (!pair) return null;

    return {
      price_usd: parseFloat(pair.priceUsd) || 0,
      liquidity: pair.liquidity?.usd || 0,
      market_cap: pair.fdv || 0,
      volume_1m: pair.volume?.m5 || 0,
      volume_5m: pair.volume?.m5 || 0,
      buys_1m: pair.txns?.m5?.buys || 0,
      sells_1m: pair.txns?.m5?.sells || 0,
      detected_at: pair.pairCreatedAt ? new Date(pair.pairCreatedAt).getTime() : Date.now(),
      name: pair.baseToken?.name,
      symbol: pair.baseToken?.symbol,
      pairAddress: pair.pairAddress
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
      holders: 0,
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
    console.error('[RADAR ERROR] Helius mint authority check failed (401?):', err.message, 'Key:', HELIUS_API_KEY.slice(0,4));
    return false;
  }
}

async function fetchWalletConcentration(mint: string): Promise<{ top1: number, top10: number }> {
  try {
    const rpcUrl = `${HELIUS_RPC}/?api-key=${HELIUS_API_KEY}`;

    const [holdersRes, supplyRes] = await Promise.all([
      axios.post(rpcUrl, {
        jsonrpc: '2.0', id: 'radar-holders',
        method: 'getTokenLargestAccounts',
        params: [mint]
      }, { timeout: 5000 }),
      axios.post(rpcUrl, {
        jsonrpc: '2.0', id: 'radar-supply',
        method: 'getTokenSupply',
        params: [mint]
      }, { timeout: 5000 })
    ]);

    const holders = holdersRes.data?.result?.value || [];
    const totalSupply = supplyRes.data?.result?.value?.uiAmount || 0;

    if (!totalSupply || holders.length === 0) {
      return { top1: 0, top10: 0 };
    }

    const top1 = (holders[0]?.uiAmount || 0) / totalSupply;
    const top10sum = holders
      .slice(0, 10)
      .reduce((sum: number, h: any) => sum + (h.uiAmount || 0), 0);
    const top10 = top10sum / totalSupply;

    console.log(
      `[RADAR] ${mint.slice(0, 8)}... ` +
      `top1: ${(top1 * 100).toFixed(1)}% | ` +
      `top10: ${(top10 * 100).toFixed(1)}%`
    );

    return {
      top1: Math.round(top1 * 10000) / 10000,
      top10: Math.round(top10 * 10000) / 10000
    };
  } catch (err: any) {
    console.error('[RADAR ERROR] fetchWalletConcentration:', err.message);
    return { top1: 0, top10: 0 };
  }
}

const LOCKER_ADDRESSES = [
  'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA', // Token Program
  'So11111111111111111111111111111111111111112',   // wSOL
  '11111111111111111111111111111111',              // System Program
];

const BURN_ADDRESS = '1nc1nerator11111111111111111111111111111111';

async function fetchLPConcentration(
  mint: string,
  pairAddress: string
): Promise<{ lp_locked: boolean, lp_holder_concentration: number }> {
  try {
    if (!pairAddress) return { lp_locked: false, lp_holder_concentration: 0 };

    const rpcUrl = `${HELIUS_RPC}/?api-key=${HELIUS_API_KEY}`;

    const res = await axios.post(rpcUrl, {
      jsonrpc: '2.0', id: 'radar-lp',
      method: 'getTokenLargestAccounts',
      params: [pairAddress]
    }, { timeout: 5000 });

    const lpHolders = res.data?.result?.value || [];
    if (lpHolders.length === 0) {
      return { lp_locked: false, lp_holder_concentration: 0 };
    }

    const topLPHolder = lpHolders[0]?.address || '';
    const isLocked = LOCKER_ADDRESSES.includes(topLPHolder) || topLPHolder === BURN_ADDRESS;

    const totalLP = lpHolders.reduce((sum: number, h: any) => sum + (h.uiAmount || 0), 0);
    const topLPAmount = lpHolders[0]?.uiAmount || 0;
    const lpConcentration = totalLP > 0 ? topLPAmount / totalLP : 0;

    console.log(
      `[RADAR] LP ${pairAddress.slice(0, 8)}... ` +
      `locked: ${isLocked} | ` +
      `top holder: ${(lpConcentration * 100).toFixed(1)}%`
    );

    return {
      lp_locked: isLocked,
      lp_holder_concentration: Math.round(lpConcentration * 10000) / 10000
    };
  } catch (err: any) {
    console.error('[RADAR ERROR] fetchLPConcentration:', err.message);
    return { lp_locked: false, lp_holder_concentration: 0 };
  }
}

function buildRadarToken(enriched: EnrichedToken, dataPending = false): RadarToken {
  const momentum = calculateMomentum(enriched);
  const { score: riskScore, level: riskLevel } = calculateRisk(enriched);
  const alphaScore = calculateAlpha(momentum, riskScore, enriched.age_seconds, enriched.liquidity_velocity);
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
    top10_concentration: enriched.top10_concentration,
    lp_holder_concentration: enriched.lp_holder_concentration,
    sell_ratio: enriched.sell_ratio,
    lp_locked: enriched.lp_locked,
    mint_authority_active: enriched.mint_authority_active,
    price_usd: enriched.price_usd,
    last_update: new Date(),
    detected_at: new Date(enriched.detected_at),
    alpha_label: getAlphaLabel(
      alphaScore,
      rugSignal.isRug ? 'RUG PROBABLE' : riskLevel,
      enriched.age_seconds,
      enriched.delta_liquidity,
      enriched.delta_holders
    ),
    rug_signals: rugSignal.signals,
    data_pending: dataPending,
    price_at_detection: enriched.price_usd,
    market_cap: enriched.market_cap,
    delta_liquidity: enriched.delta_liquidity,
    delta_holders: enriched.delta_holders,
    delta_top10: enriched.delta_top10,
    delta_volume: enriched.delta_volume,
    liquidity_velocity: enriched.liquidity_velocity,
    volume_velocity: enriched.volume_velocity
  };

  return token;
}

export function enrichTokenData(token: RadarToken): RadarToken {
  return token;
}