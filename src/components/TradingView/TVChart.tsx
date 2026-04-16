import React, { useMemo, useState, useEffect, useRef } from 'react'
import { Box, Spinner, Text, Flex, Link } from '@chakra-ui/react'

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
const MIN_LIQUIDITY_USD = 100
const API_TIMEOUT_MS = 12000
const IFRAME_TIMEOUT_MS = 10000

type ChartProvider = 'dexscreener' | 'birdeye' | null
type State = 'LOADING' | 'SWAPPING' | 'RENDER' | 'CANT_RENDER'

const problematicPoolCache = new Map<string, number>()
const CACHE_TTL = 1000 * 60 * 15 // 15 mins

export default function TVChart({ id, height = '100%', poolId, mintBInfo, ...rest }: TVChartProps) {
  const [pairAddress, setPairAddress] = useState<string | null>(null)
  const [currentProvider, setCurrentProvider] = useState<ChartProvider>(null)
  const [uiState, setUiState] = useState<State>('LOADING')
  const [loadMsg, setLoadMsg] = useState('Resolviendo pares...')

  const iframeTimeout = useRef<NodeJS.Timeout | null>(null)
  const isComponentMounted = useRef(true)

  // 1. Limpiar timers en unmount
  useEffect(() => {
    isComponentMounted.current = true
    return () => {
      isComponentMounted.current = false
      if (iframeTimeout.current) clearTimeout(iframeTimeout.current)
    }
  }, [])

  // Mints resolution
  const mints = useMemo(() => {
    if (!poolId) return null
    const parts = poolId.split('_').filter(Boolean)
    if (parts.length < 2) return null
    return {
      base: parts[0] === NULL_MINT ? WSOL_MINT : parts[0],
      quote: parts[1] === NULL_MINT ? WSOL_MINT : parts[1]
    }
  }, [poolId])

  // 2. Load API & Pick provider
  useEffect(() => {
    if (!mints) {
      setUiState('CANT_RENDER')
      return
    }

    setUiState('LOADING')
    setLoadMsg('Resolviendo liquidez en el proveedor...')
    setPairAddress(null)

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT_MS)

    fetch(`https://api.dexscreener.com/latest/dex/tokens/${mints.base}`, { signal: controller.signal })
      .then(res => res.json())
      .then(data => {
        if (!isComponentMounted.current) return
        clearTimeout(timeoutId)

        let pairs = (data?.pairs || []) as any[]

        // FILTRO ESTRICTO: Solana, Liquidez >100, Volumen >0
        pairs = pairs.filter(p => 
          p.chainId === 'solana' &&
          (p.liquidity?.usd || 0) >= MIN_LIQUIDITY_USD &&
          (p.volume?.h24 || 0) > 0
        )

        // SELECCIÓN INTELIGENTE
        if (pairs.length === 0) {
          setUiState('CANT_RENDER')
          return
        }

        // Ordenamos por mayor liquidez
        pairs.sort((a, b) => (b.liquidity?.usd || 0) - (a.liquidity?.usd || 0))

        // Si existe un pool que encaje nuestro layout base/quote exacto, le damos prioridad
        let chosenPair = pairs.find(p => 
           (p.baseToken?.address === mints.base && p.quoteToken?.address === mints.quote) ||
           (p.baseToken?.address === mints.quote && p.quoteToken?.address === mints.base)
        )
        if (!chosenPair) chosenPair = pairs[0]

        setPairAddress(chosenPair.pairAddress)

        // Comprobamos cache problemática
        const now = Date.now()
        const badPoolTs = problematicPoolCache.get(chosenPair.pairAddress)

        if (badPoolTs && (now - badPoolTs < CACHE_TTL)) {
           // Usamos Birdeye directamente
           setCurrentProvider('birdeye')
        } else {
           setCurrentProvider('dexscreener')
        }
        setUiState('RENDER')

      })
      .catch((err) => {
        if (!isComponentMounted.current) return
        clearTimeout(timeoutId)
        console.warn("[Chart API Error]", err)
        setUiState('CANT_RENDER')
      })

      return () => {
        controller.abort()
        clearTimeout(timeoutId)
      }
  }, [mints?.base, mints?.quote])

  // 3. Iframe Timeout Logic
  const handleIframeLoad = () => {
    // Si la capa html inicial carga bien, limpiamos el trigger automático 
    // Nota: Aunque esto no atrapa los fallos de JS internos de DexScreener,
    // con el filtro de liquidez previo evitamos el 99% de gráficos "colgados".
    if (iframeTimeout.current) clearTimeout(iframeTimeout.current)
  }

  useEffect(() => {
    if (uiState === 'RENDER' && currentProvider === 'dexscreener' && pairAddress) {
      if (iframeTimeout.current) clearTimeout(iframeTimeout.current)
      
      iframeTimeout.current = setTimeout(() => {
        if (!isComponentMounted.current) return
        
        // Timer vencido: HARD SWAP a birdeye
        problematicPoolCache.set(pairAddress, Date.now())
        setUiState('SWAPPING')
        setLoadMsg('Cargando desde proveedor alternativo...')

        setTimeout(() => {
          if (!isComponentMounted.current) return
          setCurrentProvider('birdeye')
          setUiState('RENDER')
        }, 1200) // Transición visual

      }, IFRAME_TIMEOUT_MS)
    }

    return () => {
      if (iframeTimeout.current) clearTimeout(iframeTimeout.current)
    }
  }, [uiState, currentProvider, pairAddress])

  // --- RENDERIZADO INTERFACES ---

  if (uiState === 'CANT_RENDER') {
    return (
      <Box w="100%" h={height} minH="300px" bg="#0D1117" borderRadius="xl" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={3}>
        <Text fontSize="2xl" opacity={0.3}>📊</Text>
        <Text color="#666" fontSize="sm" fontWeight="500">Gráfico No Disponible</Text>
        <Text color="#555" fontSize="xs" maxW="240px" textAlign="center">
           Volumen muy bajo o token no indexado (Liquidez &lt; $100).
        </Text>
        {pairAddress && (
          <Link mt={2} href={`https://dexscreener.com/solana/${pairAddress}`} isExternal color="#00D1FF" fontSize="12px">
            Revisar estado en DexScreener <Box as="span" display="inline-block" pb="2px">🚀</Box>
          </Link>
        )}
      </Box>
    )
  }

  if (uiState === 'LOADING' || uiState === 'SWAPPING' || !pairAddress || !currentProvider) {
    return (
      <Box w="100%" h={height} minH="300px" bg="#0D1117" borderRadius="xl" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={3}>
        <Spinner color="#00D1FF" size="lg" />
        <Text color="#555" fontSize="sm">{loadMsg}</Text>
      </Box>
    )
  }

  const isBirdeye = currentProvider === 'birdeye'
  const sourceName = isBirdeye ? "Birdeye" : "DexScreener"
  
  // Para Birdeye, usamos el mint del token (priorizando el que no sea WSOL)
  const targetCoint = mints?.base === WSOL_MINT ? mints?.quote : mints?.base;

  const embedUrl = isBirdeye 
    ? `https://embed.birdeye.so/tv-widget/${targetCoint}?chain=solana&viewMode=pair&theme=dark`
    : `https://dexscreener.com/solana/${pairAddress}?embed=1&info=0&trades=0&theme=dark`
  const externalUrl = isBirdeye 
    ? `https://birdeye.so/token/${targetCoint}?chain=solana`
    : `https://dexscreener.com/solana/${pairAddress}`

  return (
    <Box w="100%" h={height} minH="300px" borderRadius="xl" overflow="hidden" position="relative">
      <iframe
        id={id}
        src={embedUrl}
        style={{ width: '100%', height: '100%', border: 'none', backgroundColor: '#0D1117' }}
        title={`${sourceName} Chart`}
        allow="clipboard-write"
        sandbox="allow-scripts allow-same-origin"
        loading="lazy"
        onLoad={handleIframeLoad}
      />
      
      {/* Etiqueta de fuente y apertura externa */}
      <Flex 
         position="absolute" 
         bottom="8px" 
         right="8px" 
         bg="rgba(13, 17, 23, 0.7)"
         px={3} py="5px" 
         borderRadius="md" 
         fontSize="11px" 
         color="#aaa"
         alignItems="center"
         gap={2}
         border="1px solid rgba(255,255,255,0.05)"
         transition="0.2s"
         _hover={{ bg: "rgba(13, 17, 23, 0.9)", color: "#fff" }}
       >
         <Text>Fuente: {sourceName}</Text>
         <Box w="1px" h="10px" bg="rgba(255,255,255,0.2)" />
         <Link href={externalUrl} isExternal display="flex" alignItems="center" gap={1}>
           Abrir externo
         </Link>
       </Flex>
    </Box>
  )
}

export const refreshChartSubject = { next: () => {} }
