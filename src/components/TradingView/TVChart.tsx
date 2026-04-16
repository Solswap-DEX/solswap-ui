import React, { useMemo, useState, useEffect, useRef } from 'react'
import { Box, Spinner, Text, Flex, Link, Badge } from '@chakra-ui/react'

interface TVChartProps {
  id?: string
  height?: string
  birdeye?: boolean
  poolId?: string
  mintBInfo?: { address?: string; symbol?: string }
  [key: string]: any
}

enum ChartState {
  LOADING = 'LOADING',
  EXACT = 'EXACT',
  FALLBACK = 'FALLBACK',
  NO_DATA = 'NO_DATA'
}

const WSOL_MINT = 'So11111111111111111111111111111111111111112'
const NULL_MINT = '11111111111111111111111111111111'
const MIN_LIQUIDITY_USD = 100
const API_TIMEOUT_MS = 12000

export default function TVChart({ id, height = '100%', poolId, mintBInfo, ...rest }: TVChartProps) {
  const [pairAddress, setPairAddress] = useState<string | null>(null)
  const [fallbackPair, setFallbackPair] = useState<{ base: string; quote: string } | null>(null)
  const [chartState, setChartState] = useState<ChartState>(ChartState.LOADING)
  const isComponentMounted = useRef(true)

  useEffect(() => {
    isComponentMounted.current = true
    return () => {
      isComponentMounted.current = false
    }
  }, [])

  // Resolve mints from poolId
  const mints = useMemo(() => {
    if (!poolId) return null
    const parts = poolId.split('_').filter(Boolean)
    if (parts.length < 2) return null
    return {
      base: parts[0] === NULL_MINT ? WSOL_MINT : parts[0],
      quote: parts[1] === NULL_MINT ? WSOL_MINT : parts[1]
    }
  }, [poolId])

  useEffect(() => {
    if (!mints) {
      setChartState(ChartState.NO_DATA)
      return
    }

    setChartState(ChartState.LOADING)
    setPairAddress(null)
    setFallbackPair(null)

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT_MS)

    fetch(`https://api.dexscreener.com/latest/dex/tokens/${mints.base}`, { signal: controller.signal })
      .then(res => res.json())
      .then(data => {
        if (!isComponentMounted.current) return
        clearTimeout(timeoutId)

        const allPairs = (data?.pairs || []) as any[]

        // REQUIREMENTS 2: VALIDITY FILTER (Solana, Liquidity >= 100, Volume > 0)
        const validPairs = allPairs.filter(p => 
          p.chainId === 'solana' &&
          (p.liquidity?.usd || 0) >= MIN_LIQUIDITY_USD &&
          (p.volume?.h24 || 0) > 0
        )

        if (validPairs.length === 0) {
          console.log(`[Chart] NO DATA \u2192 token: ${mints.base}`)
          setChartState(ChartState.NO_DATA)
          return
        }

        // REQUIREMENT 1: STRICT PAIR MATCH
        const exactMatch = validPairs.find(p => 
          (p.baseToken?.address === mints.base && p.quoteToken?.address === mints.quote) ||
          (p.baseToken?.address === mints.quote && p.quoteToken?.address === mints.base)
        )

        if (exactMatch) {
          console.log(`[Chart] EXACT MATCH \u2192 ${exactMatch.pairAddress}`)
          setPairAddress(exactMatch.pairAddress)
          setChartState(ChartState.EXACT)
          return
        }

        // REQUIREMENT 4: FALLBACK LOGIC
        // Step 1: Find best alternative pool for the TARGET TOKEN (quoteMint)
        const targetTokenPools = validPairs
          .filter(p => p.baseToken?.address === mints.quote || p.quoteToken?.address === mints.quote)
          .sort((a, b) => (b.liquidity?.usd || 0) - (a.liquidity?.usd || 0))

        if (targetTokenPools.length > 0) {
          const fallback = targetTokenPools[0]
          console.log(`[Chart] FALLBACK \u2192 ${fallback.pairAddress} | reason: no exact match`)
          
          setPairAddress(fallback.pairAddress)
          setFallbackPair({
             base: fallback.baseToken?.symbol || '?',
             quote: fallback.quoteToken?.symbol || '?'
          })
          setChartState(ChartState.FALLBACK)
        } else {
          console.log(`[Chart] NO DATA \u2192 token: ${mints.quote}`)
          setChartState(ChartState.NO_DATA)
        }
      })
      .catch((err) => {
        if (!isComponentMounted.current) return
        clearTimeout(timeoutId)
        console.warn("[Chart API Error]", err)
        setChartState(ChartState.NO_DATA)
      })

    return () => {
      controller.abort()
      clearTimeout(timeoutId)
    }
  }, [mints?.base, mints?.quote])

  // --- RENDERIZADO ---

  if (chartState === ChartState.NO_DATA) {
    return (
      <Box w="100%" h={height} minH="300px" bg="#0D1117" borderRadius="xl" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={3}>
        <Text fontSize="2xl" opacity={0.3}>📊</Text>
        <Text color="#666" fontSize="sm" fontWeight="500">No chart data available for this pair</Text>
        <Text color="#555" fontSize="xs" maxW="240px" textAlign="center">
           Ensuring liquidity &gt; $100 and recent volume.
        </Text>
      </Box>
    )
  }

  if (chartState === ChartState.LOADING || !pairAddress) {
    return (
      <Box w="100%" h={height} minH="300px" bg="#0D1117" borderRadius="xl" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={3}>
        <Spinner color="#00D1FF" size="lg" />
        <Text color="#555" fontSize="sm">Loading chart...</Text>
      </Box>
    )
  }

  const embedUrl = `https://dexscreener.com/solana/${pairAddress}?embed=1&info=0&trades=0&theme=dark`
  const externalUrl = `https://dexscreener.com/solana/${pairAddress}`

  return (
    <Box w="100%" h={height} minH="300px" borderRadius="xl" overflow="hidden" position="relative">
      <iframe
        id={id}
        src={embedUrl}
        style={{ width: '100%', height: '100%', border: 'none', backgroundColor: '#0D1117' }}
        title="DexScreener Chart"
        allow="clipboard-write"
        sandbox="allow-scripts allow-same-origin"
        loading="lazy"
      />
      
      {/* Fallback Label */}
      {chartState === ChartState.FALLBACK && fallbackPair && (
        <Flex position="absolute" top="12px" left="12px" pointerEvents="none">
          <Badge bg="rgba(255, 171, 0, 0.9)" color="black" px={2} borderRadius="md" fontSize="10px" fontWeight="700">
            Chart: {fallbackPair.base}/{fallbackPair.quote} (fallback)
          </Badge>
        </Flex>
      )}

      {/* Provider & Action Label */}
      <Flex 
         position="absolute" 
         bottom="8px" 
         right="8px" 
         bg="rgba(13, 17, 23, 0.85)"
         px={3} py="5px" 
         borderRadius="md" 
         fontSize="11px" 
         color="#aaa"
         alignItems="center"
         gap={2}
         border="1px solid rgba(255,255,255,0.05)"
         transition="0.2s"
         _hover={{ bg: "rgba(13, 17, 23, 0.95)", color: "#fff" }}
       >
         <Text fontWeight="600">Source: DexScreener</Text>
         <Box w="1px" h="10px" bg="rgba(255,255,255,0.2)" />
         <Link href={externalUrl} isExternal display="flex" alignItems="center" gap={1} _hover={{ color: "#00D1FF", textDecoration: 'none' }}>
           Open in DexScreener <Box as="span" fontSize="10px">\uD83D\uDE80</Box>
         </Link>
       </Flex>
    </Box>
  )
}

export const refreshChartSubject = { next: () => {} }
