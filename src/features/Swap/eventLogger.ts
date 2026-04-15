/**
 * eventLogger.ts
 * 
 * Persistent Audit Log for Transaction Orchestration
 * 
 * Responsibilities:
 * - Append-only local storage of critical lifecycle events
 * - Non-blocking writes to IndexedDB
 * - Structured event visualization for debugging
 */

const IDB_NAME = 'solswap_reconciliation'
const IDB_EVENT_STORE = 'event_log'
const IDB_VERSION = 2 // Upgraded for event_log store

export type EventSeverity = 'info' | 'warn' | 'error' | 'critical'

export interface AuditEvent {
  id?: number
  timestamp: number
  sessionId?: string
  txId?: string
  topic: string
  message: string
  severity: EventSeverity
  metadata: Record<string, any>
}

class EventLogger {
  private static instance: EventLogger | null = null
  private db: IDBDatabase | null = null
  private initPromise: Promise<void> | null = null

  private constructor() {
    this.init()
  }

  static getInstance(): EventLogger {
    if (!EventLogger.instance) {
      EventLogger.instance = new EventLogger()
    }
    return EventLogger.instance
  }

  async init(): Promise<void> {
    if (this.db) return
    if (this.initPromise) return this.initPromise

    this.initPromise = new Promise<void>((resolve) => {
      try {
        const request = indexedDB.open(IDB_NAME, IDB_VERSION)

        request.onupgradeneeded = (event) => {
          const db = (event.target as IDBOpenDBRequest).result
          if (!db.objectStoreNames.contains(IDB_EVENT_STORE)) {
            const store = db.createObjectStore(IDB_EVENT_STORE, { 
              keyPath: 'id', 
              autoIncrement: true 
            })
            store.createIndex('timestamp', 'timestamp', { unique: false })
            store.createIndex('sessionId', 'sessionId', { unique: false })
            store.createIndex('txId', 'txId', { unique: false })
          }
          // Migration from version 1 if needed
          if (!db.objectStoreNames.contains('tracked_transactions')) {
            db.createObjectStore('tracked_transactions', { keyPath: 'txId' })
          }
        }

        request.onsuccess = (event) => {
          this.db = (event.target as IDBOpenDBRequest).result
          resolve()
        }

        request.onerror = () => {
          console.warn('[EventLogger] IndexedDB not available')
          resolve()
        }
      } catch (e) {
        console.warn('[EventLogger] Initialization error', e)
        resolve()
      }
    })

    return this.initPromise
  }

  /** Append an event to the persistent log */
  log(event: Omit<AuditEvent, 'timestamp'>): void {
    const fullEvent: AuditEvent = {
      ...event,
      timestamp: Date.now()
    }

    // Log to console for real-time observability
    const color = event.severity === 'error' || event.severity === 'critical' ? 'red' : 
                  event.severity === 'warn' ? 'orange' : 'cyan'
    
    console.log(
      `%c[Audit][${fullEvent.topic}]%c ${fullEvent.message}`, 
      `color: ${color}; font-weight: bold;`, 
      'color: inherit;',
      fullEvent.metadata
    )

    // Fire and forget persistence
    this.persist(fullEvent)
  }

  private async persist(event: AuditEvent): Promise<void> {
    await this.init()
    if (!this.db) return

    try {
      const tx = this.db.transaction(IDB_EVENT_STORE, 'readwrite')
      const store = tx.objectStore(IDB_EVENT_STORE)
      store.add(event)
    } catch (e) {
      // Slitently fail persistence to not block execution
    }
  }

  /** Retrieve recent events for a session or globally */
  async getEvents(limit = 100, sessionId?: string): Promise<AuditEvent[]> {
    await this.init()
    if (!this.db) return []

    return new Promise((resolve) => {
      try {
        const tx = this.db!.transaction(IDB_EVENT_STORE, 'readonly')
        const store = tx.objectStore(IDB_EVENT_STORE)
        let request: IDBRequest<any[]>

        if (sessionId) {
          const index = store.index('sessionId')
          request = index.getAll(IDBKeyRange.only(sessionId))
        } else {
          request = store.getAll(null, limit)
        }

        request.onsuccess = () => {
          const results = request.result || []
          resolve(results.sort((a, b) => b.timestamp - a.timestamp))
        }
        request.onerror = () => resolve([])
      } catch (e) {
        resolve([])
      }
    })
  }

  /** Clear logs older than TTL */
  async prune(maxAgeMs: number): Promise<void> {
    await this.init()
    if (!this.db) return

    const cutoff = Date.now() - maxAgeMs
    try {
      const tx = this.db.transaction(IDB_EVENT_STORE, 'readwrite')
      const store = tx.objectStore(IDB_EVENT_STORE)
      const index = store.index('timestamp')
      const range = IDBKeyRange.upperBound(cutoff)
      
      index.openKeyCursor(range).onsuccess = (e) => {
        const cursor = (e.target as IDBRequest<IDBCursor>).result
        if (cursor) {
          store.delete(cursor.primaryKey)
          cursor.continue()
        }
      }
    } catch (e) {
      console.warn('[EventLogger] Pruning failed', e)
    }
  }
}

export const auditLog = EventLogger.getInstance()
export default auditLog
