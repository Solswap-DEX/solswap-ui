import axios from 'axios';
import { RadarToken, DexScreenerResponse } from '../types/radar.types';

const DEXSCREENER_URL = process.env.DEXSCREENER_BASE_URL || 'https://api.dexscreener.com';

export async function discoverNewTokens(): Promise<RadarToken[]> {
  try {
    const response = await axios.get<DexScreenerResponse>(
      `${DEXSCREENER_URL}/latest/dex/tokens`,
      { timeout: 10000 }
    );

    const tokens: RadarToken[] = response.data.pairs.slice(0, 50).map((pair) => ({
      mint: pair.baseToken.address,
      name: pair.baseToken.name,
      symbol: pair.baseToken.symbol,
      age_seconds: 0,
      liquidity: pair.liquidity?.usd || 0,
      volume_1m: pair.volume?.h1 || 0,
      volume_5m: pair.volume?.h6 || 0,
      holders: 0,
      tx_count: pair.txns?.h24?.buys + pair.txns?.h24?.sells || 0,
      alpha_score: 0,
      momentum_score: 0,
      risk_score: 0,
      risk_level: 'MEDIUM',
      wallet_concentration: 0,
      lp_locked: false,
      mint_authority_active: false,
      price_usd: parseFloat(pair.priceUsd) || 0,
      last_update: new Date(),
      detected_at: new Date()
    }));

    return tokens;
  } catch (err) {
    console.error('[RADAR ERROR] Token discovery failed:', err);
    return [];
  }
}

export async function getTokenPrice(mint: string): Promise<number | null> {
  try {
    const response = await axios.get<DexScreenerResponse>(
      `${DEXSCREENER_URL}/latest/dex/tokens/${mint}`,
      { timeout: 10000 }
    );

    if (response.data.pairs && response.data.pairs.length > 0) {
      return parseFloat(response.data.pairs[0].priceUsd) || null;
    }
    return null;
  } catch (err) {
    console.error('[RADAR ERROR] Get token price failed:', err);
    return null;
  }
}