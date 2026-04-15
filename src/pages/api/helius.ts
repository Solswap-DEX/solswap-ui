import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '100kb', // 5. Limit payload size to avoid abuse
    },
  },
};

// 1. Basic Rate Limiting
const requestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60000;
const MAX_REQUESTS_PER_WINDOW = 300;

// 3. Simple In-Memory Caching (3 seconds TTL)
const cache = new Map<string, { data: any; expiresAt: number }>();
const CACHE_TTL_MS = 3000;
const CACHEABLE_METHODS = ['getBalance', 'getLatestBlockhash', 'getTokenAccountsByOwner', 'getAccountInfo'];

// 2. Allowlist of methods strictly needed by widgets / swapping Dapps
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
  // 4/5. Method and Headers check
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const contentType = req.headers['content-type'];
  if (!contentType || !contentType.includes('application/json')) {
    return res.status(400).json({ error: 'Invalid Content-Type, expected application/json' });
  }

  const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
  const ipStr = Array.isArray(ip) ? ip[0] : ip;

  // Body Validation
  const isBatch = Array.isArray(req.body);
  const requests = isBatch ? req.body : [req.body];

  if (!requests.length || !requests.every(r => r && typeof r.method === 'string')) {
    return res.status(400).json({ error: 'Invalid RPC payload' });
  }

  // 2. Check allowlist
  for (const r of requests) {
    if (!isMethodAllowed(r.method)) {
      console.warn(`[Helius Proxy] ILLEGAL METHOD BLOCKED | IP: ${ipStr} | Method: ${r.method}`);
      return res.status(403).json({ error: `Method ${r.method} is strictly forbidden` });
    }
  }

  // Rate Limiting Evaluation
  const now = Date.now();
  const rateRecord = requestCounts.get(ipStr) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW_MS };

  if (now > rateRecord.resetTime) {
    rateRecord.count = 0;
    rateRecord.resetTime = now + RATE_LIMIT_WINDOW_MS;
  }

  rateRecord.count++;
  requestCounts.set(ipStr, rateRecord);

  if (rateRecord.count > MAX_REQUESTS_PER_WINDOW) {
    console.warn(`[Helius Proxy] RATE LIMIT EXCEEDED | IP: ${ipStr}`);
    return res.status(429).json({ error: 'Too Many Requests' });
  }

  const requestedMethods = requests.map(r => r.method).join(',');

  // 3. Caching mechanism evaluation (for simple cacheable single requests)
  let cacheKey = null;
  if (!isBatch && CACHEABLE_METHODS.includes(req.body.method)) {
    cacheKey = JSON.stringify(req.body);
    const cached = cache.get(cacheKey);
    if (cached && now < cached.expiresAt) {
      console.info(`[Helius Proxy] CACHE HIT | IP: ${ipStr} | Method: ${requestedMethods}`);
      return res.status(200).json(cached.data);
    }
  }

  // RPC Fetching
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

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
      console.error(`[Helius Proxy] UPSTREAM PARSE ERROR | IP: ${ipStr} | Status: ${response.status}`);
      return res.status(502).json({ error: 'Invalid response from upstream RPC' });
    }

    // 4. Structured logging on success
    console.info(`[Helius Proxy] SUCCESS | IP: ${ipStr} | Methods: ${requestedMethods} | Status: ${response.status}`);

    // Commit to cache if applicable
    if (cacheKey && response.ok && !data.error) {
      cache.set(cacheKey, { data, expiresAt: now + CACHE_TTL_MS });
    }

    return res.status(response.status).json(data);
  } catch (err: any) {
    // 4. Structured logging on failure
    console.error(`[Helius Proxy] FETCH FAILED | IP: ${ipStr} | Methods: ${requestedMethods} | Error: ${err.message}`);
    return res.status(500).json({ error: 'RPC connection failed' });
  }
}
