import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: { sizeLimit: '100kb' },
  },
};

// 1. Rate Limiting (Segmented)
const readRequestCounts = new Map<string, { count: number; resetTime: number }>();
const writeRequestCounts = new Map<string, { count: number; resetTime: number }>();

const READ_MAX_REQUESTS = 300;
const READ_WINDOW_MS = 60000;
const WRITE_MAX_REQUESTS = 30;
const WRITE_WINDOW_MS = 60000;

// 2. Cache + Dynamic TTLs
const cache = new Map<string, { data: any; expiresAt: number }>();
const CACHE_TTL_MAP: Record<string, number> = {
  getBalance: 3000,                  // 3s
  getAccountInfo: 5000,              // 5s
  getTokenAccountsByOwner: 10000,    // 10s
}; // getLatestBlockhash is absent (0s cache)

// 3. In-flight Deduplication
const inFlight = new Map<string, Promise<{ data: any; status: number }>>();

// 4. Circuit Breaker
const circuitBreaker = { failures: 0, openUntil: 0 };
const MAX_FAILURES = 5;
const CIRCUIT_BREAKER_COOLDOWN_MS = 15000;

// 5. Fallback RPCs
const RPC_ENDPOINTS = [
  'https://mainnet.helius-rpc.com/?api-key=d526019a-9e67-4638-9273-0490b4bfdb8a',
  'https://api.mainnet-beta.solana.com'
];

const WRITE_METHODS = new Set(['sendTransaction', 'simulateTransaction']);
const ALLOWED_METHODS = new Set([
  'getBalance', 'getAccountInfo', 'getMultipleAccounts', 'getTokenAccountsByOwner',
  'getTokenAccountBalance', 'getLatestBlockhash', 'getFeeForMessage',
  'simulateTransaction', 'sendTransaction', 'getSlot', 'getHealth',
  'getSignatureStatuses', 'getTransaction', 'getRecentPrioritizationFees'
]);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  const contentType = req.headers['content-type'];
  if (!contentType || !contentType.includes('application/json')) return res.status(400).json({ error: 'Invalid Content-Type' });

  const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
  const ipStr = Array.isArray(ip) ? ip[0] : ip;

  const isBatch = Array.isArray(req.body);
  if (isBatch && req.body.length > 5) {
    console.warn(`[RPC Gateway] BATCH DENIED | IP: ${ipStr} | Size: ${req.body.length}`);
    return res.status(400).json({ error: 'Batch max 5' });
  }

  const requests = isBatch ? req.body : [req.body];
  if (!requests.length || !requests.every(r => r && typeof r.method === 'string')) {
    return res.status(400).json({ error: 'Invalid config' });
  }

  for (const r of requests) {
    if (!ALLOWED_METHODS.has(r.method)) return res.status(403).json({ error: `${r.method} Forbidden` });
  }

  const hasWrite = requests.some(r => WRITE_METHODS.has(r.method));
  const requestedMethods = requests.map(r => r.method).join(',');
  const now = Date.now();

  // Route Limiter
  const counters = hasWrite ? writeRequestCounts : readRequestCounts;
  const limitWindow = hasWrite ? WRITE_WINDOW_MS : READ_WINDOW_MS;
  const limitMax = hasWrite ? WRITE_MAX_REQUESTS : READ_MAX_REQUESTS;

  const rateRecord = counters.get(ipStr) || { count: 0, resetTime: now + limitWindow };
  if (now > rateRecord.resetTime) {
    rateRecord.count = 0;
    rateRecord.resetTime = now + limitWindow;
  }
  rateRecord.count++;
  counters.set(ipStr, rateRecord);

  if (rateRecord.count > limitMax) {
    console.warn(`[RPC Gateway] RATE LIMIT | Write: ${hasWrite} | IP: ${ipStr}`);
    return res.status(429).json({ error: 'Too Many Requests' });
  }

  // Cache & Dedupe Routing
  let cacheKey = null;
  const singleMethod = !isBatch && !hasWrite ? req.body.method as string : null;
  const ttl = singleMethod ? (CACHE_TTL_MAP[singleMethod] || 0) : 0;

  if (singleMethod && ttl > 0) {
    cacheKey = JSON.stringify({ method: req.body.method, params: req.body.params });

    const cached = cache.get(cacheKey);
    if (cached && now < cached.expiresAt) {
      console.info(`[RPC Gateway] HIT MEMORY | IP: ${ipStr} | Method: ${singleMethod}`);
      return res.status(200).json({ ...cached.data, id: req.body.id });
    }

    if (inFlight.has(cacheKey)) {
      console.info(`[RPC Gateway] HIT DEDUPE | Waiting active fetch | Method: ${singleMethod}`);
      try {
        const { data, status } = await inFlight.get(cacheKey)!;
        return res.status(status).json({ ...data, id: req.body.id });
      } catch (e) {
        return res.status(500).json({ error: 'In-flight failure' });
      }
    }
  }

  const startTime = performance.now();

  // Wrapped fetch execution with Circuit Breaker and Fallbacks
  const executeCall = async () => {
    if (Date.now() < circuitBreaker.openUntil) {
      throw new Error('Circuit Breaker is OPEN');
    }

    let lastError = null;
    for (let i = 0; i < RPC_ENDPOINTS.length; i++) {
      const endpoint = RPC_ENDPOINTS[i];
      try {
        const controller = new AbortController();
        const tId = setTimeout(() => controller.abort(), i === 0 ? 10000 : 5000);

        const r = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(req.body),
          signal: controller.signal,
        });

        clearTimeout(tId);
        const text = await r.text();
        const data = JSON.parse(text);

        if (!r.ok) throw new Error(`HTTP ${r.status}`);

        circuitBreaker.failures = 0; // Heal the circuit
        return { data, status: r.status };

      } catch (err: any) {
        lastError = err;
        console.warn(`[RPC Gateway] FALLBACK ${i+1}/${RPC_ENDPOINTS.length}: ${endpoint} failed.`);
      }
    }

    // Circuit break triggers if ALL fallbacks fail
    circuitBreaker.failures++;
    if (circuitBreaker.failures >= MAX_FAILURES) {
      circuitBreaker.openUntil = Date.now() + CIRCUIT_BREAKER_COOLDOWN_MS;
      console.error(`[RPC Gateway] CIRCUIT BREAKER OPEN (${CIRCUIT_BREAKER_COOLDOWN_MS}ms)`);
    }
    throw lastError || new Error('All RPC endpoints failed');
  };

  try {
    const activeFetch = executeCall();
    if (cacheKey && ttl > 0) inFlight.set(cacheKey, activeFetch);

    const { data, status } = await activeFetch;

    if (cacheKey && ttl > 0) {
      inFlight.delete(cacheKey);
      if (!data.error) cache.set(cacheKey, { data, expiresAt: Date.now() + ttl });
    }

    const durationMs = Math.round(performance.now() - startTime);
    console.info(`[RPC Gateway] MISS | Latency: ${durationMs}ms | Method: ${requestedMethods}`);

    return res.status(status).json(data);

  } catch (err: any) {
    if (cacheKey && ttl > 0) inFlight.delete(cacheKey);
    const durationMs = Math.round(performance.now() - startTime);
    console.error(`[RPC Gateway] FATAL | Latency: ${durationMs}ms | Method: ${requestedMethods} | Err: ${err.message}`);
    return res.status(500).json({ error: 'RPC failed completely' });
  }
}
