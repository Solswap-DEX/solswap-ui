import { Box, Table, Thead, Tbody, Tr, Th, Td, Flex, Text, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { RadarToken } from './radar.types'
import { RiskBadge } from './RiskBadge'
import { AlphaBar } from './AlphaBar'

function formatUsd(value: number): string {
  if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`
  if (value >= 1000) return `$${(value / 1000).toFixed(1)}k`
  return `$${value.toFixed(0)}`
}

function formatAge(seconds: number): string {
  if (seconds < 60) return `${seconds}s`
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m`
  return `${Math.floor(seconds / 3600)}h`
}

export function HotBoard({
  tokens
}: {
  tokens: RadarToken[]
}) {
  const router = useRouter()

  const sortedTokens = [...tokens].sort((a, b) => b.alpha_score - a.alpha_score).slice(0, 20)

  return (
    <Box
      bg="rgba(0,0,0,0.3)"
      borderRadius="lg"
      border="1px solid rgba(255,255,255,0.08)"
      p={3}
      overflow="auto"
    >
      <Text fontWeight="bold" color="white" mb={3}>
        🔥 Hot Board
      </Text>

      <Table size="sm" variant="simple">
        <Thead>
          <Tr>
            <Th color="gray.500" fontSize="xs">#</Th>
            <Th color="gray.500" fontSize="xs">Token</Th>
            <Th color="gray.500" fontSize="xs">Alpha</Th>
            <Th color="gray.500" fontSize="xs">Risk</Th>
            <Th color="gray.500" fontSize="xs">Liq</Th>
            <Th color="gray.500" fontSize="xs">Vol</Th>
            <Th color="gray.500" fontSize="xs">Age</Th>
            <Th color="gray.500" fontSize="xs">Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedTokens.map((token, idx) => {
            const isTop3 = token.alpha_score >= 80 && idx < 3
            return (
              <Tr
                key={token.mint}
                bg={isTop3 ? 'rgba(0, 255, 136, 0.05)' : 'transparent'}
                _hover={{ bg: 'rgba(255,255,255,0.05)' }}
              >
                <Td fontSize="xs" color="gray.400">
                  {idx + 1}
                </Td>
                <Td>
                  <Box>
                    <Text fontSize="xs" fontWeight="bold" color="white">
                      {token.symbol}
                    </Text>
                    <Text fontSize="xs" color="gray.500">
                      {token.name?.slice(0, 8) || 'Unknown'}
                    </Text>
                  </Box>
                </Td>
                <Td>
                  <Box width="50px">
                    <AlphaBar score={token.alpha_score} />
                    <Text fontSize="xs" color="white" fontFamily="'Courier New', monospace">
                      {token.alpha_score}
                    </Text>
                  </Box>
                </Td>
                <Td>
                  <RiskBadge level={token.risk_level} />
                </Td>
                <Td fontSize="xs" color="gray.400">
                  {formatUsd(token.liquidity)}
                </Td>
                <Td fontSize="xs" color="gray.400">
                  {formatUsd(token.volume_1m)}
                </Td>
                <Td fontSize="xs" color="gray.400">
                  {formatAge(token.age_seconds)}
                </Td>
                <Td>
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
    </Box>
  )
}