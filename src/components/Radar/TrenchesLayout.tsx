import { Box, SimpleGrid, Flex } from '@chakra-ui/react'
import { RadarToken, RadarAlert } from './radar.types'
import { LiveFeed } from './LiveFeed'
import { HotBoard } from './HotBoard'

export function TrenchesLayout({ tokens, alerts }: { tokens: RadarToken[]; alerts: RadarAlert[] }) {
  // Logic to group tokens by category
  const freshTokens = tokens
    .filter(t => t.age_seconds < 300) // First 5 mins
    .sort((a, b) => b.detected_at.getTime() - a.detected_at.getTime())

  const buildingTokens = tokens
    .filter(t => t.age_seconds >= 300 && t.age_seconds < 3600) // 5m to 1h
    .sort((a, b) => b.alpha_score - a.alpha_score)

  const hotTokens = tokens
    .filter(t => t.age_seconds >= 3600 || t.alpha_score > 70) // > 1h or very high alpha
    .sort((a, b) => b.alpha_score - a.alpha_score)

  return (
    <Box maxW="1600px" mx="auto">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={0}>
        {/* FRESH COLUMN */}
        <Box 
          px={3} 
          borderRight={{ base: 'none', md: '1px solid var(--radar-border)' }}
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
          borderRight={{ base: 'none', md: '1px solid var(--radar-border)' }}
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
