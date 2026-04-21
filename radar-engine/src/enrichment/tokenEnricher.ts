import { RadarToken } from '../types/radar.types';

export function enrichTokenData(token: RadarToken): RadarToken {
  const enriched = { ...token };

  enriched.volume_1m = token.volume_1m || token.volume_5m / 5;
  enriched.tx_count = token.tx_count || 0;
  enriched.holders = Math.max(token.holders, Math.floor(token.liquidity / 1000));

  if (!enriched.name) {
    enriched.name = token.symbol;
  }

  return enriched;
}

export function calculateTokenAge(created_at: Date): number {
  const now = new Date();
  return Math.floor((now.getTime() - created_at.getTime()) / 1000);
}