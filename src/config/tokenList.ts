export const TOKEN_LIST_URL = '/api/jup-tokens/tokens';
export const FALLBACK_TOKEN_LIST_URL = 'https://cache.jup.ag/tokens';

export interface TokenInfo {
  address: string;
  chainId: number;
  decimals: number;
  name: string;
  symbol: string;
  logoURI: string;
  tags: string[];
}

export const fetchTokenList = async (): Promise<TokenInfo[]> => {
  try {
    const res = await fetch(TOKEN_LIST_URL);
    if (!res.ok) throw new Error('Primary fetch failed');
    return await res.json();
  } catch (err) {
    console.warn('[TOKEN_LIST] Proxy failed, trying fallback...', err);
    const res = await fetch(FALLBACK_TOKEN_LIST_URL);
    if (!res.ok) throw new Error('Failed to fetch token list from both sources');
    return await res.json();
  }
};
