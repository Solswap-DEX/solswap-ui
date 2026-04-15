import React, { useMemo, useState, useEffect, useRef } from 'react'
import { Box, Spinner, Text } from '@chakra-ui/react'

interface TVChartProps {
  id?: string
  height?: string
  birdeye?: boolean
  poolId?: string
  mintBInfo?: { address?: string; symbol?: string }
  [key: string]: any
}

const WSOL_MINT = 'So11111111111111111111111111111111111111112'
const NULL_MINT = '11111111111111111111111111111111'
const FETCH_TIMEOUT_MS = 12000 // 12s max wait for DexScreener

/**
 * TVChart renders a DexScreener embedded chart for the given token pair.
 * Resolves the exact pool address via DexScreener API using both mints.
 * Falls back gracefully when no chart data is available.
 */
export default function TVChart({ id, height = '100%', poolId, mintBInfo, ...rest }: TVChartProps) {
  const [pairAddress, setPairAddress] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [noData, setNoData] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Extract both mints from poolId
  const mints = useMemo(() => {
    if (!poolId) return null
    const parts = poolId.split('_').filter((p) => !!p)
    if (parts.length < 2) return null
    return {
      base: parts[0] === NULL_MINT ? WSOL_MINT : parts[0],
      quote: parts[1] === NULL_MINT ? WSOL_MINT : parts[1]
    }
  }, [poolId])

  // Use DexScreener API to find the exact pool matching both tokens
  useEffect(() => {
    if (!mints) {
      setPairAddress(null)
      setNoData(false)
      return
    }

    let cancelled = false
    setLoading(true)
    setNoData(false)
    setPairAddress(null)

    // Safety timeout — if DexScreener doesn't respond, show fallback
    timeoutRef.current = setTimeout(() => {
      if (!cancelled) {
        setLoading(false)
        setNoData(true)
      }
    }, FETCH_TIMEOUT_MS)

    fetch(`https://api.dexscreener.com/latest/dex/tokens/${mints.base}`)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return
        if (timeoutRef.current) clearTimeout(timeoutRef.current)

        const pairs = data?.pairs || []
        // Find a pair that matches our quote token
        const match = pairs.find(
          (p: any) =>
            (p.baseToken?.address === mints.base && p.quoteToken?.address === mints.quote) ||
            (p.baseToken?.address === mints.quote && p.quoteToken?.address === mints.base)
        )
        if (match) {
          setPairAddress(match.pairAddress)
          setNoData(false)
        } else if (pairs.length > 0) {
          // Fallback: use the first pair (highest liquidity)
          setPairAddress(pairs[0].pairAddress)
          setNoData(false)
        } else {
          setNoData(true)
        }
        setLoading(false)
      })
      .catch(() => {
        if (!cancelled) {
          if (timeoutRef.current) clearTimeout(timeoutRef.current)
          setLoading(false)
          setNoData(true)
        }
      })

    return () => {
      cancelled = true
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [mints?.base, mints?.quote])

  // ── No token pair selected ──
  if (!mints) {
    return (
      <Box
        w="100%"
        h={height}
        minH="300px"
        bg="#0D1117"
        borderRadius="xl"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="#555"
        fontSize="sm"
      >
        Select a token pair to view chart
      </Box>
    )
  }

  // ── No chart data available for this token ──
  if (noData && !loading) {
    return (
      <Box
        w="100%"
        h={height}
        minH="300px"
        bg="#0D1117"
        borderRadius="xl"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={3}
      >
        <Text fontSize="2xl" opacity={0.3}>📊</Text>
        <Text color="#666" fontSize="sm" fontWeight="500">
          No chart data available
        </Text>
        <Text color="#444" fontSize="xs" maxW="240px" textAlign="center">
          This token doesn't have enough liquidity history for charting yet.
        </Text>
      </Box>
    )
  }

  // ── Loading state ──
  if (loading || !pairAddress) {
    return (
      <Box
        w="100%"
        h={height}
        minH="300px"
        bg="#0D1117"
        borderRadius="xl"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={3}
      >
        <Spinner color="#00D1FF" size="lg" />
        <Text color="#555" fontSize="sm">Loading chart...</Text>
      </Box>
    )
  }

  const embedUrl = `https://dexscreener.com/solana/${pairAddress}?embed=1&info=0&trades=0&theme=dark`

  return (
    <Box w="100%" h={height} minH="300px" borderRadius="xl" overflow="hidden">
      <iframe
        id={id}
        src={embedUrl}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '12px',
          backgroundColor: '#0D1117'
        }}
        title="Token Chart"
        allow="clipboard-write"
        loading="lazy"
      />
    </Box>
  )
}

export const refreshChartSubject = {
  next: () => {}
}
