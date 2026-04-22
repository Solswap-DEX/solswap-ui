import dotenv from 'dotenv';
dotenv.config();

import { EventEmitter } from 'events';
import { connectMongo } from './db/mongo';
import { http, io } from './server';
import { initStopLossMonitor } from './alerts/stopLossMonitor';
import { initDiscovery } from './discovery/tokenDiscovery';
import { initEnricher } from './enrichment/tokenEnricher';

const PORT = parseInt(process.env.PORT || '3333');

async function main(): Promise<void> {
  console.log('[RADAR] Connecting to MongoDB...');
  await connectMongo();
  console.log('[RADAR] MongoDB connected ✓');

  const watchMap = new Map<string, any[]>();
  initStopLossMonitor(io, watchMap);
  console.log('[RADAR] Stop Loss Monitor active ✓');

  const discoveryEmitter = new EventEmitter();
  initDiscovery(discoveryEmitter);
  initEnricher(discoveryEmitter, io);
  console.log('[RADAR] Discovery layer active ✓');
  console.log('[RADAR] Enrichment layer active ✓');

  http.listen(PORT, () => {
    console.log(`[RADAR] WebSocket server started on port ${PORT} ✓`);
  });
}

main().catch((err: Error) => {
  console.error('[RADAR ERROR] Startup failed:', err.message);
  process.exit(1);
});