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
  lp_locked: boolean
  mint_authority_active: boolean
  price_usd: number
  last_update: Date
  detected_at: Date
  alpha_label: 'HIGH ALPHA' | 'WATCH' | 'NEUTRAL' | 'IGNORE'
  rug_signals: string[]
  buys_1m: number
  sells_1m: number
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