/**
 * reconciliationWorker.ts
 * 
 * Async Finality Tracker & State Reconciler
 * 
 * Responsibilities:
 * - Track transactions from 'confirmed' to 'finalized'
 * - Bounded concurrency (max watchers) to avoid RPC saturation
 * - Exponential backoff polling
 * - Emit structured observability logs
 * - Eventually reconcile UI state if drift detected
 * 
 * This is a NON-BLOCKING, fire-and-observe layer.
 * It does NOT interfere with the main swap execution flow.
 */

import { Connection } from '@solana/web3.js'

// ─── Types ───────────────────────────────────────────────────────────────────

export type FinalityState = 'pending' | 'sent' | 'confirmed' | 'finalized' | 'failed' | 'unknown' | 'reconciled'

export interface TrackedTransaction {
  txId: string
  swapSessionId: string
  state: FinalityState
  confirmedAt: number
  finalizedAt?: number
  pollCount: number
  lastPollAt: number
  metadata: {
    inputToken: string
    outputToken: string
    amount: string
    rpcEndpoint: string
    blockHeight?: number
    slot?: number
  }
}

export interface ReconciliationEvent {
  type: 'state_change' | 'finalized' | 'drift_detected' | 'timeout'
  txId: string
  swapSessionId: string
  previousState: FinalityState
  newState: FinalityState
  metadata: Record<string, any>
}

type ReconciliationListener = (event: ReconciliationEvent) => void

// ─── Constants ──────────────────────────────────────────────────────────────

const MAX_CONCURRENT_WATCHERS = 15
const MAX_POLL_ATTEMPTS = 30
const BASE_BACKOFF_MS = 2_000
const MAX_BACKOFF_MS = 30_000
const FINALITY_TIMEOUT_MS = 5 * 60 * 1000 // 5 minutes max to reach finalized

// ─── Reconciliation Worker (Singleton) ──────────────────────────────────────

class ReconciliationWorker {
  private static instance: ReconciliationWorker | null = null

  private tracked = new Map<string, TrackedTransaction>()
  private activeWatchers = 0
  private listeners: ReconciliationListener[] = []
  private getConnection: () => Connection

  private constructor(connectionGetter: () => Connection) {
    this.getConnection = connectionGetter
  }

  static getInstance(connectionGetter?: () => Connection): ReconciliationWorker {
    if (!ReconciliationWorker.instance) {
      if (!connectionGetter) {
        throw new Error('[ReconciliationWorker] Must provide connectionGetter on first init')
      }
      ReconciliationWorker.instance = new ReconciliationWorker(connectionGetter)
    }
    return ReconciliationWorker.instance
  }

