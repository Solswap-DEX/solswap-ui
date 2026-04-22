import { EnrichedToken, PricePoint, RugSignal } from '../types/radar.types';

export function detectRug(token: EnrichedToken, history: PricePoint[]): RugSignal {
  const signals: string[] = [];

  if (token.mint_authority_active) {
    signals.push('MINT_AUTHORITY_ACTIVE');
  }

  if (token.wallet_concentration > 0.35 || token.top10_concentration > 0.80) {
    signals.push('HIGH_WALLET_CONCENTRATION');
  }

  if (!token.lp_locked && token.lp_holder_concentration > 0.80) {
    signals.push('LP_NOT_LOCKED');
  }

  if (token.sell_ratio > 0.80) {
    signals.push('EXTREME_SELL_IMBALANCE');
  }

  if (history.length >= 2) {
    const sortedByTime = [...history].sort((a, b) => a.timestamp - b.timestamp);
    let maxPrice = sortedByTime[0].price;
    let maxTimestamp = sortedByTime[0].timestamp;
    let minPriceAfterMax = sortedByTime[0].price;
    let minTimestampAfterMax = sortedByTime[0].timestamp;

    for (const point of sortedByTime) {
      if (point.price > maxPrice) {
        maxPrice = point.price;
        maxTimestamp = point.timestamp;
      }
    }

    for (const point of sortedByTime) {
      if (point.timestamp >= maxTimestamp && point.price < minPriceAfterMax) {
        minPriceAfterMax = point.price;
        minTimestampAfterMax = point.timestamp;
      }
    }

    if (
      maxPrice > token.volume_1m * 3 &&
      minPriceAfterMax < maxPrice * 0.5 &&
      (minTimestampAfterMax - maxTimestamp) < 120000
    ) {
      signals.push('PUMP_AND_DUMP');
    }
  }

  if (token.volume_1m > 5000 && token.holder_growth_rate < 2) {
    signals.push('WASH_TRADING_SIGNAL');
  }

  const isRug = signals.length >= 2;

  return { isRug, signals };
}


export function detectRugPull(token: any): any {
  return null;
}