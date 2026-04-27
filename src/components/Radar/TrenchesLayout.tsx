import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { RadarToken, RadarAlert } from './radar.types'
import { LiveFeed } from './LiveFeed'
import { HotBoard } from './HotBoard'

function toMs(d: Date | string | undefined): number {
  if (!d) return 0
  return new Date(d).getTime()
}

export function TrenchesLayout({ 
  tokens, 
  alerts,
  onStopLossClick
}: { 
  tokens: RadarToken[]; 
  alerts: RadarAlert[];
  onStopLossClick?: (token: RadarToken) => void
}) {
  // Logic to group tokens by category
  
  const prePumpTokens = tokens
    .filter(t => t.pump_probability && t.pump_probability > 50)
    .sort((a, b) => (b.pump_probability || 0) - (a.pump_probability || 0) || toMs(b.detected_at) - toMs(a.detected_at))

  const freshTokens = tokens
    .filter(t => (t.age_seconds < 300 || t.alpha_label === '🧪 SPECULATIVE') && !(t.pump_probability && t.pump_probability > 50))
    .sort((a, b) => toMs(b.detected_at) - toMs(a.detected_at))
    .slice(0, 15)

  const buildingTokens = tokens
    .filter(t => t.age_seconds >= 300 && t.age_seconds < 3600)
    .sort((a, b) => b.alpha_score - a.alpha_score)

  const hotTokens = tokens
    .filter(t => t.age_seconds >= 3600 || t.alpha_score > 70)
    .sort((a, b) => b.alpha_score - a.alpha_score)

  return (
    <Box w="95%" maxW="2200px" mx="auto">
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={0} minChildWidth="220px">
        
        {/* PRE-PUMP COLUMN */}
        <Box 
          px={3} 
          borderRight={{ base: 'none', md: '1px solid rgba(255,255,255,0.15)' }}
          bg="rgba(147, 51, 234, 0.05)" // Subtle purple tint to highlight the new sniper trench
        >
          <LiveFeed 
            tokens={prePumpTokens} 
            isConnected={true} 
            alerts={alerts.filter(a => a.type === 'ALPHA_SURGE')} 
            title="🚀 PRE-PUMP"
            color="#a855f7" // Purple
            onStopLossClick={onStopLossClick}
          />
        </Box>

        {/* FRESH COLUMN */}
        <Box 
          px={3} 
          borderRight={{ base: 'none', xl: '1px solid rgba(255,255,255,0.15)' }}
        >
          <LiveFeed 
            tokens={freshTokens} 
            isConnected={true} 
            alerts={[]} 
            title="FRESH"
            color="var(--radar-solana)"
            onStopLossClick={onStopLossClick}
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
            onStopLossClick={onStopLossClick}
          />
        </Box>

        {/* HOT COLUMN */}
        <Box px={3}>
          <HotBoard 
            tokens={hotTokens} 
            title="HOT"
            color="var(--radar-red)"
            onStopLossClick={onStopLossClick}
          />
        </Box>

      </SimpleGrid>
    </Box>
  )
}
