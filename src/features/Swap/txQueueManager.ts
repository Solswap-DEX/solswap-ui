/**
 * txQueueManager.ts
 * 
 * FIFO Transaction Queue with Idempotency & RPC Failover
 * 
 * Responsibilities:
 * - Serializes swap execution (maxConcurrency = 1)
 * - Prevents duplicate swaps via swapSessionId with TTL
 * - Provides RPC health-based failover
 * - Exposes queue state for observability
 */

import { Connection } from '@solana/web3.js'

// ─── Types ───────────────────────────────────────────────────────────────────

export type SwapSessionId = string

export type QueueTaskStatus = 'queued' | 'running' | 'completed' | 'failed' | 'rejected_duplicate'

export interface QueueTask<T = any> {
  swapSessionId: SwapSessionId
  execute: (connection: Connection) => Promise<T>
  status: QueueTaskStatus
  enqueuedAt: number
  startedAt?: number
  completedAt?: number
  result?: T
  error?: Error
}

export interface QueueStats {
  pending: number
  running: number
  completed: number
  failed: number
}

// ─── RPC Failover Pool ──────────────────────────────────────────────────────

interface RpcEndpoint {
  url: string
  healthy: boolean
  lastError: number
  errorCount: number
  avgLatency: number
}

const RPC_HEALTH_RECOVERY_MS = 30_000    // Mark unhealthy RPCs as recoverable after 30s
const RPC_MAX_ERRORS_BEFORE_DEGRADE = 3  // Consecutive errors before marking unhealthy
const RPC_LATENCY_THRESHOLD_MS = 5_000   // Latency above which we prefer another RPC

class RpcFailoverPool {
  private endpoints: RpcEndpoint[] = []
  private currentIndex = 0

  constructor(primaryUrl: string) {
    // Primary is always index 0
    this.endpoints = [
      { url: primaryUrl, healthy: true, lastError: 0, errorCount: 0, avgLatency: 0 }
    ]
  }

  addEndpoint(url: string): void {
    if (!this.endpoints.find(e => e.url === url)) {
      this.endpoints.push({ url, healthy: true, lastError: 0, errorCount: 0, avgLatency: 0 })
    }
  }

  /** Get the best available connection, preferring healthy + low latency */
  getConnection(): Connection {
    const now = Date.now()

    // Attempt recovery of degraded endpoints
    for (const ep of this.endpoints) {
      if (!ep.healthy && (now - ep.lastError) > RPC_HEALTH_RECOVERY_MS) {
        ep.healthy = true
        ep.errorCount = 0
      }
    }

    // Find healthiest endpoint
    const healthy = this.endpoints.filter(e => e.healthy)
    if (healthy.length > 0) {
      // Prefer lowest latency among healthy
      healthy.sort((a, b) => a.avgLatency - b.avgLatency)
      return new Connection(healthy[0].url, { commitment: 'confirmed' })
    }

    // All degraded — fallback to primary (index 0) regardless
    console.warn('[RpcFailoverPool] All endpoints degraded, falling back to primary')
    return new Connection(this.endpoints[0].url, { commitment: 'confirmed' })
  }

  /** Report a successful call with latency */
  reportSuccess(url: string, latencyMs: number): void {
    const ep = this.endpoints.find(e => e.url === url)
    if (ep) {
      ep.errorCount = 0
      ep.healthy = true
      // Exponential moving average
      ep.avgLatency = ep.avgLatency === 0 ? latencyMs : ep.avgLatency * 0.7 + latencyMs * 0.3
    }
  }

  /** Report a failed call */
  reportError(url: string): void {
    const ep = this.endpoints.find(e => e.url === url)
    if (ep) {
      ep.errorCount++
      ep.lastError = Date.now()
      if (ep.errorCount >= RPC_MAX_ERRORS_BEFORE_DEGRADE) {
        ep.healthy = false
        console.warn(`[RpcFailoverPool] Endpoint degraded: ${url} (${ep.errorCount} consecutive errors)`)
      }
    }
  }

  /** Get current health status for logging */
  getHealthStatus(): { url: string; healthy: boolean; avgLatency: number }[] {
    return this.endpoints.map(e => ({
      url: e.url,
      healthy: e.healthy,
      avgLatency: Math.round(e.avgLatency)
    }))
  }
}

// ─── Idempotency Registry ───────────────────────────────────────────────────

const IDEMPOTENCY_TTL_MS = 5 * 60 * 1000 // 5 minutes
const IDEMPOTENCY_CLEANUP_INTERVAL_MS = 60 * 1000 // Cleanup every minute

class IdempotencyRegistry {
  private seen = new Map<SwapSessionId, number>() // sessionId -> timestamp
  private cleanupTimer: ReturnType<typeof setInterval> | null = null

  constructor() {
    this.startCleanup()
  }

  /** Returns true if this sessionId has already been seen (duplicate) */
  isDuplicate(sessionId: SwapSessionId): boolean {
    return this.seen.has(sessionId)
  }

  /** Register a sessionId as seen */
  register(sessionId: SwapSessionId): void {
    this.seen.set(sessionId, Date.now())
  }

