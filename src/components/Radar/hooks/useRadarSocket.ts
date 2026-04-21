import { useEffect, useState, useRef } from 'react'
import { RadarToken, RadarAlert } from '../radar.types'

const RADAR_API_URL = 'https://solswap.cloud'

export function useRadarSocket() {
  const [tokens, setTokens] = useState<RadarToken[]>([])
  const [alerts, setAlerts] = useState<RadarAlert[]>([])
  const [isConnected, setIsConnected] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const wsRef = useRef<WebSocket | null>(null)

  const fetchTokens = async () => {
    try {
      const res = await fetch(`${RADAR_API_URL}:3333/radar/recent`)
      const data = await res.json()
      if (data.tokens) {
        setTokens(data.tokens)
      }
    } catch {
      console.log('[RADAR] Using fallback mode')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchTokens()

    let ws: WebSocket | null = null
    try {
      ws = new WebSocket(`wss://solswap.cloud:3333`)

      ws.onopen = () => {
        setIsConnected(true)
      }

      ws.onmessage = (event) => {
        try {
          const msg = event.data as string
          if (msg.startsWith('42')) {
            const parsed = JSON.parse(msg.slice(2))
            const eventType = parsed[0]
            const payload = parsed[1]

            if (eventType === 'radar:token') {
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
      }

      ws.onerror = () => {
        setIsConnected(false)
      }
    } catch {
      console.log('[RADAR] WebSocket not available')
    }

    wsRef.current = ws

    return () => {
      if (ws) ws.close()
    }
  }, [])

  return { tokens, alerts, isConnected, isLoading }
}