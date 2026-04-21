import { RadarToken } from '../types/radar.types';

export function calculateAlphaScore(token: RadarToken): number {
  let alpha = 0;

  const liquidityRiskAdjusted = token.liquidity > 0 ? token.liquidity / (token.risk_score + 1) : 0;
  if (liquidityRiskAdjusted > 10000) alpha += 30;
  else if (liquidityRiskAdjusted > 1000) alpha += 20;
  else if (liquidityRiskAdjusted > 100) alpha += 10;

  const volumeGrowth = token.volume_1m / Math.max(token.volume_5m, 1);
  if (volumeGrowth > 3) alpha += 25;
  else if (volumeGrowth > 2) alpha += 15;
  else if (volumeGrowth > 1) alpha += 10;

  const momentumFactor = token.momentum_score / 100;
  alpha += Math.floor(momentumFactor * 20);

  if (token.age_seconds > 86400 && token.age_seconds < 604800) {
    alpha += 15;
  } else if (token.age_seconds > 604800) {
    alpha += 10;
  }

  if (token.holders > 1000) alpha += 10;
  else if (token.holders > 500) alpha += 5;

  return Math.min(100, alpha);
}