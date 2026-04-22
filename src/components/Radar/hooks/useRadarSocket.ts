import { useEffect, useState, useRef, useCallback } from 'react'
import { RadarToken, RadarAlert } from '../radar.types'

const RADAR_HTTP = 'https://solswap.cloud/radar-api'
const RADAR_WS = 'wss://solswap.cloud/radar-ws/socket.io/?EIO=4&transport=websocket'
const CONNECTION_TIMEOUT_MS = 6000
const MAX_RECONNECT_ATTEMPTS = 3

// Demo data shown when RADAR backend is not available
function generateDemoTokens(): RadarToken[] {
  const symbols = ['BONK', 'WIF', 'POPCAT', 'MYRO', 'BOME', 'SLERF', 'MEW', 'TREMP']
  const names = ['Bonk', 'dogwifhat', 'Popcat', 'Myro', 'BOOK OF MEME', 'SLERF', 'cat in a dogs world', 'Doland Tremp']
  const riskLevels: Array<'LOW' | 'MEDIUM' | 'HIGH' | 'RUG PROBABLE'> = ['LOW', 'MEDIUM', 'HIGH', 'RUG PROBABLE']
  const alphaLabels: Array<'HIGH ALPHA' | 'WATCH' | 'NEUTRAL' | 'IGNORE'> = ['HIGH ALPHA', 'WATCH', 'NEUTRAL', 'IGNORE']

  return symbols.map((symbol, i) => {
    const alphaScore = Math.max(10, 95 - i * 10 + Math.floor(Math.random() * 15))
    const riskIdx = Math.min(i < 2 ? 0 : i < 5 ? 1 : i < 7 ? 2 : 3, 3)
    return {
      mint: `Demo${symbol}Mint${Math.random().toString(36).slice(2, 10)}`,
      name: names[i],
      symbol,
      age_seconds: Math.floor(Math.random() * 7200) + 60,
      liquidity: Math.floor(Math.random() * 500000) + 10000,
      volume_1m: Math.floor(Math.random() * 200000) + 5000,
      volume_5m: Math.floor(Math.random() * 800000) + 20000,
      holders: Math.floor(Math.random() * 5000) + 100,
      tx_count: Math.floor(Math.random() * 1000) + 50,
      alpha_score: alphaScore,
      momentum_score: Math.floor(Math.random() * 100),
      risk_score: riskIdx * 25 + Math.floor(Math.random() * 20),
      risk_level: riskLevels[riskIdx],
      wallet_concentration: Math.random() * 0.6 + 0.05,
      lp_locked: Math.random() > 0.3,
      mint_authority_active: riskIdx >= 2,
      price_usd: Math.random() * 0.01,
      last_update: new Date(),
      detected_at: new Date(Date.now() - Math.random() * 3600000),
      alpha_label: alphaLabels[Math.min(riskIdx, 3)],
      rug_signals: riskIdx >= 3 ? ['High concentration', 'Mint active'] : [],
      buys_1m: Math.floor(Math.random() * 200),
      sells_1m: Math.floor(Math.random() * 150),
    }
  })
}

function generateDemoAlerts(): RadarAlert[] {
  return [
    {
      type: 'ALPHA_SURGE',
      mint: 'DemoBONK',
      message: '⚡ BONK alpha score surged to 92',
      severity: 'INFO',
      timestamp: new Date(),
    },
    {
      type: 'VOLUME_SPIKE',
      mint: 'DemoWIF',
      message: '📈 WIF volume spiked 340% in 1 minute',
      severity: 'WARNING',
      timestamp: new Date(Date.now() - 120000),
    },
    {
      type: 'RUG_SIGNAL',
      mint: 'DemoTREMP',
      message: '🚨 TREMP: High wallet concentration detected (62%)',
      severity: 'CRITICAL',
      timestamp: new Date(Date.now() - 300000),
    },
  ]
}

