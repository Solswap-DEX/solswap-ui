import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { RadarToken, RadarAlert } from './radar.types'
import { LiveFeed } from './LiveFeed'
import { HotBoard } from './HotBoard'

function toMs(d: Date | string | undefined): number {
  if (!d) return 0
  return new Date(d).getTime()
}

export function TrenchesLayout({ tokens, alerts }: { tokens: RadarToken[]; alerts: RadarAlert[] }) {
  // Logic to group tokens by category
  const freshTokens = tokens
    .filter(t => t.age_seconds < 300)
    .sort((a, b) => toMs(b.detected_at) - toMs(a.detected_at))

  const buildingTokens = tokens
    .filter(t => t.age_seconds >= 300 && t.age_seconds < 3600)
    .sort((a, b) => b.alpha_score - a.alpha_score)

  const hotTokens = tokens
    .filter(t => t.age_seconds >= 3600 || t.alpha_score > 70)
    .sort((a, b) => b.alpha_score - a.alpha_score)

  return (
    <Box maxW="1600px" mx="auto">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={0}>
        {/* FRESH COLUMN */}
        <Box 
          px={3} 
          borderRight={{ base: 'none', md: '1px solid rgba(255,255,255,0.15)' }}
        >
          <LiveFeed 
            tokens={freshTokens} 
            isConnected={true} 
            alerts={[]} 
            title="FRESH"
            color="var(--radar-solana)"
          />
        </Box>

        {/* BUILDING COLUMN */}
        <Box 
          px={3} 
          borderRight={{ base: 'none', md: '1px solid rgba(255,255,255,0.15)' }}
        >
          <LiveFeed 
            tokens={buildingTokens} 
            isConnected={true} 
            alerts={[]} 
            title="BUILDING"
            color="var(--radar-yellow)"
          />
        </Box>

        {/* HOT COLUMN */}
        <Box px={3}>
          <HotBoard 
            tokens={hotTokens} 
            title="HOT"
            color="var(--radar-red)"
          />
        </Box>
      </SimpleGrid>
    </Box>
  )
}
