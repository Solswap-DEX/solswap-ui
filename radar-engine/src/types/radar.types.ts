export interface RadarToken {
  mint: string;
  name: string;
  symbol: string;
  age_seconds: number;
  liquidity: number;
  volume_1m: number;
  volume_5m: number;
  holders: number;
  tx_count: number;
  alpha_score: number;
  momentum_score: number;
  risk_score: number;
  risk_level: RiskLevel;
  wallet_concentration: number;
  lp_locked: boolean;
  mint_authority_active: boolean;
  price_usd: number;
  last_update: Date;
  detected_at: Date;
}

export interface StopLossWatch {
  mint: string;
  wallet: string;
  entry_price: number;
  stop_loss_pct: number;
  created_at: Date;
}

export interface RadarAlert {
  type: 'STOP_LOSS_TRIGGERED' | 'VOLUME_SPIKE' | 'RUG_SIGNAL' | 'ALPHA_SURGE';
  mint: string;
  message: string;
  severity: 'INFO' | 'WARNING' | 'CRITICAL';
  timestamp: Date;
}

export type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH' | 'RUG PROBABLE';

export interface DexScreenerResponse {
  pairs: Array<{
    pairAddress: string;
    dexId: string;
    baseToken: {
      symbol: string;
      name: string;
      address: string;
    };
    priceUsd: string;
    liquidity: {
      usd: number;
    };
    volume: {
      h24: number;
      h6: number;
      h1: number;
    };
    txns: {
      h24: {
        buys: number;
        sells: number;
      };
    };
  }>;
}

export interface HeliusWebhookEvent {
  type: string;
  transaction: {
    signature: string;
  };
  tokenTransfers?: Array<{
    mint: string;
    fromUserAccount: string;
    toUserAccount: string;
    fromTokenAccount: string;
    toTokenAccount: string;
    tokenAmount: number;
  }>;
}