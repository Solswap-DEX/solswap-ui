import { EnrichedToken, RiskLevel } from '../types/radar.types';

export function calculateRisk(token: EnrichedToken): { score: number; level: RiskLevel } {
  let score = 0;

  if (token.mint_authority_active) score += 40;
  if (token.wallet_concentration > 0.5) score += 30;
  else if (token.wallet_concentration > 0.2) score += 15;
  if (!token.lp_locked) score += 20;
  if (token.sells_1m > token.buys_1m * 3) score += 25;
  if (token.age_seconds < 60) score += 10;

  score = Math.min(100, score);

  const level = mapToRiskLevel(score);

  return { score, level };
}

function mapToRiskLevel(score: number): RiskLevel {
  if (score > 70) return 'RUG PROBABLE';
  if (score >= 46) return 'HIGH';
  if (score >= 21) return 'MEDIUM';
  return 'LOW';
}

export function determineRiskLevel(score: number): RiskLevel {
  return mapToRiskLevel(score);
}