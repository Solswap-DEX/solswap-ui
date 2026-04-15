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
 * - Persist state to IndexedDB for crash recovery
 * 
 * This is a NON-BLOCKING, fire-and-observe layer.
 * It does NOT interfere with the main swap execution flow.
 */

import { Connection } from '@solana/web3.js'

// ─── Types ───────────────────────────────────────────────────────────────────

/** Granular finality states — unknown is split by information level */
export type FinalityState =
  | 'pending'
  | 'sent'
  | 'confirmed'
  | 'finalized'
  | 'failed'
  | 'unknown_pending'       // Timeout before any RPC response
  | 'unknown_confirmed'     // Confirmed but finality poll timed out
  | 'unknown_finality'      // Indeterminate finality state (reorg edge)
  | 'reconciled'

/** Normalized drift types for precise diagnostics */
export type DriftType =
  | 'ui_desync'             // UI shows different state than chain
  | 'confirmation_mismatch' // Confirmed state but chain says error
  | 'finality_lag'          // Confirmed but finalized takes too long
  | 'rpc_conflict'          // Different RPCs report different states

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
  driftType?: DriftType
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
const FINALITY_LAG_WARNING_MS = 2 * 60 * 1000 // Warn if finality takes > 2 min

// ─── IndexedDB Persistence Layer ────────────────────────────────────────────

const IDB_NAME = 'solswap_reconciliation'
const IDB_STORE = 'tracked_transactions'
const IDB_VERSION = 1

class ReconciliationPersistence {
  private db: IDBDatabase | null = null
  private initPromise: Promise<void> | null = null

  async init(): Promise<void> {
    if (this.db) return
    if (this.initPromise) return this.initPromise

    this.initPromise = new Promise<void>((resolve, reject) => {
      try {
        const request = indexedDB.open(IDB_NAME, IDB_VERSION)

        request.onupgradeneeded = (event) => {
          const db = (event.target as IDBOpenDBRequest).result
          if (!db.objectStoreNames.contains(IDB_STORE)) {
            db.createObjectStore(IDB_STORE, { keyPath: 'txId' })
          }
        }

        request.onsuccess = (event) => {
          this.db = (event.target as IDBOpenDBRequest).result
          resolve()
        }

        request.onerror = () => {
          console.warn('[ReconciliationPersistence] IndexedDB not available, running in memory-only mode')
          resolve() // Don't reject — graceful degradation
        }
      } catch (e) {
        console.warn('[ReconciliationPersistence] IndexedDB not supported', e)
        resolve()
      }
    })

    return this.initPromise
  }

  async save(entry: TrackedTransaction): Promise<void> {
    if (!this.db) return
    try {
      const tx = this.db.transaction(IDB_STORE, 'readwrite')
      const store = tx.objectStore(IDB_STORE)
      store.put({ ...entry })
    } catch (e) {
      console.warn('[ReconciliationPersistence] Save failed', e)
    }
  }

  async remove(txId: string): Promise<void> {
    if (!this.db) return
    try {
      const tx = this.db.transaction(IDB_STORE, 'readwrite')
      const store = tx.objectStore(IDB_STORE)
      store.delete(txId)
    } catch (e) {
      console.warn('[ReconciliationPersistence] Remove failed', e)
    }
  }

  async loadAll(): Promise<TrackedTransaction[]> {
    if (!this.db) return []
    return new Promise((resolve) => {
      try {
        const tx = this.db!.transaction(IDB_STORE, 'readonly')
        const store = tx.objectStore(IDB_STORE)
        const request = store.getAll()
        request.onsuccess = () => resolve(request.result || [])
        request.onerror = () => resolve([])
      } catch (e) {
        console.warn('[ReconciliationPersistence] LoadAll failed', e)
        resolve([])
      }
    })
  }

  async clear(): Promise<void> {
    if (!this.db) return
    try {
      const tx = this.db.transaction(IDB_STORE, 'readwrite')
      const store = tx.objectStore(IDB_STORE)
      store.clear()
    } catch (e) {
      console.warn('[ReconciliationPersistence] Clear failed', e)
    }
  }
}

// ─── Reconciliation Worker (Singleton) ──────────────────────────────────────

class ReconciliationWorker {
  private static instance: ReconciliationWorker | null = null

  private tracked = new Map<string, TrackedTransaction>()
  private activeWatchers = 0
  private watcherLocks = new Set<string>() // Prevents duplicate watchers per txId
  private listeners: ReconciliationListener[] = []
  private getConnection: () => Connection
  private persistence = new ReconciliationPersistence()
  private recoveryDone = false
  private pruneTimer: ReturnType<typeof setInterval> | null = null