export function useRadarSocket() {
  const [tokens, setTokens] = useState<RadarToken[]>([])
  const [alerts, setAlerts] = useState<RadarAlert[]>([])
  const [isConnected, setIsConnected] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isDemoMode, setIsDemoMode] = useState(false)
  const wsRef = useRef<WebSocket | null>(null)
  const reconnectAttempts = useRef(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const isEmptyToken = useCallback((token: RadarToken): boolean => {
    return (
      Number(token.alpha_score) === 0 &&
      Number(token.liquidity) === 0 &&
      Number(token.volume_1m) === 0
    )
  }, [])

  const activateDemoMode = useCallback(() => {
    if (!isDemoMode) {
      console.log('[RADAR] Backend unavailable — activating demo mode')
      setIsDemoMode(true)
      setTokens(generateDemoTokens())
      setAlerts(generateDemoAlerts())
      setIsConnected(true)
      setIsLoading(false)
    }
  }, [isDemoMode])

  const fetchTokens = useCallback(async (): Promise<boolean> => {
    try {
      const controller = new AbortController()
      const fetchTimeout = setTimeout(() => controller.abort(), CONNECTION_TIMEOUT_MS)
      const res = await fetch(`${RADAR_HTTP}/radar/recent`, { signal: controller.signal })
      clearTimeout(fetchTimeout)
      const data = await res.json()
      if (data.tokens && Array.isArray(data.tokens)) {
        const valid = data.tokens.filter((t: RadarToken) => !isEmptyToken(t))
        setTokens(valid)
        setIsLoading(false)
        return true
      }
    } catch {
      console.log('[RADAR] API fetch failed')
    }
    return false
  }, [])

  useEffect(() => {
    let ws: WebSocket | null = null
    let cancelled = false

    const connectWs = () => {
      if (cancelled) return

      try {
        ws = new WebSocket(RADAR_WS)

        timeoutRef.current = setTimeout(() => {
          if (ws && ws.readyState !== WebSocket.OPEN) {
            ws.close()
            if (reconnectAttempts.current >= MAX_RECONNECT_ATTEMPTS) {
              activateDemoMode()
            }
          }
        }, CONNECTION_TIMEOUT_MS)

        ws.onopen = () => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current)
          setIsConnected(true)
          setIsLoading(false)
          setIsDemoMode(false)
          reconnectAttempts.current = 0
        }

        ws.onmessage = (event) => {
          try {
            const msg = event.data as string
            if (msg.startsWith('42')) {
              const parsed = JSON.parse(msg.slice(2))
              const eventType = parsed[0]
              const payload = parsed[1]

              if (eventType === 'radar:token') {
                if (isEmptyToken(payload)) return

                setTokens(prev => {
                  const filtered = prev.filter((t: RadarToken) => t.mint !== payload.mint)
                  return [payload, ...filtered].slice(0, 50)
                })
              } else if (eventType === 'radar:alert') {
                setAlerts(prev => [payload, ...prev].slice(0, 20))
              }
            }
          } catch {}
        }

        ws.onclose = () => {
          setIsConnected(false)
          if (!cancelled && reconnectAttempts.current < MAX_RECONNECT_ATTEMPTS) {
            reconnectAttempts.current++
            const delay = Math.min(1000 * Math.pow(2, reconnectAttempts.current), 8000)
            setTimeout(connectWs, delay)
          } else if (!cancelled) {
            activateDemoMode()
          }
        }

        ws.onerror = () => {
          // onclose will fire after onerror
        }
      } catch {
        console.log('[RADAR] WebSocket not available')
        activateDemoMode()
      }

      wsRef.current = ws
    }

    // Try API first, then WebSocket
    fetchTokens().then(success => {
      if (success) {
        connectWs()
      } else {
        connectWs()
        // If WS also fails, the timeout/reconnect logic will activate demo mode
      }
    })

    return () => {
      cancelled = true
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (ws) ws.close()
    }
  }, [fetchTokens, activateDemoMode])

  return { tokens, alerts, isConnected, isLoading, isDemoMode }
}