import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '100kb', // Anti-Abuse padding limits
    },
  },
};

// 1. Separated Read vs Write Rate Limiting & Logic
const readRequestCounts = new Map<string, { count: number; resetTime: number }>();
const writeRequestCounts = new Map<string, { count: number; resetTime: number }>();

const READ_RATE_LIMIT_WINDOW_MS = 60000;
const READ_MAX_REQUESTS = 300;

const WRITE_RATE_LIMIT_WINDOW_MS = 60000;
const WRITE_MAX_REQUESTS = 30; // Very strict to avoid abuse

// 3. Simple In-Memory Caching (3s)
const cache = new Map<string, { data: any; expiresAt: number }>();
const CACHE_TTL_MS = 3000;

// getLatestBlockhash is PURPOSELY OMITTED to fix Transaction Freshness / Expired Blockhashes
const CACHEABLE_METHODS = ['getBalance', 'getTokenAccountsByOwner', 'getAccountInfo'];

const WRITE_METHODS = new Set(['sendTransaction', 'simulateTransaction']);

// Strict Allowlist
const ALLOWED_METHODS = new Set([
  'getBalance',
  'getAccountInfo',
  'getMultipleAccounts',
  'getTokenAccountsByOwner',
  'getTokenAccountBalance',
  'getLatestBlockhash',
  'getFeeForMessage',
  'simulateTransaction',
  'sendTransaction',
  'getSlot',
  'getHealth',
  'getSignatureStatuses',
  'getTransaction',
  'getRecentPrioritizationFees'
]);

function isMethodAllowed(method: string) {
  return ALLOWED_METHODS.has(method);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const contentType = req.headers['content-type'];
  if (!contentType || !contentType.includes('application/json')) {
    return res.status(400).json({ error: 'Invalid Content-Type' });
  }

  const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
  const ipStr = Array.isArray(ip) ? ip[0] : ip;

  const isBatch = Array.isArray(req.body);

  // 5. Anti-Abuse: Prevent gargantuan JSON-RPC batches
  if (isBatch && req.body.length > 5) {
    console.warn(`[Helius Proxy] BATCH ABUSE DENIED | IP: ${ipStr} | Size: ${req.body.length}`);
    return res.status(400).json({ error: 'Batch request limit exceeded. Max 5 calls.' });
  }

  const requests = isBatch ? req.body : [req.body];

  if (!requests.length || !requests.every(r => r && typeof r.method === 'string')) {
    return res.status(400).json({ error: 'Invalid RPC payload' });
  }

  for (const r of requests) {
    if (!isMethodAllowed(r.method)) {
      return res.status(403).json({ error: `Method ${r.method} is forbidden by policy` });
    }
  }

  const hasWrite = requests.some(r => WRITE_METHODS.has(r.method));
  const requestedMethods = requests.map(r => r.method).join(',');

  // Smart Routing Logic: Strict Rate-limiting for Writes 
  const now = Date.now();
  if (hasWrite) {
    const rateRecord = writeRequestCounts.get(ipStr) || { count: 0, resetTime: now + WRITE_RATE_LIMIT_WINDOW_MS };
    if (now > rateRecord.resetTime) {
      rateRecord.count = 0;
      rateRecord.resetTime = now + WRITE_RATE_LIMIT_WINDOW_MS;
    }
    rateRecord.count++;
    writeRequestCounts.set(ipStr, rateRecord);

    if (rateRecord.count > WRITE_MAX_REQUESTS) {
      console.warn(`[Helius Proxy] WRITE RATE LIMIT HIT | IP: ${ipStr}`);
      return res.status(429).json({ error: 'Too Many Write Requests' });
    }
  } else {
    const rateRecord = readRequestCounts.get(ipStr) || { count: 0, resetTime: now + READ_RATE_LIMIT_WINDOW_MS };
    if (now > rateRecord.resetTime) {
      rateRecord.count = 0;
      rateRecord.resetTime = now + READ_RATE_LIMIT_WINDOW_MS;
    }
    rateRecord.count++;
    readRequestCounts.set(ipStr, rateRecord);

    if (rateRecord.count > READ_MAX_REQUESTS) {
      return res.status(429).json({ error: 'Too Many Read Requests' });
    }
  }

  // 2. Safely generate cache keys omitting identical requests with varying `id`
  let cacheKey = null;
  if (!isBatch && !hasWrite && CACHEABLE_METHODS.includes(req.body.method)) {
    cacheKey = JSON.stringify({ method: req.body.method, params: req.body.params });
    const cached = cache.get(cacheKey);
    
    if (cached && now < cached.expiresAt) {
      console.info(`[Helius Proxy Metric] CACHE HIT | IP: ${ipStr} | Method: ${req.body.method}`);
      // Re-attach original RPC `id` otherwise frontend Web3 providers will reject payload
      return res.status(200).json({
         ...cached.data,
         id: req.body.id 
      });
    }
  }

  // 4. Latency measurement
  const startTime = performance.now();

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 seconds

    const response = await fetch('https://mainnet.helius-rpc.com/?api-key=d526019a-9e67-4638-9273-0490b4bfdb8a', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      return res.status(502).json({ error: 'Invalid response from upstream RPC' });
    }

    const durationMs = Math.round(performance.now() - startTime);

    console.info(`[Helius Proxy Metric] MISS (FETCH) | Latency: ${durationMs}ms | IP: ${ipStr} | Methods: ${requestedMethods} | Status: ${response.status}`);

    if (cacheKey && response.ok && !data.error && !isBatch) {
      cache.set(cacheKey, { data, expiresAt: now + CACHE_TTL_MS });
    }

    return res.status(response.status).json(data);
  } catch (err: any) {
    const durationMs = Math.round(performance.now() - startTime);
    console.error(`[Helius Proxy Metric] ERROR | Latency: ${durationMs}ms | Error: ${err.message}`);
    return res.status(500).json({ error: 'RPC connection failed' });
  }
}
