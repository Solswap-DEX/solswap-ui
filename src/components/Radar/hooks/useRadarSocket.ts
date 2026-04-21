import { useEffect, useState, useRef } from 'react'
import { RadarToken, RadarAlert } from '../radar.types'

const RADAR_WS_URL =
  typeof window !== 'undefined'
    ? (process.env.NEXT_PUBLIC_RADAR_WS_URL || 'wss://solswap.cloud/radar-ws').replace('http', 'ws')
    : 'wss://solswap.cloud/radar-ws'

export function useRadarSocket() {
  const [tokens, setTokens] = useState<RadarToken[]>([])
  const [alerts, setAlerts] = useState<RadarAlert[]>([])
  const [isConnected, setIsConnected] = useState(false)
  const wsRef = useRef<WebSocket | null>(null)

  useEffect(() => {
    fetch(`${RADAR_WS_URL.replace('ws', 'http')}/radar/recent`)
      .then((r) => r.json())
      .then((data) => setTokens(data.tokens || []))
      .catch(() => {})

    const wsUrl = `${RADAR_WS_URL}?EIO=4&transport=websocket`
    const ws = new WebSocket(wsUrl)
    wsRef.current = ws

    ws.onopen = () => {
      setIsConnected(true)
      ws.send('40')
    }

    ws.onmessage = (event) => {
      try {
        const data = event.data
        if (!data || typeof data !== 'string') return

        if (data.startsWith('42')) {
          const parsed = JSON.parse(data.slice(2))
          const eventType = parsed[0]
          const payload = parsed[1]

          if (eventType === 'radar:token') {
            onRadarToken(payload)
          } else if (eventType === 'radar:alert') {
            onRadarAlert(payload)
          } else if (eventType === 'radar:stop_loss') {
            onStopLoss(payload)
          }
        }
      } catch {}
    }

    ws.onclose = () => {
      setIsConnected(false)
    }

    return () => {
      ws.close()
    }
  }, [])

  const onRadarToken = (token: RadarToken) => {
    setTokens((prev) => {
      const filtered = prev.filter((t) => t.mint !== token.mint)
      return [token, ...filtered].slice(0, 50)
    })
  }

  const onRadarAlert = (alert: RadarAlert) => {
    setAlerts((prev) => [alert, ...prev].slice(0, 20))
  }

  const onStopLoss = (data: any) => {
    onRadarAlert({
      type: 'STOP_LOSS_TRIGGERED',
      mint: data.mint,
      message: data.message,
      severity: 'CRITICAL',
      timestamp: new Date()
    })
  }

  return { tokens, alerts, isConnected }
}