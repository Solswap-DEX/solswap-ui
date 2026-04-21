import { Box, Flex, Text } from '@chakra-ui/react'
import { RadarToken, RadarAlert } from './radar.types'
import { TokenCard } from './TokenCard'

export function LiveFeed({
  tokens,
  isConnected,
  alerts
}: {
  tokens: RadarToken[]
  isConnected: boolean
  alerts: RadarAlert[]
}) {
  return (
    <Box
      h="100%"
      bg="rgba(0,0,0,0.3)"
      borderRadius="lg"
      border="1px solid rgba(255,255,255,0.08)"
      p={3}
      overflow="hidden"
    >
      <style>{`
        @keyframes livePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.6; }
        }
        @keyframes slideIn {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>

      <Flex align="center" gap={2} mb={3}>
        <Text fontWeight="bold" color="white" fontSize="sm">
          ⚡ Live Feed
        </Text>
        <Box
          w={2}
          h={2}
          borderRadius="full"
          bg={isConnected ? '#00c853' : '#666'}
          style={{ animation: isConnected ? 'livePulse 2s ease-in-out infinite' : undefined }}
        />
      </Flex>

      {!isConnected ? (
        <Text color="gray.500" fontSize="sm">
          Connecting to RADAR...
        </Text>
      ) : tokens.length === 0 ? (
        <Text color="gray.500" fontSize="sm">
          No tokens detected yet. Waiting for data...
        </Text>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          sx={{
            '& > *': {
              animation: 'slideIn 0.3s ease-out'
            }
          }}
        >
          {tokens.slice(0, 20).map((token) => (
            <TokenCard key={token.mint} token={token} />
          ))}
        </Box>
      )}
    </Box>
  )
}