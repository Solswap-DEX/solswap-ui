export const TOKEN_LIST_URL = 'https://cache.jup.ag/tokens';

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
  const res = await fetch(TOKEN_LIST_URL);
  if (!res.ok) throw new Error('Failed to fetch token list');
  return res.json();
};
