export interface RadarToken {
  mint: string
  name: string
  symbol: string
  age_seconds: number
  liquidity: number
  volume_1m: number
  volume_5m: number
  holders: number
  tx_count: number
  alpha_score: number
  momentum_score: number
  risk_score: number
  risk_level: RiskLevel
  wallet_concentration: number
  top10_concentration?: number
  lp_holder_concentration?: number
  sell_ratio?: number
  lp_locked: boolean
  mint_authority_active: boolean
  price_usd: number
  last_update: Date
  detected_at: Date
  alpha_label: AlphaLabel
  rug_signals: string[]
  buys_1m: number
  sells_1m: number
  price_at_detection: number
  market_cap?: number
  // Deltas
  delta_liquidity?: number
  delta_holders?: number
  delta_volume?: number
  liquidity_velocity?: number
  volume_velocity?: number
  // PumpFun
  bonding_curve_pct?: number
  is_pumpfun?: boolean
  is_graduated?: boolean
  // Social & metadata
  image_url?: string
  social_twitter?: string
  social_telegram?: string
  social_website?: string
  creator_address?: string
  pair_address?: string
  ds_listing_age_seconds?: number
  fee_ratio?: number
  price_change_5m?: number
  price_change_1h?: number
}

export interface StopLossWatch {
  mint: string
  wallet: string
  entry_price: number
  stop_loss_pct: number
  created_at: Date
}

export interface RadarAlert {
  type: 'STOP_LOSS_TRIGGERED' | 'VOLUME_SPIKE' | 'RUG_SIGNAL' | 'ALPHA_SURGE'
  mint: string
  message: string
  severity: 'INFO' | 'WARNING' | 'CRITICAL'
  timestamp: Date
}

export type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH' | 'RUG PROBABLE'

export type AlphaLabel =
  | '🔥 HIGH ALPHA'
  | '⚡ EARLY SIGNAL'
  | '👀 WATCH'
  | '🧪 SPECULATIVE'
  | '😴 NEUTRAL'
  | '❌ IGNORE'
  | '☠️ RUG PROBABLE'
  | '🚀 GRADUATING'

export type RadarColumn = 'fresh' | 'building' | 'hot'

export function getTokenColumn(token: RadarToken): RadarColumn {
  // GRADUATING PumpFun tokens always go to "Hot" (highest urgency)
  if (token.is_pumpfun && !token.is_graduated && (token.bonding_curve_pct ?? 0) >= 80) {
    return 'hot'
  }
  // Fresh: under 5 minutes
  if (token.age_seconds < 300) return 'fresh'
  // Hot: high alpha, graduated, or older than 1h
  if (token.alpha_score >= 70 || token.is_graduated || token.age_seconds >= 3600) {
    return 'hot'
  }
  // Building: the middle ground
  return 'building'
}