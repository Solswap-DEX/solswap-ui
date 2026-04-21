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
        `${DEXSCREENER_URL}/latest/dex/pairs/solana`,
        { timeout: 10000 }
      );

      const pairs = response.data.pairs || [];
      const fiveMinAgo = Date.now() - 300000;

      for (const pair of pairs) {
        const pairCreatedAt = pair.pairCreatedAt ? new Date(pair.pairCreatedAt).getTime() : 0;
        
        if (pairCreatedAt > fiveMinAgo && pair.baseToken?.address) {
          const mint = pair.baseToken.address;
          
          if (!shouldProcessMint(mint)) continue;
          
          seenMints.add(mint);
          mintTimestamps.set(mint, Date.now());

          const token: DiscoveredToken = {
            mint,
            name: pair.baseToken.name || pair.baseToken.symbol,
            symbol: pair.baseToken.symbol,
            source: 'dexscreener'
          };

          console.log(`[RADAR DISCOVERY] New token: ${token.symbol} (${mint}) via dexscreener`);
          discoveryEmitter?.emit('token:discovered', token);
        }
      }
    } catch (err: any) {
      console.error('[RADAR ERROR] Discovery: DexScreener polling error:', err.message);
    }
  }, 15000);
}

function shouldProcessMint(mint: string): boolean {
  const lastSeen = mintTimestamps.get(mint);
  if (!lastSeen) return true;
  return Date.now() - lastSeen > 30000;
}

export async function handleHeliusWebhook(payload: any): Promise<DiscoveredToken | null> {
  const signature = payload.signature || '';
  
  if (HELIUS_WEBHOOK_SECRET && signature) {
    const isValid = crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(HELIUS_WEBHOOK_SECRET)
    );
    if (!isValid) {
      console.error('[RADAR ERROR] Discovery: Invalid Helius signature');
      return null;
    }
  }

  const tokenTransfers = payload.tokenTransfers || [];
  
  for (const transfer of tokenTransfers) {
    const mint = transfer.mint;
    if (!mint) continue;

    const programIds = [RAYDIUM_MINT, PUMPFUN_MINT];
    const isRelevant = programIds.includes(transfer.toUserAccount?.slice(0, 44) || '');
    
    if (!isRelevant) continue;
    if (!shouldProcessMint(mint)) continue;

    seenMints.add(mint);
    mintTimestamps.set(mint, Date.now());

    const token: DiscoveredToken = {
      mint,
      name: transfer.symbol || 'Unknown',
      symbol: transfer.symbol || '???',
      source: 'helius'
    };

    console.log(`[RADAR DISCOVERY] New token: ${token.symbol} (${mint}) via helius`);
    discoveryEmitter?.emit('token:discovered', token);
    return token;
  }

  return null;
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