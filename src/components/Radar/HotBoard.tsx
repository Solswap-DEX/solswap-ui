import { Box, Flex, Text } from '@chakra-ui/react'
import { RadarToken } from './radar.types'
import { TrenchCard } from './TrenchCard'

export function HotBoard({ tokens }: { tokens: RadarToken[] }) {
  const sortedTokens = [...tokens]
    .sort((a, b) => b.alpha_score - a.alpha_score)
    .slice(0, 20)

  return (
    <Box h="100%" overflow="auto">
      <Flex align="center" gap={2} mb={3} px={1}>
        <Text fontWeight="bold" color="white" fontSize="sm">🔥 Hot Board</Text>
        <Text fontSize="xs" color="gray.600">Sorted by Alpha Score</Text>
      </Flex>

      {sortedTokens.length === 0 ? (
        <Box py={10} textAlign="center">
          <Text color="gray.500" fontSize="sm">No tokens to rank yet...</Text>
        </Box>
      ) : (
        <Flex direction="column" gap={2}>
          {sortedTokens.map((token) => (
            <TrenchCard key={token.mint} token={token} />
          ))}
        </Flex>
      )}
    </Box>
  )
}