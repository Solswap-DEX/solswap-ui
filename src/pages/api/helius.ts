import { NextApiRequest, NextApiResponse } from 'next';

const requestCounts = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 300; // Allow 300 requests per minute per IP

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // 4. Correct HTTP Method (POST, not GET)
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // 1. Validation of the body
  const isBatch = Array.isArray(req.body);
  const isValid = isBatch
    ? req.body.every((r: any) => r && r.method !== undefined)
    : req.body && req.body.method !== undefined;

  if (!isValid) {
    return res.status(400).json({ error: 'Invalid RPC request' });
  }

  // 2. Basic in-memory rate limiting
  const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
  const ipStr = Array.isArray(ip) ? ip[0] : ip;

  const now = Date.now();
  const rateRecord = requestCounts.get(ipStr) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW_MS };

  if (now > rateRecord.resetTime) {
    rateRecord.count = 0;
    rateRecord.resetTime = now + RATE_LIMIT_WINDOW_MS;
  }

  rateRecord.count++;
  requestCounts.set(ipStr, rateRecord);

  if (rateRecord.count > MAX_REQUESTS_PER_WINDOW) {
    return res.status(429).json({ error: 'Too Many Requests' });
  }

  // 3. Timeout and error handling
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout

    const response = await fetch('https://mainnet.helius-rpc.com/?api-key=d526019a-9e67-4638-9273-0490b4bfdb8a', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    // Some RPC responses might not be perfect JSON, safely parse it
    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      // If it's not JSON, return a 502 Bad Gateway
      return res.status(502).json({ error: 'Invalid response from RPC' });
    }

    return res.status(response.status).json(data);
  } catch (err: any) {
    console.warn('[Proxy Helius Failed]:', err.message);
    return res.status(500).json({ error: 'RPC failed' });
  }
}
