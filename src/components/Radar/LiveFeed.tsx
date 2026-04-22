import { Box, Flex, Text } from '@chakra-ui/react'
import { RadarToken, RadarAlert } from './radar.types'
import { TrenchCard } from './TrenchCard'

export function LiveFeed({
  tokens,
  isConnected,
  alerts
}: {
  tokens: RadarToken[]
  isConnected: boolean
  alerts: RadarAlert[]
}) {
  // Show "fresh" tokens first (youngest), then building
  const sorted = [...tokens].sort((a, b) => a.age_seconds - b.age_seconds)

  return (
    <Box h="100%" overflow="auto">
      <style>{`
        @keyframes livePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.6; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <Flex align="center" gap={2} mb={3} px={1}>
        <Text fontWeight="bold" color="white" fontSize="sm">🆕 Fresh Feed</Text>
        <Box
          w={2} h={2} borderRadius="full"
          bg={isConnected ? '#00c853' : '#666'}
          style={{ animation: isConnected ? 'livePulse 2s ease-in-out infinite' : undefined }}
        />
        <Text fontSize="xs" color="gray.600">{tokens.length} tokens</Text>
      </Flex>

      {!isConnected ? (
        <Box py={10} textAlign="center">
          <Text color="gray.500" fontSize="sm">Connecting to RADAR...</Text>
        </Box>
      ) : tokens.length === 0 ? (
        <Box py={10} textAlign="center">
          <Text color="gray.500" fontSize="sm">No tokens detected yet. Waiting for data...</Text>
        </Box>
      ) : (
        <Flex direction="column" gap={2}>
          {sorted.slice(0, 30).map((token, idx) => (
            <Box
              key={token.mint}
              style={{ animation: idx < 3 ? `slideIn 0.3s ease-out` : undefined }}
            >
              <TrenchCard token={token} />
            </Box>
          ))}
        </Flex>
      )}
    </Box>
  )
}