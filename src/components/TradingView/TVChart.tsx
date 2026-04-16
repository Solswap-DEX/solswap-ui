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
  NO_DATA = 'NO_DATA',
  INVALID_PAIR = 'INVALID_PAIR'
}

const WSOL_MINT = 'So11111111111111111111111111111111111111112'
const NATIVE_SOL_MINT = '11111111111111111111111111111111'
const MIN_LIQUIDITY_USD = 1000 // Upped to $1,000 for production stability
const API_TIMEOUT_MS = 12000

const COMMON_MINTS = [
  'SOL_IDENTITY',
  'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'.toLowerCase(), // USDC
  'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB'.toLowerCase(), // USDT
]

const CANONICAL_MAP: Record<string, string> = {
  'sol': 'SOL_IDENTITY',
  'wsol': 'SOL_IDENTITY',
  'usdc': 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'.toLowerCase(),
  'usdt': 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB'.toLowerCase(),
}

const MINT_ADDRESSES: Record<string, string> = {
  'sol': WSOL_MINT,
  'wsol': WSOL_MINT,
  'usdc': 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
  'usdt': 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
}

/**
 * Normalizes SOL and WSOL to the same identity for matching purposes.
 * Handles both on-chain addresses and literal strings like "sol" or "usdc".
 */
const normalizeMint = (mint?: string) => {
  if (!mint) return ''
  const m = mint.trim().toLowerCase()
  if (m === WSOL_MINT.toLowerCase() || m === NATIVE_SOL_MINT.toLowerCase()) {
    return 'SOL_IDENTITY'
  }
  return CANONICAL_MAP[m] || m
}

const getMintAddress = (mint: string) => {
  const m = mint.trim().toLowerCase()
  return MINT_ADDRESSES[m] || mint
}

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
      base: parts[0],
      quote: parts[1]
    }
  }, [poolId])

  useEffect(() => {
    if (!mints) {
      setChartState(ChartState.NO_DATA)
      return
    }

    const normBase = normalizeMint(mints.base)
    const normQuote = normalizeMint(mints.quote)

    setChartState(ChartState.LOADING)
    setPairAddress(null)
    setFallbackPair(null)

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT_MS)

    const baseAddress = getMintAddress(mints.base)
    const quoteAddress = getMintAddress(mints.quote)

    console.log(`[Chart] Searching \u2192 ${baseAddress} & ${quoteAddress}`)

    fetch(`https://api.dexscreener.com/latest/dex/search?q=${baseAddress}%20${quoteAddress}`, { signal: controller.signal })
      .then(res => res.json())
      .then(data => {
        if (!isComponentMounted.current) return
        clearTimeout(timeoutId)

        const rawPairs = (data?.pairs || []) as any[]

        // Filter and Log Rejections
        const validPairs = rawPairs.filter(p => {
          const pBase = normalizeMint(p.baseToken?.address)
          const pQuote = normalizeMint(p.quoteToken?.address)

          if (p.chainId !== 'solana') {
            console.log(`[Chart] REJECTED POOL ${p.pairAddress} (${pBase}/${pQuote}) \u2192 reason: wrong_chain (${p.chainId})`)
            return false
          }
          if ((p.liquidity?.usd || 0) < MIN_LIQUIDITY_USD) {
            console.log(`[Chart] REJECTED POOL ${p.pairAddress} \u2192 reason: low_liquidity ($${Math.round(p.liquidity?.usd || 0)})`)
            return false
          }
          if ((p.volume?.h24 || 0) <= 0) {
            console.log(`[Chart] REJECTED POOL ${p.pairAddress} \u2192 reason: zero_volume`)
            return false
          }
          return true
        })

        if (validPairs.length === 0) {
          console.log(`[Chart] NO DATA \u2192 token: ${mints.base} | reason: no pools passed filters`)
          setChartState(ChartState.NO_DATA)
          return
        }

        // --- PRIORITY 1: EXACT NORMALIZED MATCH ---
        const exactMatch = validPairs.find(p => {
          const pBase = normalizeMint(p.baseToken?.address)
          const pQuote = normalizeMint(p.quoteToken?.address)
          return (pBase === normBase && pQuote === normQuote) || (pBase === normQuote && pQuote === normBase)
        })

        if (exactMatch) {
          console.log(`[Chart] EXACT MATCH (Normalized) \u2192 ${exactMatch.pairAddress}`)
          setPairAddress(exactMatch.pairAddress)
          setChartState(ChartState.EXACT)
          return
        }

        // --- PRIORITY 2: INTELLIGENT FALLBACK ---
        // Since `validPairs` could contain pairs that just loosely match the search heuristics,
        // we strongly prefer a pool that contains at least one of our exact selected tokens.
        
        const preferredFallback = validPairs
          .filter(p => {
             const pBase = normalizeMint(p.baseToken?.address)
             const pQuote = normalizeMint(p.quoteToken?.address)
             return pBase === normBase || pQuote === normBase || pBase === normQuote || pQuote === normQuote
          })
          .sort((a, b) => (b.liquidity?.usd || 0) - (a.liquidity?.usd || 0))[0]

        const fallback = preferredFallback || validPairs.sort((a, b) => (b.liquidity?.usd || 0) - (a.liquidity?.usd || 0))[0]

        console.log(`[Chart] FALLBACK \u2192 ${fallback.pairAddress} | reason: no exact matching pair, using best available liquidity`)
        
        setPairAddress(fallback.pairAddress)
        setFallbackPair({
           base: fallback.baseToken?.symbol || '?',
           quote: fallback.quoteToken?.symbol || '?'
        })
        setChartState(ChartState.FALLBACK)
      })
      .catch((err) => {
        if (!isComponentMounted.current) return
        clearTimeout(timeoutId)
        if (err.name === 'AbortError') return
        console.warn("[Chart API Error]", err)
        setChartState(ChartState.NO_DATA)
      })

    return () => {
      controller.abort()
      clearTimeout(timeoutId)
    }
  }, [mints?.base, mints?.quote])

  // --- RENDERIZADO ---

  if (chartState === ChartState.NO_DATA || chartState === ChartState.INVALID_PAIR) {
    return (
      <Box w="100%" h={height} minH="300px" bg="#0D1117" borderRadius="xl" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={3}>
        <Text fontSize="2xl" opacity={0.3}>\uD83D\uDCCA</Text>
        <Text color="#666" fontSize="sm" fontWeight="500">
           {chartState === ChartState.INVALID_PAIR ? 'Incoherent trading pair' : 'No chart data available for this pair'}
        </Text>
        <Text color="#555" fontSize="xs" maxW="240px" textAlign="center">
           Requires liquidity &gt; $1,000 USD and active volume.
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
