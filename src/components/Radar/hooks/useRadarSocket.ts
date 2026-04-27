import { useEffect, useState, useRef, useCallback } from 'react'
import { io, Socket } from 'socket.io-client'
import { RadarToken, RadarAlert } from '../radar.types'

const RADAR_HTTP = 'https://solswap.cloud/radar-api'
const RADAR_WS_URL = 'https://solswap.cloud'
const CONNECTION_TIMEOUT_MS = 6000
const MAX_RECONNECT_ATTEMPTS = 10

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
      price_at_detection: Math.random() * 0.01,
      market_cap: Math.floor(Math.random() * 500000) + 5000,
      bonding_curve_pct: Math.floor(Math.random() * 100),
      is_pumpfun: Math.random() > 0.3,
      is_graduated: Math.random() > 0.8,
      price_change_5m: (Math.random() - 0.4) * 100,
      price_change_1h: (Math.random() - 0.5) * 200,
      ds_listing_age_seconds: Math.floor(Math.random() * 86400 * 30),
      delta_liquidity: (Math.random() - 0.5) * 50000,
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
  const socketRef = useRef<Socket | null>(null)
  const reconnectAttempts = useRef(0)

  const isEmptyToken = useCallback((token: RadarToken): boolean => {
    // Keep tokens that have any real signal: score, liquidity, volume, or pump probability
    return (
      Number(token.alpha_score) === 0 &&
      Number(token.liquidity) === 0 &&
      Number(token.volume_1m) === 0 &&
      !token.pump_probability
    )
  }, [])

  const activateDemoMode = useCallback(() => {
    setIsDemoMode(true)
    setTokens(generateDemoTokens())
    setAlerts(generateDemoAlerts())
    setIsConnected(true)
    setIsLoading(false)
  }, [])

  const fetchTokens = useCallback(async (): Promise<boolean> => {
    try {
      const res = await fetch(`${RADAR_HTTP}/radar/recent`)
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
  }, [isEmptyToken])

  useEffect(() => {
    // Load initial data first
    fetchTokens()

    // Connect using socket.io-client — handles reconnect, handshake and ping/pong automatically
    const socket = io(RADAR_WS_URL, {
      path: '/radar-ws/socket.io',
      transports: ['websocket'],
      reconnectionAttempts: MAX_RECONNECT_ATTEMPTS,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      timeout: CONNECTION_TIMEOUT_MS,
    })

    socketRef.current = socket

    socket.on('connect', () => {
      console.log('[RADAR] Socket.IO connected ✓')
      setIsConnected(true)
      setIsLoading(false)
      setIsDemoMode(false)
      reconnectAttempts.current = 0
    })

    socket.on('disconnect', (reason) => {
      console.log('[RADAR] Disconnected:', reason)
      setIsConnected(false)
    })

    socket.on('connect_error', (err) => {
      console.warn('[RADAR] Connection error:', err.message)
      reconnectAttempts.current++
      if (reconnectAttempts.current >= MAX_RECONNECT_ATTEMPTS) {
        socket.disconnect()
        activateDemoMode()
      }
    })

    socket.on('radar:token', (payload: RadarToken) => {
      if (isEmptyToken(payload)) return
      // Only drop IGNORE tokens that have no real enrichment data
      if (payload.alpha_label === '❌ IGNORE' && !payload.pump_probability && !payload.data_pending) return
      setTokens(prev => {
        const filtered = prev.filter((t: RadarToken) => t.mint !== payload.mint)
        return [payload, ...filtered].slice(0, 100)
      })
    })

    socket.on('radar:alert', (payload: RadarAlert) => {
      setAlerts(prev => [payload, ...prev].slice(0, 20))
    })

    return () => {
      socket.disconnect()
    }
  }, [fetchTokens, activateDemoMode, isEmptyToken])

  return { tokens, alerts, isConnected, isLoading, isDemoMode }
}