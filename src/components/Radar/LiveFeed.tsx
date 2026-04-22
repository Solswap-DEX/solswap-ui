import { Box, Table, Thead, Tbody, Tr, Th, Td, Flex, Text, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { RadarToken, RadarAlert } from './radar.types'
import { RiskBadge } from './RiskBadge'
import { AlphaBar } from './AlphaBar'
import { AlphaBadge } from './AlphaBadge'
import { BuySellBar } from './BuySellBar'

function formatUsd(value: number): string {
  if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`
  if (value >= 1000) return `$${(value / 1000).toFixed(1)}K`
  return `$${value.toFixed(0)}`
}

function formatAge(seconds: number): string {
  if (seconds < 60) return `${seconds}s`
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m`
  return `${Math.floor(seconds / 3600)}h`
}

export function LiveFeed({
  tokens,
  isConnected,
  alerts
}: {
  tokens: RadarToken[]
  isConnected: boolean
  alerts: RadarAlert[]
}) {
  const router = useRouter()

  return (
    <Box
      h="100%"
      bg="rgba(0,0,0,0.3)"
      borderRadius="lg"
      border="1px solid rgba(255,255,255,0.08)"
      p={3}
      overflow="auto"
    >
      <style>{`
        @keyframes livePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.6; }
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
        <Table size="sm" variant="simple">
          <Thead position="sticky" top="-12px" bg="rgba(0,0,0,0.8)" zIndex={1}>
            <Tr>
              <Th color="gray.500" fontSize="xs" py={2}>#</Th>
              <Th color="gray.500" fontSize="xs" py={2}>Token</Th>
              <Th color="gray.500" fontSize="xs" py={2}>Alpha</Th>
              <Th color="gray.500" fontSize="xs" py={2}>Risk</Th>
              <Th color="gray.500" fontSize="xs" py={2}>MCAP</Th>
              <Th color="gray.500" fontSize="xs" py={2}>Liq</Th>
              <Th color="gray.500" fontSize="xs" py={2}>Vol 1m</Th>
              <Th color="gray.500" fontSize="xs" py={2}>B/S</Th>
              <Th color="gray.500" fontSize="xs" py={2}>Δ%</Th>
              <Th color="gray.500" fontSize="xs" py={2}>Age</Th>
              <Th color="gray.500" fontSize="xs" py={2}>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tokens.slice(0, 20).map((token, idx) => {
              const priceChange = token.price_at_detection && token.price_usd 
                ? ((token.price_usd - token.price_at_detection) / token.price_at_detection) * 100 
                : null

              return (
                <Tr
                  key={token.mint}
                  bg={idx % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent'}
                  _hover={{ bg: 'rgba(255,255,255,0.05)' }}
                  height="44px"
                >
                  <Td fontSize="xs" color="gray.400" py={1}>
                    {idx + 1}
                  </Td>
                  <Td py={1}>
                    <Box>
                      <Text fontSize="xs" fontWeight="bold" color="white">
                        {token.symbol}
                      </Text>
                      <Text fontSize="10px" color="gray.500" mb={1}>
                        {token.name?.slice(0, 10) || 'Unknown'}
                      </Text>
                      <AlphaBadge label={token.alpha_label} />
                    </Box>
                  </Td>
                  <Td py={1}>
                    <Box width="50px">
                      <AlphaBar score={token.alpha_score} />
                      <Text fontSize="xs" color="white" fontFamily="'Courier New', monospace">
                        {token.alpha_score}
                      </Text>
                    </Box>
                  </Td>
                  <Td py={1}>
                    <RiskBadge level={token.risk_level} />
                  </Td>
                  <Td py={1} fontSize="xs" color="gray.400" fontFamily="'Courier New', monospace">
                    {token.market_cap ? formatUsd(token.market_cap) : '$—'}
                  </Td>
                  <Td py={1} fontSize="xs" color="gray.400" fontFamily="'Courier New', monospace">
                    {formatUsd(token.liquidity)}
                  </Td>
                  <Td py={1} fontSize="xs" color="gray.400" fontFamily="'Courier New', monospace">
                    {formatUsd(token.volume_1m)}
                  </Td>
                  <Td py={1}>
                    <BuySellBar buys={token.buys_1m} sells={token.sells_1m} />
                  </Td>
                  <Td py={1} fontSize="xs" fontFamily="'Courier New', monospace">
                    {priceChange !== null ? (
                      <Text color={priceChange >= 0 ? '#00ff88' : '#ff4444'}>
                        {priceChange >= 0 ? '▲' : '▼'}{Math.abs(priceChange).toFixed(1)}%
                      </Text>
                    ) : (
                      <Text color="gray.500">—</Text>
                    )}
                  </Td>
                  <Td py={1} fontSize="xs" color="gray.400">
                    {formatAge(token.age_seconds)}
                  </Td>
                  <Td py={1}>
                    <Button
                      size="xs"
                      variant="outline"
                      colorScheme="green"
                      onClick={() =>
                        router.push(
                          `/swap?inputMint=So11111111111111111111111111111111111111112&outputMint=${token.mint}`
                        )
                      }
                    >
                      Swap →
                    </Button>
                  </Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      )}
    </Box>
  )
}