  /** Subscribe to reconciliation events */
  onEvent(listener: ReconciliationListener): () => void {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener)
    }
  }

  private emit(event: ReconciliationEvent): void {
    console.log('[ReconciliationWorker] Event', {
      type: event.type,
      txId: event.txId,
      swapSessionId: event.swapSessionId,
      previousState: event.previousState,
      newState: event.newState,
      ...event.metadata
    })

    for (const listener of this.listeners) {
      try {
        listener(event)
      } catch (e) {
        console.error('[ReconciliationWorker] Listener error', e)
      }
    }
  }

  /**
   * Track a confirmed transaction for finality.
   * This is non-blocking — it spawns a background watcher.
   */
  track(params: {
    txId: string
    swapSessionId: string
    inputToken: string
    outputToken: string
    amount: string
    rpcEndpoint: string
    blockHeight?: number
    slot?: number
  }): void {
    const { txId, swapSessionId, ...meta } = params

    // Don't track duplicates
    if (this.tracked.has(txId)) {
      console.warn('[ReconciliationWorker] Already tracking', { txId })
      return
    }

    const entry: TrackedTransaction = {
      txId,
      swapSessionId,
      state: 'confirmed',
      confirmedAt: Date.now(),
      pollCount: 0,
      lastPollAt: 0,
      metadata: meta
    }

    this.tracked.set(txId, entry)

    console.log('[ReconciliationWorker] Tracking transaction', {
      txId,
      swapSessionId,
      activeWatchers: this.activeWatchers,
      totalTracked: this.tracked.size
    })

    // Spawn watcher if under concurrency limit
    if (this.activeWatchers < MAX_CONCURRENT_WATCHERS) {
      this.spawnWatcher(txId)
    } else {
      console.warn('[ReconciliationWorker] Watcher limit reached, will retry later', {
        txId,
        activeWatchers: this.activeWatchers,
        limit: MAX_CONCURRENT_WATCHERS
      })
      // Queue for later — will be picked up when a watcher completes
      setTimeout(() => this.trySpawnPendingWatchers(), 5000)
    }
  }

  private trySpawnPendingWatchers(): void {
    for (const [txId, entry] of this.tracked.entries()) {
      if (this.activeWatchers >= MAX_CONCURRENT_WATCHERS) break
      if (entry.state === 'confirmed' && entry.pollCount === 0) {
        this.spawnWatcher(txId)
      }
    }
  }

  private async spawnWatcher(txId: string): Promise<void> {
    this.activeWatchers++
    
    try {
      await this.pollUntilFinalized(txId)
    } catch (e) {
      console.error('[ReconciliationWorker] Watcher error', { txId, error: e })
    } finally {
      this.activeWatchers--
      // Check if there are pending transactions waiting for a watcher slot
      this.trySpawnPendingWatchers()
    }
  }

  private async pollUntilFinalized(txId: string): Promise<void> {
    const entry = this.tracked.get(txId)
    if (!entry) return

    const startTime = Date.now()

    while (entry.pollCount < MAX_POLL_ATTEMPTS) {
      // Check timeout
      if (Date.now() - startTime > FINALITY_TIMEOUT_MS) {
        this.emit({
          type: 'timeout',
          txId,
          swapSessionId: entry.swapSessionId,
          previousState: entry.state,
          newState: 'unknown',
          metadata: {
            pollCount: entry.pollCount,
            elapsedMs: Date.now() - entry.confirmedAt,
            ...entry.metadata
          }
        })
        entry.state = 'unknown'
        return
      }

      // Calculate backoff delay
      const backoff = Math.min(
        BASE_BACKOFF_MS * Math.pow(1.5, entry.pollCount),
        MAX_BACKOFF_MS
      )

      await new Promise(r => setTimeout(r, backoff))

      entry.pollCount++
      entry.lastPollAt = Date.now()

      try {
        const connection = this.getConnection()
        const status = await connection.getSignatureStatus(txId, {
          searchTransactionHistory: false
        })

        if (!status?.value) {
          continue // Not found yet, keep polling
        }

        const confirmationStatus = status.value.confirmationStatus

        if (confirmationStatus === 'finalized') {
          const previousState = entry.state
          entry.state = 'finalized'
          entry.finalizedAt = Date.now()

          this.emit({
            type: 'finalized',
            txId,
            swapSessionId: entry.swapSessionId,
            previousState,
            newState: 'finalized',
            metadata: {
              pollCount: entry.pollCount,
              timeToFinalityMs: entry.finalizedAt - entry.confirmedAt,
              slot: status.value.slot,
              ...entry.metadata
            }
          })

          return // Done — tx is finalized
        }

        if (status.value.err) {
          const previousState = entry.state
          entry.state = 'failed'

          this.emit({
            type: 'drift_detected',
            txId,
            swapSessionId: entry.swapSessionId,
            previousState,
            newState: 'failed',
            metadata: {
              reason: 'Transaction failed on-chain after confirmation',
              error: status.value.err,
              pollCount: entry.pollCount,
              ...entry.metadata
            }
          })

          return
        }

        // Still 'confirmed' or 'processed' — keep polling
      } catch (e: any) {
        console.warn('[ReconciliationWorker] Poll error', {
          txId,
          pollCount: entry.pollCount,
          error: e.message
        })
        // Don't break — just retry on next iteration
      }
    }

    // Max polls exhausted
    console.warn('[ReconciliationWorker] Max polls exhausted', {
      txId,
      swapSessionId: entry.swapSessionId,
      pollCount: entry.pollCount,
      finalState: entry.state
    })
  }

  /** Get all currently tracked transactions */
  getTracked(): TrackedTransaction[] {
    return Array.from(this.tracked.values())
  }

  /** Get a specific tracked transaction */
  getTransaction(txId: string): TrackedTransaction | undefined {
    return this.tracked.get(txId)
  }

  /** Get worker statistics */
  getStats(): { activeWatchers: number; totalTracked: number; finalized: number; pending: number } {
    const entries = Array.from(this.tracked.values())
    return {
      activeWatchers: this.activeWatchers,
      totalTracked: this.tracked.size,
      finalized: entries.filter(e => e.state === 'finalized').length,
      pending: entries.filter(e => e.state === 'confirmed').length
    }
  }

  /** Cleanup old finalized entries (call periodically to prevent memory leak) */
  cleanup(maxAgeMs: number = 30 * 60 * 1000): void {
    const now = Date.now()
    for (const [txId, entry] of this.tracked.entries()) {
      if (
        (entry.state === 'finalized' || entry.state === 'failed' || entry.state === 'unknown') &&
        (now - entry.confirmedAt) > maxAgeMs
      ) {
        this.tracked.delete(txId)
      }
    }
  }
}

// ─── Public API ─────────────────────────────────────────────────────────────

/** Get the singleton reconciliation worker instance */
export function getReconciliationWorker(connectionGetter?: () => Connection): ReconciliationWorker {
  return ReconciliationWorker.getInstance(connectionGetter)
}

export default ReconciliationWorker
