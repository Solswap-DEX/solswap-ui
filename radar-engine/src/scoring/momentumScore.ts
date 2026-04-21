import { EnrichedToken } from '../types/radar.types';

export function calculateMomentum(token: EnrichedToken): number {
  const v = Math.min(token.volume_velocity / 10000, 1);
  const t = Math.min(token.tx_spike_ratio / 100, 1);
  const h = Math.min(token.holder_growth_rate / 50, 1);
  const l = Math.min(token.liquidity / 500000, 1);

  return Math.round((v * 35) + (t * 25) + (h * 20) + (l * 20));
}