import { EnrichedToken, RiskLevel } from '../types/radar.types';

export function calculateRisk(token: EnrichedToken): {
  score: number;
  level: RiskLevel;
} {
  // ── COMPONENTES DE RIESGO (cada uno 0-100) ──────────────

  // 1. Wallet concentration risk (30% del score final)
  let walletRisk = 0;
  if (token.wallet_concentration > 0.60)      walletRisk = 100;
  else if (token.wallet_concentration > 0.35) walletRisk = 65;
  else if (token.wallet_concentration > 0.20) walletRisk = 35;

  // Top 10 amplifica si están coordinados
  if (token.top10_concentration > 0.80)       walletRisk = Math.min(walletRisk + 20, 100);

  // LP holder concentration (parte del wallet risk)
  if (token.lp_holder_concentration > 0.80)  walletRisk = Math.min(walletRisk + 25, 100);

  // 2. Mint authority risk (25% del score final)
  let mintRisk = 0;
  if (token.mint_authority_active) mintRisk = 100;

  // 3. LP risk (25% del score final)
  let lpRisk = 0;
  if (!token.lp_locked) lpRisk = 50;         // reducido — es lo normal en tokens nuevos
  if (token.lp_holder_concentration > 0.80) lpRisk = Math.min(lpRisk + 50, 100);

  // 4. Sell pressure risk (10% del score final)
  const sellRatio = token.sell_ratio || 0;
  let sellRisk = 0;
  if (sellRatio > 0.80)      sellRisk = 100;
  else if (sellRatio > 0.70) sellRisk = 65;
  else if (sellRatio > 0.60) sellRisk = 35;

  // 5. Dump pattern risk (10% del score final)
  let dumpRisk = 0;
  if (token.age_seconds < 120 && sellRatio > 0.70) dumpRisk = 80;
  else if (token.age_seconds < 300 && sellRatio > 0.60) dumpRisk = 50;

  // ── SCORE FINAL PONDERADO ────────────────────────────────
  const score = Math.round(
    (walletRisk * 0.30) +
    (mintRisk   * 0.25) +
    (lpRisk     * 0.25) +
    (sellRisk   * 0.10) +
    (dumpRisk   * 0.10)
  );

  const clamped = Math.min(Math.max(score, 0), 100);

  // ── RISK LEVEL MAPPING ───────────────────────────────────
  let level: RiskLevel;
  if (clamped > 70)      level = 'RUG PROBABLE';
  else if (clamped > 45) level = 'HIGH';
  else if (clamped > 20) level = 'MEDIUM';
  else                   level = 'LOW';

  return { score: clamped, level };
}

export function determineRiskLevel(score: number): RiskLevel {
  if (score > 70)      return 'RUG PROBABLE';
  if (score > 45)      return 'HIGH';
  if (score > 20)      return 'MEDIUM';
  return 'LOW';
}