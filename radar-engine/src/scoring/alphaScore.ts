import { RiskLevel } from '../types/radar.types';

export function calculateAlpha(momentum: number, risk: number): number {
  const alpha = momentum * (1 - risk / 100);
  return Math.round(Math.min(Math.max(alpha, 0), 100) * 100) / 100;
}

export function getAlphaLabel(alpha: number): 'HIGH ALPHA' | 'WATCH' | 'NEUTRAL' | 'IGNORE' {
  if (alpha >= 80) return 'HIGH ALPHA';
  if (alpha >= 50) return 'WATCH';
  if (alpha >= 20) return 'NEUTRAL';
  return 'IGNORE';
}