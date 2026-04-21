import { Box, Flex, Grid, Text, keyframes } from '@chakra-ui/react'
import { useRadarSocket } from './hooks/useRadarSocket'
import { LiveFeed } from './LiveFeed'
import { HotBoard } from './HotBoard'
import { AlertFeed } from './AlertFeed'

const livePulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.4); opacity: 0.6; }
`

export function RadarPage({ walletAddress }: { walletAddress?: string }) {
  const { tokens, alerts, isConnected } = useRadarSocket()

  const tokenCount = tokens.length
  const rugCount = tokens.filter((t) => t.risk_level === 'RUG PROBABLE').length

  return (
    <Box p={4} minH="100vh" bg="#0d0d0d">
      {/* Header */}
      <Box mb={6}>
        <Flex align="center" gap={3}>
          <Text
            fontSize="4xl"
            fontFamily="'Courier New', monospace"
            fontWeight="bold"
            color="white"
            letterSpacing="widest"
          >
            RADAR
          </Text>
          {isConnected && (
            <Flex align="center" gap={1}>
              <Box
                w={2}
                h={2}
                borderRadius="full"
                bg="#00c853"
                animation={`${livePulse} 2s ease-in-out infinite`}
              />
              <Text fontSize="xs" color="#00c853" fontWeight="bold">
                LIVE
              </Text>
            </Flex>
          )}
        </Flex>
        <Text color="gray.500" fontSize="sm">
          Real-time token intelligence for Solana
        </Text>
      </Box>

      {/* Stats */}
      <Box mb={4} p={3} bg="rgba(255,255,255,0.03)" borderRadius="lg">
        <Flex gap={6} wrap="wrap">
          <Box>
            <Text fontSize="lg" fontWeight="bold" fontFamily="'Courier New', monospace" color="white">
              {tokenCount}
            </Text>
            <Text fontSize="xs" color="gray.500">
              tokens tracked
            </Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold" fontFamily="'Courier New', monospace" color={ rugCount > 0 ? '#ff1744' : 'white'}>
              {rugCount}
            </Text>
            <Text fontSize="xs" color="gray.500">
              rugs detected
            </Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold" fontFamily="'Courier New', monospace" color="white">
              just now
            </Text>
            <Text fontSize="xs" color="gray.500">
              updated
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* Grid */}
      <Grid
        templateColumns={{ base: '1fr', lg: '30% 45% 25%' }}
        gap={4}
        h="calc(100vh - 200px)"
      >
        <Box>
          <LiveFeed tokens={tokens} isConnected={isConnected} walletAddress={walletAddress} alerts={alerts} />
        </Box>
        <Box>
          <HotBoard tokens={tokens} walletAddress={walletAddress} />
        </Box>
        <Box>
          <AlertFeed alerts={alerts} />
        </Box>
      </Grid>
    </Box>
  )
}