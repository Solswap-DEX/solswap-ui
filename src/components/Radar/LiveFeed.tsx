import { Box, Flex, Text, keyframes } from '@chakra-ui/react'
import { RadarToken, RadarAlert } from './radar.types'
import { TokenCard } from './TokenCard'
import { StopLossModal } from './StopLossModal'
import { useState, useRef } from 'react'

const slideIn = keyframes`
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`

export function LiveFeed({
  tokens,
  isConnected,
  walletAddress,
  alerts
}: {
  tokens: RadarToken[]
  isConnected: boolean
  walletAddress?: string
  alerts: RadarAlert[]
}) {
  const [selectedToken, setSelectedToken] = useState<RadarToken | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleStopLossClick = (token: RadarToken) => {
    setSelectedToken(token)
    setIsModalOpen(true)
  }

  return (
    <Box
      h="100%"
      bg="rgba(0,0,0,0.3)"
      borderRadius="lg"
      border="1px solid rgba(255,255,255,0.08)"
      p={3}
      overflow="hidden"
    >
      <Flex align="center" gap={2} mb={3}>
        <Text fontWeight="bold" color="white" fontSize="sm">
          ⚡ Live Feed
        </Text>
        <Box
          w={2}
          h={2}
          borderRadius="full"
          bg={isConnected ? '#00c853' : '#666'}
          animation={isConnected ? 'livePulse 2s ease-in-out infinite' : undefined}
          sx={{
            '@keyframes livePulse': {
              '0%, 100%': { transform: 'scale(1)', opacity: 1 },
              '50%': { transform: 'scale(1.4)', opacity: 0.6 }
            }
          }}
        />
      </Flex>

      {!isConnected ? (
        <Text color="gray.500" fontSize="sm">
          Connecting to RADAR...
        </Text>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          sx={{
            '& > *': {
              animation: `${slideIn} 0.3s ease-out`
            }
          }}
        >
          {tokens.slice(0, 20).map((token) => (
            <TokenCard
              key={token.mint}
              token={token}
              onStopLossClick={() => handleStopLossClick(token)}
            />
          ))}
        </Box>
      )}

      <StopLossModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        token={selectedToken}
        walletAddress={walletAddress}
      />
    </Box>
  )
}