  /** Remove expired entries */
  private cleanup(): void {
    const now = Date.now()
    for (const [id, timestamp] of this.seen.entries()) {
      if (now - timestamp > IDEMPOTENCY_TTL_MS) {
        this.seen.delete(id)
      }
    }
  }

  private startCleanup(): void {
    if (this.cleanupTimer) return
    this.cleanupTimer = setInterval(() => this.cleanup(), IDEMPOTENCY_CLEANUP_INTERVAL_MS)
  }

  destroy(): void {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer)
      this.cleanupTimer = null
    }
  }
}

// ─── Transaction Queue Manager (Singleton) ──────────────────────────────────

const MAX_CONCURRENCY = 1

class TxQueueManager {
  private static instance: TxQueueManager | null = null

  private queue: QueueTask[] = []
  private running = 0
  private idempotency = new IdempotencyRegistry()
  private rpcPool: RpcFailoverPool
  private processing = false

  private constructor(primaryRpcUrl: string) {
    this.rpcPool = new RpcFailoverPool(primaryRpcUrl)
  }

  static getInstance(primaryRpcUrl?: string): TxQueueManager {
    if (!TxQueueManager.instance) {
      if (!primaryRpcUrl) {
        throw new Error('[TxQueueManager] Must provide primaryRpcUrl on first init')
      }
      TxQueueManager.instance = new TxQueueManager(primaryRpcUrl)
    }
    return TxQueueManager.instance
  }

  /** Add an alternative RPC endpoint to the failover pool */
  addRpcEndpoint(url: string): void {
    this.rpcPool.addEndpoint(url)
  }

  /** Get the best available RPC connection */
  getConnection(): Connection {
    return this.rpcPool.getConnection()
  }

  /** Report RPC health metrics */
  reportRpcSuccess(url: string, latencyMs: number): void {
    this.rpcPool.reportSuccess(url, latencyMs)
  }

  reportRpcError(url: string): void {
    this.rpcPool.reportError(url)
  }

  getRpcHealth() {
    return this.rpcPool.getHealthStatus()
  }

  /**
   * Enqueue a swap task for serialized execution.
   * Returns a promise that resolves when the task completes.
   * Rejects immediately if the swapSessionId is a duplicate.
   */
  async enqueue<T>(
    swapSessionId: SwapSessionId,
    executeFn: (connection: Connection) => Promise<T>
  ): Promise<T> {
    // ── Idempotency check ──
    if (this.idempotency.isDuplicate(swapSessionId)) {
      console.warn('[TxQueueManager] Duplicate swap rejected', { swapSessionId })
      throw new Error(`Duplicate swap session rejected: ${swapSessionId}`)
    }
    this.idempotency.register(swapSessionId)

    // ── Create task ──
    const task: QueueTask<T> = {
      swapSessionId,
      execute: executeFn,
      status: 'queued',
      enqueuedAt: Date.now()
    }

    this.queue.push(task)

    console.log('[TxQueueManager] Task enqueued', {
      swapSessionId,
      queueLength: this.queue.length,
      running: this.running
    })

    // ── Return a promise that resolves when THIS task completes ──
    return new Promise<T>((resolve, reject) => {
      const checkAndRun = async () => {
        // Wait for our turn
        while (this.running >= MAX_CONCURRENCY || this.queue[0] !== task) {
          await new Promise(r => setTimeout(r, 100))
          // If task was removed from queue (e.g. cleanup), bail
          if (!this.queue.includes(task)) {
            reject(new Error('Task removed from queue'))
            return
          }
        }

        // Our turn
        this.running++
        task.status = 'running'
        task.startedAt = Date.now()

        try {
          const connection = this.rpcPool.getConnection()
          const result = await executeFn(connection)
          task.status = 'completed'
          task.result = result
          task.completedAt = Date.now()

          console.log('[TxQueueManager] Task completed', {
            swapSessionId,
            durationMs: task.completedAt - task.enqueuedAt
          })

          resolve(result)
        } catch (e: any) {
          task.status = 'failed'
          task.error = e
          task.completedAt = Date.now()

          console.error('[TxQueueManager] Task failed', {
            swapSessionId,
            error: e.message,
            durationMs: task.completedAt - task.enqueuedAt
          })

          reject(e)
        } finally {
          this.running--
          // Remove completed task from queue
          const idx = this.queue.indexOf(task)
          if (idx > -1) this.queue.splice(idx, 1)
        }
      }

      checkAndRun()
    })
  }

  /** Get current queue statistics */
  getStats(): QueueStats {
    return {
      pending: this.queue.filter(t => t.status === 'queued').length,
      running: this.running,
      completed: 0, // Completed tasks are removed from queue
      failed: 0
    }
  }

  /** Check if a swap session is currently in the queue or running */
  isSessionActive(swapSessionId: SwapSessionId): boolean {
    return this.queue.some(t => t.swapSessionId === swapSessionId)
  }
}

// ─── Public API ─────────────────────────────────────────────────────────────

/** Generate a unique swap session ID */
export function generateSwapSessionId(): SwapSessionId {
  return `swap_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`
}

/** Get the singleton queue manager instance */
export function getTxQueueManager(primaryRpcUrl?: string): TxQueueManager {
  return TxQueueManager.getInstance(primaryRpcUrl)
}

export default TxQueueManager
