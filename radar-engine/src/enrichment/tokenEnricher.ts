import { EventEmitter } from 'events';
import { Server } from 'socket.io';
import axios from 'axios';
import { RadarToken } from '../types/radar.types';
import { calculateMomentumScore } from '../scoring/momentumScore';
import { calculateRiskScore, determineRiskLevel } from '../scoring/riskScore';
import { calculateAlphaScore } from '../scoring/alphaScore';
import { detectRugPull } from '../rug/rugDetector';

const DEXSCREENER_URL = process.env.DEXSCREENER_BASE_URL || 'https://api.dexscreener.com';
const BIRDEYE_API_KEY = process.env.BIRDEYE_API_KEY || '';
const HELIUS_API_KEY = process.env.HELIUS_API_KEY || '';
const HELIUS_RPC = process.env.HELIUS_RPC || 'https://mainnet.helius-rpc.com';

interface EnrichedData {
  price_usd: number;
  liquidity: number;
  volume_1m: number;
  volume_5m: number;
  buys_1m: number;
  sells_1m: number;
  detected_at: number;
  holders: number;
  name: string;
  symbol: string;
  mint_authority_active: boolean;
  age_seconds: number;
  tx_spike_ratio: number;
  holder_growth_rate: number;
  volume_velocity: number;
}

const pendingEnrichments = new Set<string>();

export function initEnricher(emitter: EventEmitter, io: Server): void {
  emitter.on('token:discovered', async (token: { mint: string; name: string; symbol: string; source: string }) => {
    if (pendingEnrichments.has(token.mint)) return;
    pendingEnrichments.add(token.mint);
    
    try {
      const enriched = await enrichToken(token.mint, token.name, token.symbol);
      if (enriched) {
        const radarToken = buildRadarToken(enriched);
        
        io.emit('radar:token', radarToken);

        const rugAlert = detectRugPull(radarToken);
        if (rugAlert) {
          io.emit('radar:alert', rugAlert);
        }
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
): Promise<EnrichedData | null> {
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
    name: birdeyeData?.name || discoveredName,
    symbol: birdeyeData?.symbol || discoveredSymbol,
    mint_authority_active: heliusData,
    age_seconds,
    volume_velocity,
    holder_growth_rate,
    tx_spike_ratio
  };
}

async function fetchDexScreener(mint: string): Promise<Partial<EnrichedData> | null> {
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
      detected_at: pair.pairCreatedAt ? new Date(pair.pairCreatedAt).getTime() : Date.now()
    };
  } catch (err: any) {
    console.error('[RADAR ERROR] DexScreener fetch failed:', err.message);
    return null;
  }
}

async function fetchBirdeye(mint: string): Promise<Partial<EnrichedData> | null> {
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

function buildRadarToken(data: EnrichedData): RadarToken {
  const token: RadarToken = {
    mint: '',
    name: data.name,
    symbol: data.symbol,
    age_seconds: data.age_seconds,
    liquidity: data.liquidity,
    volume_1m: data.volume_1m,
    volume_5m: data.volume_5m,
    holders: data.holders,
    tx_count: data.buys_1m + data.sells_1m,
    alpha_score: 0,
    momentum_score: 0,
    risk_score: 0,
    risk_level: 'MEDIUM',
    wallet_concentration: 0,
    lp_locked: false,
    mint_authority_active: data.mint_authority_active,
    price_usd: data.price_usd,
    last_update: new Date(),
    detected_at: new Date(data.detected_at)
  };

  token.momentum_score = calculateMomentumScore(token);
  token.risk_score = calculateRiskScore(token);
  token.risk_level = determineRiskLevel(token.risk_score);
  token.alpha_score = calculateAlphaScore(token);

  return token;
}

export function enrichTokenData(token: RadarToken): RadarToken {
  return token;
}