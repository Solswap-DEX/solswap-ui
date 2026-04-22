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
  // Fake pump: volume spike without holder growth
  // Volumen alto pero pocos holders = wash trading probable
  const volumePerHolder = token.holders > 0
    ? token.volume_1m / token.holders
    : token.volume_1m;

  const holderGrowthLow = token.holder_growth_rate < 2;
  const volumeHigh = token.volume_1m > 5000;

  let fakePumpRisk = 0;
  if (volumeHigh && holderGrowthLow) {
    // High volume, almost no new holders = suspicious
    fakePumpRisk = 60;
    console.log(
      `[RADAR SIGNAL] Possible wash trading: ${token.symbol} ` +
      `vol=$${token.volume_1m} holders_growth=${token.holder_growth_rate}/min`
    );
  }

  // Delta signal: top10 growing = silent accumulation (risky)
  if (token.delta_top10 > 0.05) {
    // Top 10 wallets increased 5%+ since last check
    fakePumpRisk = Math.min(fakePumpRisk + 25, 100);
    console.log(
      `[RADAR SIGNAL] Silent accumulation: ${token.symbol} ` +
      `top10 delta: +${(token.delta_top10*100).toFixed(1)}%`
    );
  }

  // Delta signal: liquidity inflow = positive signal (reduces risk)
  // Fast liquidity inflow is a GOOD sign — real buyers adding LP
  let liquidityBonus = 0;
  if (token.delta_liquidity > 5000) {
    // More than $5k liquidity added since last check
    liquidityBonus = 15;
    console.log(
      `[RADAR SIGNAL] Liquidity inflow: ${token.symbol} ` +
      `+$${token.delta_liquidity.toFixed(0)}`
    );
  }

  // Apply liquidity bonus — reduces LP risk
  lpRisk = Math.max(lpRisk - liquidityBonus, 0);

  // Add fakePumpRisk to the dump component (10% weight)
  let dumpRisk = fakePumpRisk;
  if (token.age_seconds < 120 && sellRatio > 0.70) {
    dumpRisk = Math.min(dumpRisk + 40, 100);
  }

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