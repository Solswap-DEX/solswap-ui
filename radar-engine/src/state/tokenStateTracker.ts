interface TokenSnapshot {
  liquidity: number
  holders: number
  top10_concentration: number
  volume_1m: number
  timestamp: number
}

// In-memory store — Map<mint, snapshot>
const snapshots = new Map<string, TokenSnapshot>()

export function updateSnapshot(
  mint: string,
  data: TokenSnapshot
): void {
  snapshots.set(mint, data)
}

export function getDeltas(
  mint: string,
  current: TokenSnapshot
): {
  delta_liquidity: number
  delta_holders: number
  delta_top10: number
  delta_volume: number
  has_previous: boolean
} {
  const prev = snapshots.get(mint)

  if (!prev) {
    return {
      delta_liquidity: 0,
      delta_holders: 0,
      delta_top10: 0,
      delta_volume: 0,
      has_previous: false
    }
  }

  return {
    delta_liquidity: current.liquidity - prev.liquidity,
    delta_holders:   current.holders - prev.holders,
    delta_top10:     current.top10_concentration - prev.top10_concentration,
    delta_volume:    current.volume_1m - prev.volume_1m,
    has_previous:    true
  }
}

// Cleanup — remove tokens not seen in 2 hours
export function cleanupSnapshots(): void {
  const cutoff = Date.now() - 7200000
  for (const [mint, snap] of snapshots.entries()) {
    if (snap.timestamp < cutoff) snapshots.delete(mint)
  }
}

// Run cleanup every 30 minutes
setInterval(cleanupSnapshots, 1800000)
