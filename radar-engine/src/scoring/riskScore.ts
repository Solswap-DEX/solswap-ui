import { RadarToken, RiskLevel } from '../types/radar.types';

export function calculateRiskScore(token: RadarToken): number {
  let risk = 0;

  if (!token.lp_locked) risk += 30;
  if (token.mint_authority_active) risk += 25;
  if (token.wallet_concentration > 0.5) risk += 20;
  if (token.age_seconds < 3600) risk += 25;
  else if (token.age_seconds < 86400) risk += 15;

  if (token.liquidity < 1000) risk += 25;
  else if (token.liquidity < 10000) risk += 15;
  else if (token.liquidity < 50000) risk += 5;

  if (token.holders < 10) risk += 20;
  else if (token.holders < 50) risk += 10;

  return Math.min(100, risk);
}

export function determineRiskLevel(score: number): RiskLevel {
  if (score >= 75) return 'RUG PROBABLE';
  if (score >= 60) return 'HIGH';
  if (score >= 40) return 'MEDIUM';
  return 'LOW';
}