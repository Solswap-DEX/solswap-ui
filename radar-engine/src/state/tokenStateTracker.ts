interface TokenSnapshot {
  liquidity: number
  holders: number
  top10_concentration: number
  volume_1m: number
  timestamp: number
}

// In-memory store — Map<mint, snapshot>
const snapshots = new Map<string, TokenSnapshot>()
const previousLabels = new Map<string, string>()
const firstSeen = new Map<string, number>()

export function updateSnapshot(
  mint: string,
  data: TokenSnapshot
): void {
  snapshots.set(mint, data)
}

export function updatePreviousLabel(
  mint: string,
  label: string
): void {
  previousLabels.set(mint, label)
}

export function getPreviousLabel(mint: string): string | undefined {
  return previousLabels.get(mint)
}

export function getFirstSeen(mint: string, fallback: number): number {
  const existing = firstSeen.get(mint)
  if (existing) return existing
  firstSeen.set(mint, fallback)
  return fallback
}

export function getDeltas(
  mint: string,
  current: TokenSnapshot
): {
  delta_liquidity: number
  delta_holders: number
  delta_top10: number
  delta_volume: number
  liquidity_velocity: number
  volume_velocity: number
  time_delta_seconds: number
  has_previous: boolean
} {
  const prev = snapshots.get(mint)

  if (!prev) {
    return {
      delta_liquidity: 0,
      delta_holders: 0,
      delta_top10: 0,
      delta_volume: 0,
      liquidity_velocity: 0,
      volume_velocity: 0,
      time_delta_seconds: 0,
      has_previous: false
    }
  }

  const time_delta_seconds = Math.max((current.timestamp - prev.timestamp) / 1000, 1); // minimum 1s to avoid div by 0
  const delta_liquidity = current.liquidity - prev.liquidity;
  const delta_volume = current.volume_1m - prev.volume_1m;

  return {
    delta_liquidity,
    delta_holders:   current.holders - prev.holders,
    delta_top10:     current.top10_concentration - prev.top10_concentration,
    delta_volume,
    liquidity_velocity: delta_liquidity / time_delta_seconds,
    volume_velocity: delta_volume / time_delta_seconds,
    time_delta_seconds,
    has_previous:    true
  }
}

// Cleanup — remove tokens not seen in 2 hours
export function cleanupSnapshots(): void {
  const cutoff = Date.now() - 7200000
  for (const [mint, snap] of snapshots.entries()) {
    if (snap.timestamp < cutoff) {
      snapshots.delete(mint)
      previousLabels.delete(mint)
      firstSeen.delete(mint)
    }
  }
}

// Run cleanup every 30 minutes
setInterval(cleanupSnapshots, 1800000)