  // Hot/Cold separation thresholds
  private static readonly HOT_TX_MAX_AGE_MS = 10 * 60 * 1000   // 10 min — actively watched
  private static readonly COLD_TX_MAX_AGE_MS = 30 * 60 * 1000  // 30 min — kept for reference
  private static readonly PRUNE_INTERVAL_MS = 5 * 60 * 1000    // Prune every 5 min

  private constructor(connectionGetter: () => Connection) {
    this.getConnection = connectionGetter
    // Fire recovery on init (non-blocking)
    this.recoverFromPersistence()
    // Start periodic pruning for memory pressure
    this.pruneTimer = setInterval(() => this.pruneStale(), ReconciliationWorker.PRUNE_INTERVAL_MS)
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

  /** Recover unfinalized transactions from IndexedDB after page reload (causal order) */
  private async recoverFromPersistence(): Promise<void> {
    try {
      await this.persistence.init()
      const saved = await this.persistence.loadAll()

      if (saved.length === 0) {
        this.recoveryDone = true
        return
      }

      // Sort by causal order: timestamp first, then slot for same-second TXs
      saved.sort((a, b) => {
        const timeDiff = a.confirmedAt - b.confirmedAt
        if (timeDiff !== 0) return timeDiff
        return (a.metadata.slot || 0) - (b.metadata.slot || 0)
      })

      console.log('[ReconciliationWorker] Recovering from persistence (causal order)', {
        count: saved.length,
        txIds: saved.map(s => s.txId),
        order: saved.map(s => ({ txId: s.txId, confirmedAt: s.confirmedAt, slot: s.metadata.slot }))
      })

      for (const entry of saved) {
        // Only recover non-terminal states
        if (entry.state === 'confirmed' || entry.state === 'unknown_confirmed') {
          entry.pollCount = 0 // Reset polls for fresh recovery
          this.tracked.set(entry.txId, entry)

          if (this.activeWatchers < MAX_CONCURRENT_WATCHERS) {
            this.spawnWatcher(entry.txId)
          }
        } else if (entry.state === 'finalized' || entry.state === 'failed') {
          // Terminal — clean up from persistence
          await this.persistence.remove(entry.txId)
        }
      }

      this.recoveryDone = true
    } catch (e) {
      console.warn('[ReconciliationWorker] Recovery failed, continuing fresh', e)
      this.recoveryDone = true
    }
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
      driftType: event.driftType,
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

    // Persist to IndexedDB for crash recovery
    this.persistence.save(entry)

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
      setTimeout(() => this.trySpawnPendingWatchers(), 5000)
    }
  }

  private trySpawnPendingWatchers(): void {
    for (const [txId, entry] of this.tracked.entries()) {
      if (this.activeWatchers >= MAX_CONCURRENT_WATCHERS) break
      if ((entry.state === 'confirmed' || entry.state === 'unknown_confirmed') && entry.pollCount === 0) {
        this.spawnWatcher(txId)
      }
    }
  }

  private async spawnWatcher(txId: string): Promise<void> {
    // Runtime lock — prevent duplicate watchers for same txId
    if (this.watcherLocks.has(txId)) {
      console.warn('[ReconciliationWorker] Watcher already running, skipping', { txId })
      return
    }
    this.watcherLocks.add(txId)
    this.activeWatchers++
    
    try {
      await this.pollUntilFinalized(txId)
    } catch (e) {
      console.error('[ReconciliationWorker] Watcher error', { txId, error: e })
    } finally {
      this.watcherLocks.delete(txId)
      this.activeWatchers--
      this.trySpawnPendingWatchers()
    }
  }

