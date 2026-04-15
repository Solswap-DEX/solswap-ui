import { NextApiRequest, NextApiResponse } from 'next';

interface CacheEntry {
  data: any;
  cachedAt: number;        // when it was fresh
  staleAt: number;         // when it becomes stale, but still usable for SWR
  expiresAt: number;       // absolute deadline to drop it (e.g. 5 minutes)
  revalidating: boolean;   // lock to prevent multiple background fetches
}

const cache = new Map<string, CacheEntry>();
const inFlightRequests = new Map<string, Promise<any>>();

function getTTLConfig(url: string) {
  // Return [freshTTL, staleTTL] in ms
  if (url.includes('/ohlcv') || url.includes('/chart')) {
    // Graphs / OHLCV: 60s fresh, 5 mins stale
    return [60000, 300000];
  }
  if (url.includes('token_price') || url.includes('simple')) {
    // Simple Prices: 15s fresh, 1 min stale
    return [15000, 60000];
  }
  // Default metadata (pools, lists, token info): 30s fresh, 2 min stale
  return [30000, 120000];
}

async function fetchFromGecko(url: string): Promise<any> {
    if (inFlightRequests.has(url)) {
        return inFlightRequests.get(url)!;
    }
    
    console.info(`[gecko-proxy] Fetching fresh data from GeckoTerminal: ${url}`);
    const proxyHeaders = {
        'Accept': 'application/json',
    };

    const promise = fetch(url, { headers: proxyHeaders }).then(async (res) => {
        if (!res.ok) {
            const errBody = await res.text().catch(() => '');
            let errMessage = `Gecko API error: ${res.status}`;
            if (errBody) errMessage += ` - ${errBody}`;
            throw new Error(errMessage);
        }
        return res.json();
    }).finally(() => {
        inFlightRequests.delete(url);
    });

    inFlightRequests.set(url, promise);
    return promise;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const subpath = req.query.path as string;
    
    // Reconstruct full query string precisely
    const urlObj = new URL(`https://api.geckoterminal.com/api/v2/${subpath}`);
    Object.entries(req.query).forEach(([key, val]) => {
      if (key !== 'path' && val !== undefined) {
        urlObj.searchParams.append(key, String(val));
      }
    });

    const targetUrl = urlObj.toString();
    const cacheKey = targetUrl; // Stable cache key taking into account the full URL logic
    
    const [freshTTL, staleTTL] = getTTLConfig(targetUrl);
    const now = Date.now();
    const entry = cache.get(cacheKey);

    // 1. Fresh hit
    if (entry && now < entry.staleAt) {
      res.setHeader('X-Proxy-Cache', 'HIT');
      return res.status(200).json(entry.data);
    }

    // 2. Stale hit (Stale-While-Revalidate)
    if (entry && now < entry.expiresAt) {
      res.setHeader('X-Proxy-Cache', 'STALE');
      
      // Fire background revalidation safely (Fire and Forget)
      if (!entry.revalidating) {
        entry.revalidating = true;
        fetchFromGecko(targetUrl)
          .then(data => {
            cache.set(cacheKey, {
              data,
              cachedAt: Date.now(),
              staleAt: Date.now() + freshTTL,
              expiresAt: Date.now() + staleTTL,
              revalidating: false
            });
            console.info(`[gecko-proxy] Background revalidation succeeded for ${cacheKey}`);
          })
          .catch(err => {
            entry.revalidating = false;
            console.error(`[gecko-proxy] Background revalidation failed for ${cacheKey}`, err.message);
          });
      }

      // Return stale immediately preventing UI disruption
      return res.status(200).json(entry.data);
    }

    // 3. Cache Miss or Completely Expired
    try {
      const data = await fetchFromGecko(targetUrl);
      
      cache.set(cacheKey, {
        data,
        cachedAt: Date.now(),
        staleAt: Date.now() + freshTTL,
        expiresAt: Date.now() + staleTTL,
        revalidating: false
      });

      res.setHeader('X-Proxy-Cache', 'MISS');
      return res.status(200).json(data);
    } catch (err: any) {
      // Grace fallback: even if totally expired, return the old data if the API is completely down/ratelimited
      if (entry && entry.data) {
        console.warn(`[gecko-proxy] Gecko API down, returning graceful fallback from heavily expired cache for ${targetUrl}`);
        res.setHeader('X-Proxy-Cache', 'FALLBACK');
        return res.status(200).json(entry.data);
      }
      
      console.error(`[gecko-proxy] Gecko API request failed for ${targetUrl}`, err.message);
      return res.status(502).json({ error: 'Upstream API error' });
    }
  } catch (err: any) {
    console.error('[gecko-proxy] Generic proxy error', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}
