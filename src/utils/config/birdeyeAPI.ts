// GeckoTerminal API timeframe mapping
export const geckoTimeframe: Record<string, { timeframe: string; aggregate: number }> = {
  '15m': { timeframe: 'minute', aggregate: 15 },
  '1H': { timeframe: 'hour', aggregate: 1 },
  '4H': { timeframe: 'hour', aggregate: 4 },
  '1D': { timeframe: 'day', aggregate: 1 },
  '1W': { timeframe: 'day', aggregate: 7 }
}

/**
 * For GeckoTerminal, we need a pool address which we don't have here.
 * We return a custom gecko:// protocol URL that the hook fetcher will intercept 
 * to perform a pool lookup first.
 */
export const birdeyeKlineApiAddress = ({
  baseMint,
  quoteMint,
  timeType
}: {
  baseMint: string
  quoteMint: string
  timeType: string
  timeFrom: number
  timeTo: number
}) => {
  const config = geckoTimeframe[timeType] || geckoTimeframe['15m']
  return `gecko://solana/${baseMint}/${quoteMint}/${config.timeframe}/${config.aggregate}/1000/${timeType}`
}

/**
 * Direct GeckoTerminal OHLCV URL using pool address.
 */
export const birdeyePairVolumeApiAddress = ({
  poolAddress,
  timeType
}: {
  poolAddress: string
  timeType: string
  timeFrom: number
  timeTo: number
}) => {
  const config = geckoTimeframe[timeType] || geckoTimeframe['4H']
  return `/api/gecko/networks/solana/pools/${poolAddress}/ohlcv/${config.timeframe}?aggregate=${config.aggregate}&limit=1000&currency=usd&token=base`
}

/**
 * Use GeckoTerminal for historical token prices as well.
 * Since we don't have a pool address here, we use the same gecko:// schema.
 */
export const birdeyePairPriceApiAddress = ({
  baseMint,
  timeType
}: {
  baseMint: string
  timeType: string
  timeFrom: number
  timeTo: number
}) => {
  const config = geckoTimeframe[timeType] || geckoTimeframe['4H']
  // We use quote as SOL for a general price against USD 
  return `gecko://solana/${baseMint}/So11111111111111111111111111111111111111112/${config.timeframe}/${config.aggregate}/1000/${timeType}`
}

export const birdeyePriceUrl = `/api/gecko/simple/networks/solana/token_price`

