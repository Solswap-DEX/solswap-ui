import dotenv from 'dotenv';
import { connectMongo } from './db/mongo';
import { http, io, getWatchMap } from './server';
import { initStopLossMonitor } from './alerts/stopLossMonitor';
import { discoverNewTokens } from './discovery/tokenDiscovery';
import { enrichTokenData } from './enrichment/tokenEnricher';
import { calculateMomentumScore } from './scoring/momentumScore';
import { calculateRiskScore, determineRiskLevel } from './scoring/riskScore';
import { calculateAlphaScore } from './scoring/alphaScore';
import { detectRugPull } from './rug/rugDetector';

dotenv.config();

const PORT = parseInt(process.env.PORT || '3333');

async function main(): Promise<void> {
  console.log('[RADAR] Connecting to MongoDB...');
  await connectMongo();
  console.log('[RADAR] MongoDB connected ✓');

  const watchMap = new Map<string, any[]>();
  initStopLossMonitor(io, watchMap);
  console.log('[RADAR] Stop Loss Monitor active ✓');

  startDiscoveryLoop();
  console.log('[RADAR] Discovery layer active ✓');

  http.listen(PORT, () => {
    console.log(`[RADAR] WebSocket server started on port ${PORT} ✓`);
  });
}

function startDiscoveryLoop(): void {
  setInterval(async () => {
    try {
      const rawTokens = await discoverNewTokens();

      for (const token of rawTokens) {
        const enriches = enrichTokenData(token);
        const withMomentum = {
          ...enriches,
          momentum_score: calculateMomentumScore(enriches)
        };
        const withRisk = {
          ...withMomentum,
          risk_score: calculateRiskScore(withMomentum),
          risk_level: determineRiskLevel(calculateRiskScore(withMomentum))
        };
        const final = {
          ...withRisk,
          alpha_score: calculateAlphaScore(withRisk)
        };

        io.emit('radar:token', final);

        const rugAlert = detectRugPull(final);
        if (rugAlert) {
          io.emit('radar:alert', rugAlert);
        }
      }
    } catch (err) {
      console.error('[RADAR ERROR] Discovery loop error:', err);
    }
  }, 30000);
}

main().catch((err) => {
  console.error('[RADAR ERROR] Startup failed:', err);
  process.exit(1);
});