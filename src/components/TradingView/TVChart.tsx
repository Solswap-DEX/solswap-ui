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

/**
 * TVChart renders a DexScreener embedded chart for the given token pair.
 * Falls back to a styled placeholder if no valid mint address is provided.
 */
export default function TVChart({ id, height = '100%', poolId, mintBInfo, ...rest }: TVChartProps) {
  const tokenAddress = useMemo(() => {
    // Try to extract a valid mint address from poolId or mintBInfo
    if (mintBInfo?.address && mintBInfo.address !== '11111111111111111111111111111111') {
      return mintBInfo.address
    }
    // poolId format: "baseMint_quoteMint" — use the first valid one
    if (poolId) {
      const parts = poolId.split('_').filter((p) => p && p !== '11111111111111111111111111111111')
      if (parts.length > 0) return parts[0]
    }
    return null
  }, [poolId, mintBInfo])

  if (!tokenAddress) {
    return (
      <Box
        w="100%"
        h={height}
        minH="300px"
        bg="#13141F"
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
          backgroundColor: '#13141F'
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
