import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';
import { StopLossWatch } from './types/radar.types';
import { handleHeliusWebhook } from './discovery/tokenDiscovery';

const app = express();
const http = createServer(app);
const io = new Server(http, {
  cors: {
    origin: process.env.ALLOWED_ORIGIN || '*',
    methods: ['GET', 'POST']
  }
});

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.post('/webhook/helius', async (req, res) => {
  try {
    const payload = req.body;
    console.log('[RADAR] Helius webhook received:', payload.type);
    
    await handleHeliusWebhook(payload);
    
    res.json({ received: true });
  } catch (err: any) {
    console.error('[RADAR ERROR] Helius webhook failed:', err.message);
    res.status(500).json({ error: 'Processing failed' });
  }
});

app.post('/radar/watch', (req, res) => {
  try {
    const { mint, wallet, entry_price, stop_loss_pct } = req.body;

    if (!mint || !wallet || !entry_price || !stop_loss_pct) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const watchMap: Map<string, StopLossWatch[]> = (app as any).watchMap || new Map();

    const watches = watchMap.get(wallet) || [];
    watches.push({
      mint,
      wallet,
      entry_price,
      stop_loss_pct,
      created_at: new Date()
    });

    watchMap.set(wallet, watches);
    (app as any).watchMap = watchMap;

    io.to(wallet).emit('radar:alert', {
      type: 'STOP_LOSS_TRIGGERED',
      mint,
      message: `Stop loss watch registered for ${mint}`,
      severity: 'INFO',
      timestamp: new Date()
    });

    res.json({ success: true });
  } catch (err: any) {
    console.error('[RADAR ERROR] Register watch failed:', err.message);
    res.status(500).json({ error: 'Registration failed' });
  }
});

export { app, http, io };

export function getWatchMap(): Map<string, StopLossWatch[]> {
  return (app as any).watchMap || new Map();
}

export function setWatchMap(map: Map<string, StopLossWatch[]>): void {
  (app as any).watchMap = map;
}