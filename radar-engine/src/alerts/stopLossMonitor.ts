import { Server } from 'socket.io';
import axios from 'axios';
import { StopLossWatch, DexScreenerResponse } from '../types/radar.types';

const DEXSCREENER_URL = process.env.DEXSCREENER_BASE_URL || 'https://api.dexscreener.com';

export function initStopLossMonitor(
  io: Server,
  watchMap: Map<string, StopLossWatch[]>
): void {
  setInterval(async () => {
    for (const [wallet, watches] of watchMap.entries()) {
      for (const watch of watches) {
        try {
          await checkStopLoss(io, wallet, watch);
        } catch (err) {
          console.error('[RADAR ERROR] Stop loss check failed:', err);
        }
      }
    }
  }, 10000);
}

async function checkStopLoss(
  io: Server,
  wallet: string,
  watch: StopLossWatch
): Promise<void> {
  try {
    const response = await axios.get<DexScreenerResponse>(
      `${DEXSCREENER_URL}/latest/dex/tokens/${watch.mint}`,
      { timeout: 10000 }
    );

    const pair = response.data.pairs?.[0];
    if (!pair) return;

    const currentPrice = parseFloat(pair.priceUsd);
    const threshold = watch.entry_price * (1 - watch.stop_loss_pct / 100);

    if (currentPrice <= threshold) {
      const dropPct = ((watch.entry_price - currentPrice) / watch.entry_price) * 100;
      const symbol = pair.baseToken.symbol;

      io.to(wallet).emit('radar:stop_loss', {
        mint: watch.mint,
        symbol,
        entry_price: watch.entry_price,
        current_price: currentPrice,
        drop_pct: dropPct.toFixed(2),
        message: `Stop loss triggered. Price dropped ${dropPct.toFixed(2)}%. Consider exiting.`,
        swap_url: `/swap?inputMint=${watch.mint}&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`
      });

      console.log(`[STOP LOSS] ${symbol} dropped ${dropPct.toFixed(2)}% — alert sent to ${wallet}`);

      const walletWatches = watchMap.get(wallet);
      if (walletWatches) {
        const idx = walletWatches.findIndex(w => w.mint === watch.mint);
        if (idx > -1) walletWatches.splice(idx, 1);
        if (walletWatches.length === 0) watchMap.delete(wallet);
      }
    }
  } catch (err) {
    console.error('[RADAR ERROR] Failed to check stop loss price:', err);
  }
}