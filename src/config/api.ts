/**
 * SolSwap API Configuration
 * Centralized endpoints for external data services.
 */

// Jupiter Price API v6 (via local proxy)
export const JUP_PRICE_API = "/api/jup-price";

/**
 * Fetch a single token price from Jupiter
 */
export const getTokenPrice = async (mint: string): Promise<number> => {
  try {
    const res = await fetch(`${JUP_PRICE_API}?ids=${mint}`);
    const data = await res.json();
    return Number(data.data[mint]?.price || 0);
  } catch (error) {
    console.error(`Error fetching price for ${mint}:`, error);
    return 0;
  }
};

/**
 * Fetch multiple token prices from Jupiter
 */
export const getMultipleTokenPrices = async (mints: string[]): Promise<Record<string, number>> => {
  if (mints.length === 0) return {};
  try {
    const ids = mints.join(',');
    const res = await fetch(`${JUP_PRICE_API}?ids=${ids}`);
    const data = await res.json();
    const prices: Record<string, number> = {};
    mints.forEach(mint => {
      prices[mint] = Number(data.data[mint]?.price || 0);
    });
    return prices;
  } catch (error) {
    console.error('Error fetching multiple prices:', error);
    return {};
  }
};

export const TOKEN_LIST = "/api/jup-tokens";
export const OHLCV_API = "https://api.geckoterminal.com/api/v2/networks/solana";
export const POOL_API = "https://api.dexscreener.com/latest/dex/tokens";
