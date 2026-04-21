import axios from 'axios';
import { EventEmitter } from 'events';
import crypto from 'crypto';

const DEXSCREENER_URL = process.env.DEXSCREENER_BASE_URL || 'https://api.dexscreener.com';
const HELIUS_WEBHOOK_SECRET = process.env.HELIUS_WEBHOOK_SECRET || '';

const RAYDIUM_MINT = '675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8';
const PUMPFUN_MINT = '6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P';

interface DiscoveredToken {
  mint: string;
  name: string;
  symbol: string;
  source: 'dexscreener' | 'helius';
}

const mintTimestamps = new Map<string, number>();
const seenMints = new Set<string>();
let discoveryEmitter: EventEmitter | null = null;

export interface DiscoveryEvents {
  'token:discovered': (token: DiscoveredToken) => void;
}

export function initDiscovery(emitter: EventEmitter): void {
  discoveryEmitter = emitter;
  startDexScreenerPolling();
}

function startDexScreenerPolling(): void {
  setInterval(async () => {
    try {
      const response = await axios.get(
        `${DEXSCREENER_URL}/token-profiles/latest/v1`,
        { timeout: 10000 }
      );

      const data = response.data;
      const profiles = Array.isArray(data) ? data : [];

      for (const profile of profiles) {
        if (profile.chainId !== 'solana') continue;

        const mint = profile.tokenAddress;
        if (!mint || !shouldProcessMint(mint)) continue;
        
        seenMints.add(mint);
        mintTimestamps.set(mint, Date.now());

        const token: DiscoveredToken = {
          mint,
          name: '',
          symbol: '',
          source: 'dexscreener'
        };

        console.log(`[RADAR DISCOVERY] New token: ${mint} via dexscreener fallback`);
        discoveryEmitter?.emit('token:discovered', token);
      }
    } catch (err: any) {
      console.error('[RADAR ERROR] Discovery: DexScreener polling error:', err.message);
    }
  }, 60000); // Polling extended to 60s as fallback
}

function shouldProcessMint(mint: string): boolean {
  const lastSeen = mintTimestamps.get(mint);
  if (!lastSeen) return true;
  return Date.now() - lastSeen > 30000;
}

export async function handleHeliusWebhook(payload: any): Promise<void> {
  const transactions = Array.isArray(payload) ? payload : [payload];
  
  for (const tx of transactions) {
    // Only process mints and swaps from known programs
    const isMint = tx.type === 'TOKEN_MINT';
    const isSwap = tx.type === 'SWAP';
    
    if (!isMint && !isSwap) continue;

    const tokenTransfers = tx.tokenTransfers || [];
    for (const transfer of tokenTransfers) {
      const mint = transfer.mint;
      if (!mint) continue;

      const programIds = [RAYDIUM_MINT, PUMPFUN_MINT];
      const isRelevant = programIds.some(id => 
        tx.instructions?.some((ix: any) => ix.programId === id) ||
        tx.events?.swap?.innerSwaps?.some((s: any) => s.programId === id)
      );
      
      if (!isRelevant && !isMint) continue;
      if (!shouldProcessMint(mint)) continue;

      seenMints.add(mint);
      mintTimestamps.set(mint, Date.now());

      const token: DiscoveredToken = {
        mint,
        name: transfer.symbol || 'Unknown',
        symbol: transfer.symbol || '???',
        source: 'helius'
      };

      console.log(`[RADAR DISCOVERY] New token: ${token.symbol} (${mint}) via helius real-time`);
      discoveryEmitter?.emit('token:discovered', token);
    }
  }
}

export async function getTokenPrice(mint: string): Promise<number | null> {
  try {
    const response = await axios.get(
      `${DEXSCREENER_URL}/latest/dex/tokens/${mint}`,
      { timeout: 10000 }
    );

    if (response.data.pairs && response.data.pairs.length > 0) {
      return parseFloat(response.data.pairs[0].priceUsd) || null;
    }
    return null;
  } catch (err: any) {
    console.error('[RADAR ERROR] Get token price failed:', err.message);
    return null;
  }
}