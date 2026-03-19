import React, { useMemo } from 'react'
import { Box } from '@chakra-ui/react'

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

/**
 * TVChart renders a DexScreener embedded chart for the given token pair.
 * Uses both base and quote mints from poolId to resolve the exact pair.
 * Falls back to a styled placeholder if no valid mint address is provided.
 */
export default function TVChart({ id, height = '100%', poolId, mintBInfo, ...rest }: TVChartProps) {
  const tokenAddress = useMemo(() => {
    // poolId format: "baseMint_quoteMint"
    // Use the BASE token (first part) for DexScreener lookup — it shows the
    // highest-volume pair for that token, which is typically the correct one.
    if (poolId) {
      const parts = poolId.split('_').filter((p) => !!p)
      // Pick the first non-null mint; map null address to WSOL
      for (const p of parts) {
        if (p === NULL_MINT) return WSOL_MINT
        return p
      }
    }
    // Fallback to mintBInfo
    if (mintBInfo?.address) {
      if (mintBInfo.address === NULL_MINT) return WSOL_MINT
      return mintBInfo.address
    }
    return null
  }, [poolId, mintBInfo])

  if (!tokenAddress) {
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

  const embedUrl = `https://dexscreener.com/solana/${tokenAddress}?embed=1&info=0&trades=0&theme=dark`

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
