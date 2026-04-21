import { RiskLevel } from '../types/radar.types';

export function calculateAlpha(
  momentum: number, 
  risk: number,
  age_seconds: number = 0
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

  const result = Math.round(Math.min(Math.max(alpha, 0), 100) * 100) / 100

  return result
}

export function getAlphaLabel(
  score: number
): 'HIGH ALPHA' | 'WATCH' | 'NEUTRAL' | 'IGNORE' {
  if (score >= 80) return 'HIGH ALPHA'
  if (score >= 50) return 'WATCH'
  if (score >= 20) return 'NEUTRAL'
  return 'IGNORE'
}