  private async pollUntilFinalized(txId: string): Promise<void> {
    const entry = this.tracked.get(txId)
    if (!entry) return

    const startTime = Date.now()
    let finalityLagWarned = false

    while (entry.pollCount < MAX_POLL_ATTEMPTS) {
      const elapsed = Date.now() - startTime

      // Finality lag warning (not terminal, just observational)
      if (!finalityLagWarned && elapsed > FINALITY_LAG_WARNING_MS) {
        finalityLagWarned = true
        this.emit({
          type: 'drift_detected',
          driftType: 'finality_lag',
          txId,
          swapSessionId: entry.swapSessionId,
          previousState: entry.state,
          newState: entry.state, // State unchanged — just a warning
          metadata: {
            elapsedMs: elapsed,
            pollCount: entry.pollCount,
            ...entry.metadata
          }
        })
      }

      // Check hard timeout
      if (elapsed > FINALITY_TIMEOUT_MS) {
        const newState: FinalityState = entry.state === 'confirmed'
          ? 'unknown_confirmed'   // We know it was confirmed, but finality timed out
          : 'unknown_finality'    // Indeterminate
        
        entry.state = newState
        this.persistence.save(entry) // Persist unknown state for recovery

        this.emit({
          type: 'timeout',
          txId,
          swapSessionId: entry.swapSessionId,
          previousState: 'confirmed',
          newState,
          metadata: {
            pollCount: entry.pollCount,
            elapsedMs: elapsed,
            ...entry.metadata
          }
        })
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
          // TX not found — could be RPC lag or genuinely missing
          if (entry.pollCount > 10) {
            const previousState = entry.state
            entry.state = 'unknown_pending'
            this.persistence.save(entry)

            this.emit({
              type: 'drift_detected',
              driftType: 'rpc_conflict',
              txId,
              swapSessionId: entry.swapSessionId,
              previousState,
              newState: 'unknown_pending',
              metadata: {
                reason: 'TX not found after 10+ polls — possible RPC inconsistency',
                pollCount: entry.pollCount,
                ...entry.metadata
              }
            })
          }
          continue
        }

        const confirmationStatus = status.value.confirmationStatus

        if (confirmationStatus === 'finalized') {
          const previousState = entry.state
          entry.state = 'finalized'
          entry.finalizedAt = Date.now()

          // Persist then clean up
          await this.persistence.remove(txId)

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

          await this.persistence.remove(txId)

          // Determine drift type based on previous state
          const driftType: DriftType = previousState === 'confirmed'
            ? 'confirmation_mismatch' // Was confirmed, now shows error
            : 'ui_desync'

          this.emit({
            type: 'drift_detected',
            driftType,
            txId,
            swapSessionId: entry.swapSessionId,
            previousState,
            newState: 'failed',
            metadata: {
              reason: `Transaction failed on-chain after ${previousState}`,
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
    entry.state = 'unknown_finality'
    this.persistence.save(entry)

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

  /** Cleanup old entries (call periodically to prevent memory leak) */
  cleanup(maxAgeMs: number = 30 * 60 * 1000): void {
    const now = Date.now()
    for (const [txId, entry] of this.tracked.entries()) {
      const isTerminal = entry.state === 'finalized' || entry.state === 'failed' ||
        entry.state === 'unknown_pending' || entry.state === 'unknown_finality'
      if (isTerminal && (now - entry.confirmedAt) > maxAgeMs) {
        this.tracked.delete(txId)
        this.persistence.remove(txId)
      }
    }
  }

  /**
   * Prune stale transactions based on hot/cold separation.
   * Hot: actively being watched (< HOT_TX_MAX_AGE_MS)
   * Cold: kept for reference but no longer actively polled (< COLD_TX_MAX_AGE_MS)
   * Beyond cold: evicted from memory + persistence
   */
  private pruneStale(): void {
    const now = Date.now()
    let pruned = 0

    for (const [txId, entry] of this.tracked.entries()) {
      const age = now - entry.confirmedAt
      const isTerminal = entry.state === 'finalized' || entry.state === 'failed' ||
        entry.state === 'unknown_pending' || entry.state === 'unknown_finality'

      // Cold eviction: terminal TXs older than COLD threshold
      if (isTerminal && age > ReconciliationWorker.COLD_TX_MAX_AGE_MS) {
        this.tracked.delete(txId)
        this.persistence.remove(txId)
        pruned++
        continue
      }

      // Hot demotion: non-terminal TXs older than HOT threshold
      // These are stuck — mark as unknown and stop watching
      if (!isTerminal && age > ReconciliationWorker.HOT_TX_MAX_AGE_MS && !this.watcherLocks.has(txId)) {
        entry.state = 'unknown_finality'
        this.persistence.save(entry)
        pruned++
      }
    }

    if (pruned > 0) {
      console.log('[ReconciliationWorker] Pruned stale transactions', {
        pruned,
        remaining: this.tracked.size,
        activeWatchers: this.activeWatchers
      })
    }
  }
}

// ─── Public API ─────────────────────────────────────────────────────────────

/** Get the singleton reconciliation worker instance */
export function getReconciliationWorker(connectionGetter?: () => Connection): ReconciliationWorker {
  return ReconciliationWorker.getInstance(connectionGetter)
}

export default ReconciliationWorker
