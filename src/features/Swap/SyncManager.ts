/**
 * SyncManager.ts
 * 
 * Multi-tab Coordination & State Synchronization
 * 
 * Responsibilities:
 * - Real-time IPC between browser tabs via BroadcastChannel
 * - Watcher leadership election per txId using Web Locks API
 * - Prevention of redundant RPC calls across sessions
 */

import { FinalityState } from './reconciliationWorker'

export interface SyncMessage {
  type: 'TX_STATE_UPDATE' | 'TX_WATCHER_STOP' | 'SYNC_REQUEST'
  txId: string
  payload: {
    state?: FinalityState
    probability?: number
    confirmations?: number
    slot?: number
    timestamp: number
  }
}

type SyncListener = (msg: SyncMessage) => void

class SyncManager {
  private static instance: SyncManager | null = null
  private channel: BroadcastChannel
  private listeners: SyncListener[] = []
  private activeLocks = new Set<string>()

  private constructor() {
    this.channel = new BroadcastChannel('solswap_orchestration')
    this.channel.onmessage = (event) => this.handleMessage(event.data)
  }

  static getInstance(): SyncManager {
    if (!SyncManager.instance) {
      SyncManager.instance = new SyncManager()
    }
    return SyncManager.instance
  }

  /**
   * Attempt to acquire the active poller lock for a transaction.
   * Only one tab across the entire browser session can hold this for a specific txId.
   */
  async acquireWatcherLock(txId: string, onLockLost?: () => void): Promise<boolean> {
    try {
      // Use Web Locks API to ensure only one watcher polls per TX
      // We use 'ifAvailable: true' to fail immediately if another tab has it
      const lockAcquired = await new Promise<boolean>((resolve) => {
        navigator.locks.request(`tx_watcher_${txId}`, { ifAvailable: true }, async (lock) => {
          if (lock) {
            this.activeLocks.add(txId)
            resolve(true)
            // The lock is held as long asthis promise is pending.
            // We return a promise that we can control if we need to release it externally,
            // but for now, we keep it until the watcher finishes or the tab closes.
            return new Promise((_) => {
              // Lock held indefinitely within this callback scope
            })
          } else {
            resolve(false)
          }
        })
        
        // Timeout if locks.request hangs (edge case)
        setTimeout(() => resolve(false), 2000)
      })

      return lockAcquired
    } catch (e) {
      console.warn('[SyncManager] Lock request failed', e)
      return false
    }
  }

  /** Broadcast a state update to all other tabs */
  broadcastUpdate(msg: Omit<SyncMessage, 'payload'> & { payload: Omit<SyncMessage['payload'], 'timestamp'> }): void {
    const fullMsg: SyncMessage = {
      ...msg,
      payload: {
        ...msg.payload,
        timestamp: Date.now()
      }
    }
    this.channel.postMessage(fullMsg)
  }

  /** Subscribe to sync events from other tabs */
  subscribe(listener: SyncListener): () => void {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener)
    }
  }

  private handleMessage(msg: SyncMessage): void {
    // Avoid processing messages from self (though channel usually ignores sender)
    for (const listener of this.listeners) {
      try {
        listener(msg)
      } catch (e) {
        console.error('[SyncManager] Listener error', e)
      }
    }
  }

  releaseLock(txId: string): void {
    // In Web Locks API, release is implicit when the promise resolves.
    // Our implementation keeps the promise pending, so we don't have a manual release here
    // unless we change the architecture to use a controlled promise.
    // For now, locks release when the tab closes or the watcher finishes polling (if we resolve the promise).
    this.activeLocks.delete(txId)
  }
}

export const syncManager = SyncManager.getInstance()
export default syncManager
