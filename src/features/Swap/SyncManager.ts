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
  type: 'TX_STATE_UPDATE' | 'TX_WATCHER_STOP' | 'SYNC_REQUEST' | 'SYNC_REPLY' | 'LEADER_HEARTBEAT'
  txId: string
  payload: {
    state?: FinalityState
    probability?: number
    confirmations?: number
    isFinalizedTruth: boolean
    slot?: number
    timestamp: number
    fullState?: any // Used for SYNC_REPLY
  }
}

type SyncListener = (msg: SyncMessage) => void

class SyncManager {
  private static instance: SyncManager | null = null
  private channel: BroadcastChannel
  private listeners: SyncListener[] = []
  private activeLocks = new Set<string>()
  private heartbeats = new Map<string, number>()
  private heartbeatTimers = new Map<string, ReturnType<typeof setInterval>>()

  private constructor() {
    this.channel = new BroadcastChannel('solswap_orchestration')
    this.channel.onmessage = (event) => this.handleMessage(event.data)
    
    // Broadcast sync request on tab boot to catch up with existing leaders
    setTimeout(() => {
      this.broadcastUpdate({
        type: 'SYNC_REQUEST',
        txId: 'global',
        payload: { isFinalizedTruth: false }
      })
    }, 500)
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
            this.startHeartbeat(txId)
            resolve(true)
            return new Promise((_) => { /* Hold lock indefinitely */ })
          } else {
            resolve(false)
          }
        })
        setTimeout(() => resolve(false), 2000)
      })

      return lockAcquired
    } catch (e) {
      console.warn('[SyncManager] Lock request failed', e)
      return false
    }
  }

  private startHeartbeat(txId: string): void {
    if (this.heartbeatTimers.has(txId)) return
    
    const timer = setInterval(() => {
      if (!this.activeLocks.has(txId)) {
        this.stopHeartbeat(txId)
        return
      }
      this.broadcastUpdate({
        type: 'LEADER_HEARTBEAT',
        txId,
        payload: { isFinalizedTruth: false }
      })
    }, 3000) // 3s heartbeat

    this.heartbeatTimers.set(txId, timer)
  }

  private stopHeartbeat(txId: string): void {
    const timer = this.heartbeatTimers.get(txId)
    if (timer) {
      clearInterval(timer)
      this.heartbeatTimers.delete(txId)
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
    if (msg.type === 'LEADER_HEARTBEAT') {
      this.heartbeats.set(msg.txId, Date.now())
    }

    // Avoid processing messages from self (though channel usually ignores sender)
    for (const listener of this.listeners) {
      try {
        listener(msg)
      } catch (e) {
        console.error('[SyncManager] Listener error', e)
      }
    }
  }

  /** Check if a leader is still alive for a given TX */
  isLeaderResponsive(txId: string, gracePeriodMs = 10000): boolean {
    const last = this.heartbeats.get(txId)
    if (!last) return false
    return (Date.now() - last) < gracePeriodMs
  }

  releaseLock(txId: string): void {
    this.activeLocks.delete(txId)
    this.stopHeartbeat(txId)
  }
}

export const syncManager = SyncManager.getInstance()
export default syncManager
