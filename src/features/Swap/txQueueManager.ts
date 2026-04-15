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

// ─── RPC Failover Pool (Circuit Breaker) ────────────────────────────────────

export type RpcCircuitState = 'healthy' | 'degraded' | 'failed' | 'cooldown'

interface RpcEndpoint {
  url: string
  state: RpcCircuitState
  lastError: number
  lastSuccess: number
  errorCount: number
  consecutiveErrors: number
  avgLatency: number
  cooldownUntil: number
}

const RPC_DEGRADE_THRESHOLD = 2        // Consecutive errors before degraded
const RPC_FAIL_THRESHOLD = 5           // Consecutive errors before failed
const RPC_COOLDOWN_MS = 30_000         // Cooldown period before retry
const RPC_COOLDOWN_PROBE_MS = 60_000   // Full recovery probe window after cooldown
const RPC_LATENCY_THRESHOLD_MS = 5_000 // High latency triggers degraded

class RpcFailoverPool {
  private endpoints: RpcEndpoint[] = []
  private stickyIndex = 0 // Sticky per session — don't switch mid-batch

  constructor(primaryUrl: string) {
    this.endpoints = [
      this.createEndpoint(primaryUrl)
    ]
  }

  private createEndpoint(url: string): RpcEndpoint {
    return {
      url,
      state: 'healthy',
      lastError: 0,
      lastSuccess: 0,
      errorCount: 0,
      consecutiveErrors: 0,
      avgLatency: 0,
      cooldownUntil: 0
    }
  }

  addEndpoint(url: string): void {
    if (!this.endpoints.find(e => e.url === url)) {
      this.endpoints.push(this.createEndpoint(url))
    }
  }

  /** Transition an endpoint's circuit breaker state */
  private transition(ep: RpcEndpoint, newState: RpcCircuitState): void {
    if (ep.state === newState) return
    const prevState = ep.state
    ep.state = newState

    if (newState === 'cooldown') {
      ep.cooldownUntil = Date.now() + RPC_COOLDOWN_MS
    }

    console.log('[RpcFailoverPool] State transition', {
      url: ep.url,
      from: prevState,
      to: newState,
      consecutiveErrors: ep.consecutiveErrors,
      avgLatency: Math.round(ep.avgLatency)
    })
  }

  /** Get the best available connection — sticky per session */
  getConnection(): Connection {
    const now = Date.now()

    // Attempt recovery of cooldown endpoints
    for (const ep of this.endpoints) {
      if (ep.state === 'cooldown' && now >= ep.cooldownUntil) {
        this.transition(ep, 'degraded') // Probe mode — one more error = failed again
        ep.consecutiveErrors = RPC_DEGRADE_THRESHOLD // Start at degraded threshold
      }
    }

    // Priority: healthy > degraded > cooldown-expired > failed
    const candidates = this.endpoints
      .filter(e => e.state === 'healthy' || e.state === 'degraded')
      .sort((a, b) => {
        // Prefer healthy over degraded
        if (a.state === 'healthy' && b.state !== 'healthy') return -1
        if (b.state === 'healthy' && a.state !== 'healthy') return 1
        // Among same state, prefer lowest latency
        return a.avgLatency - b.avgLatency
      })

    if (candidates.length > 0) {
      return new Connection(candidates[0].url, { commitment: 'confirmed' })
    }

    // All failed/cooldown — force primary as last resort
    console.warn('[RpcFailoverPool] All endpoints failed/cooldown, forcing primary')
    return new Connection(this.endpoints[0].url, { commitment: 'confirmed' })
  }

  /** Report a successful call with latency */
  reportSuccess(url: string, latencyMs: number): void {
    const ep = this.endpoints.find(e => e.url === url)
    if (!ep) return

    ep.consecutiveErrors = 0
    ep.lastSuccess = Date.now()
    ep.avgLatency = ep.avgLatency === 0 ? latencyMs : ep.avgLatency * 0.7 + latencyMs * 0.3

    // High latency → degrade, otherwise heal
    if (latencyMs > RPC_LATENCY_THRESHOLD_MS && ep.state === 'healthy') {
      this.transition(ep, 'degraded')
    } else if (ep.state !== 'healthy') {
      this.transition(ep, 'healthy')
    }
  }

  /** Report a failed call — drives circuit breaker transitions */
  reportError(url: string): void {
    const ep = this.endpoints.find(e => e.url === url)
    if (!ep) return

    ep.errorCount++
    ep.consecutiveErrors++
    ep.lastError = Date.now()

    if (ep.consecutiveErrors >= RPC_FAIL_THRESHOLD) {
      this.transition(ep, 'cooldown') // Circuit open — stop sending traffic
    } else if (ep.consecutiveErrors >= RPC_DEGRADE_THRESHOLD) {
      this.transition(ep, 'degraded')
    }
  }

  /** Get current health status for logging */
  getHealthStatus(): { url: string; state: RpcCircuitState; avgLatency: number; consecutiveErrors: number }[] {
    return this.endpoints.map(e => ({
      url: e.url,
      state: e.state,
      avgLatency: Math.round(e.avgLatency),
      consecutiveErrors: e.consecutiveErrors
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
