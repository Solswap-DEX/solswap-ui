import { RiskLevel } from '../types/radar.types';

export function calculateAlpha(
  momentum: number, 
  risk: number,
  age_seconds: number = 0,
  liquidity_velocity: number = 0
): number {
  // Score base
  let alpha = momentum * (1 - risk / 100)

  // Age bonus — tokens muy nuevos con tracción son más interesantes
  if (age_seconds < 120) {
    alpha = alpha * 1.30       // < 2 minutos: bonus 30%
  } else if (age_seconds < 300) {
    alpha = alpha * 1.15       // < 5 minutos: bonus 15%
  } else if (age_seconds < 600) {
    alpha = alpha * 1.05       // < 10 minutos: bonus 5%
  }
  // > 10 minutos: sin bonus

  // Velocity boost (aggressive entry before pump)
  if (liquidity_velocity > 10 && age_seconds < 180) {
    alpha = alpha * 1.40;
  }

  // Non-linear risk penalty (destroy fake high alphas)
  if (risk > 70) {
    alpha = alpha * 0.30;
  }

  const result = Math.round(Math.min(Math.max(alpha, 0), 100) * 100) / 100

  return result
}

import { AlphaLabel } from '../types/radar.types';

export function getAlphaLabel(
  score: number,
  riskLevel: string,
  age_seconds: number,
  delta_liquidity: number,
  delta_holders: number
): AlphaLabel {
  // Rug always overrides everything
  if (riskLevel === 'RUG PROBABLE') return '☠️ RUG PROBABLE'

  // High alpha regardless of age
  if (score >= 80) return '🔥 HIGH ALPHA'

  // Early signal: young token with positive deltas
  // PRE-PUMP detector: catches money entering before the spike
  if (
    age_seconds < 120 &&        // less than 2 minutes old
    score >= 35 &&              // decent momentum after penalties
    delta_liquidity > 0 &&      // any liquidity flowing in
    delta_holders > 0           // new holders joining
  ) return '⚡ EARLY SIGNAL'

  // Watch: solid score
  if (score >= 50) return '👀 WATCH'

  // Speculative: low score but very young with activity
  if (age_seconds < 120 && score >= 25) return '🧪 SPECULATIVE'

  // Neutral: some signal
  if (score >= 20) return '😴 NEUTRAL'

  // Default ignore
  return '❌ IGNORE'
}