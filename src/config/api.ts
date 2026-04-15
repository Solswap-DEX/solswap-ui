/**
 * SolSwap API Configuration
 * Centralized endpoints for external data services.
 */

// GeckoTerminal Simple Price API
export const JUP_PRICE_API = "/api/gecko/simple/networks/solana/token_price";

/**
 * Fetch a single token price from Jupiter
 */
export const getTokenPrice = async (mint: string): Promise<number> => {
  try {
    const res = await fetch(`${JUP_PRICE_API}/${mint}`);
    const data = await res.json();
    return Number(data.data.attributes.token_prices[mint] || 0);
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
    const res = await fetch(`${JUP_PRICE_API}/${ids}`);
    const data = await res.json();
    const prices: Record<string, number> = {};
    const geckoPrices = data.data.attributes.token_prices;
    mints.forEach(mint => {
      prices[mint] = Number(geckoPrices[mint] || 0);
    });
    return prices;
  } catch (error) {
    console.error('Error fetching multiple prices:', error);
    return {};
  }
};

export const TOKEN_LIST = "https://cdn.jsdelivr.net/gh/solana-labs/token-list@main/src/tokens/solana.tokenlist.json";
export const OHLCV_API = "/api/gecko/networks/solana";
export const POOL_API = "https://api.dexscreener.com/latest/dex/tokens";
