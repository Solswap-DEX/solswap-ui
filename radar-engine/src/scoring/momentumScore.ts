import { EnrichedToken } from '../types/radar.types';

export function calculateMomentum(token: EnrichedToken): number {
  // Caps reducidos para reflejar realidad de tokens nuevos en Solana
  const v = Math.min(token.volume_velocity / 2000, 1)    // era 10000
  const t = Math.min(token.tx_spike_ratio / 30, 1)       // era 100
  const h = Math.min(token.holder_growth_rate / 15, 1)   // era 50
  const l = Math.min(token.liquidity / 50000, 1)         // era 500000

  // Pesos ajustados — volumen es el indicador más confiable
  const raw = (v * 45) + (t * 30) + (h * 15) + (l * 10) // era 35/25/20/20

  return Math.round(Math.min(raw, 100))
}