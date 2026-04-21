import { Box, Flex, Grid, Text, keyframes, Spinner, VStack } from '@chakra-ui/react'
import { useRadarSocket } from './hooks/useRadarSocket'
import { LiveFeed } from './LiveFeed'
import { HotBoard } from './HotBoard'
import { AlertFeed } from './AlertFeed'

const livePulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.4); opacity: 0.6; }
`

export function RadarPage() {
  const { tokens, alerts, isConnected, isLoading } = useRadarSocket()

  const tokenCount = tokens.length
  const rugCount = tokens.filter((t: any) => t.risk_level === 'RUG PROBABLE').length

  if (isLoading) {
    return (
      <VStack py={20} justify="center">
        <Spinner size="xl" color="green.400" />
        <Text color="gray.500">Loading RADAR...</Text>
      </VStack>
    )
  }

  return (
    <Box p={4} minH="100vh" bg="#0d0d0d">
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

      <Grid
        templateColumns={{ base: '1fr', lg: '30% 45% 25%' }}
        gap={4}
        h="calc(100vh - 200px)"
      >
        <Box>
          <LiveFeed tokens={tokens} isConnected={isConnected} alerts={alerts} />
        </Box>
        <Box>
          <HotBoard tokens={tokens} />
        </Box>
        <Box>
          <AlertFeed alerts={alerts} />
        </Box>
      </Grid>
    </Box>
  )
}