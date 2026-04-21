import { RadarToken } from '../types/radar.types';

export function calculateMomentumScore(token: RadarToken): number {
  let score = 0;

  if (token.volume_1m > 10000) score += 30;
  else if (token.volume_1m > 1000) score += 20;
  else if (token.volume_1m > 100) score += 10;

  if (token.liquidity > 100000) score += 25;
  else if (token.liquidity > 10000) score += 15;
  else if (token.liquidity > 1000) score += 5;

  const volumeToLiquidityRatio = token.liquidity > 0 ? token.volume_1m / token.liquidity : 0;
  if (volumeToLiquidityRatio > 0.5) score += 20;
  else if (volumeToLiquidityRatio > 0.2) score += 10;
  else if (volumeToLiquidityRatio > 0.05) score += 5;

  if (token.holders > 500) score += 15;
  else if (token.holders > 100) score += 10;
  else if (token.holders > 10) score += 5;

  if (token.tx_count > 1000) score += 10;
  else if (token.tx_count > 100) score += 5;

  return Math.min(100, score);
}