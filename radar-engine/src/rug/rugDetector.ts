import { RadarToken, RadarAlert } from '../types/radar.types';

export function detectRugPull(token: RadarToken): RadarAlert | null {
  const redFlags: string[] = [];

  if (!token.lp_locked && token.liquidity < 10000) {
    redFlags.push('LP not locked');
  }

  if (token.mint_authority_active) {
    redFlags.push('Mint authority active');
  }

  if (token.wallet_concentration > 0.8) {
    redFlags.push('High wallet concentration');
  }

  if (token.age_seconds < 3600 && token.liquidity < 5000) {
    redFlags.push('New token with low liquidity');
  }

  if (token.holders < 5) {
    redFlags.push('Very few holders');
  }

  if (redFlags.length >= 2) {
    return {
      type: 'RUG_SIGNAL',
      mint: token.mint,
      message: `Rug pull risk detected: ${redFlags.join(', ')}`,
      severity: 'CRITICAL',
      timestamp: new Date()
    };
  }

  if (redFlags.length === 1 && token.risk_score > 60) {
    return {
      type: 'RUG_SIGNAL',
      mint: token.mint,
      message: `Warning: ${redFlags[0]}`,
      severity: 'WARNING',
      timestamp: new Date()
    };
  }

  return null;
}