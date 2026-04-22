import { Box, Flex, Text, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { RadarToken } from './radar.types'
import { RiskBadge } from './RiskBadge'
import { AlphaBar } from './AlphaBar'
import { AlphaBadge } from './AlphaBadge'

function formatAge(seconds: number): string {
  if (seconds < 60) return `${seconds}s`
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m`
  return `${Math.floor(seconds / 3600)}h`
}

function formatUsd(value: number): string {
  if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`
  if (value >= 1000) return `$${(value / 1000).toFixed(1)}k`
  return `$${value.toFixed(2)}`
}

function truncate(str: string, len: number): string {
  return str.length > len ? str.slice(0, len) + '...' : str
}

export function TokenCard({
  token,
  onStopLossClick
}: {
  token: RadarToken
  onStopLossClick?: () => void
}) {
  const router = useRouter()
  return (
    <Box
      p={3}
      bg="rgba(255,255,255,0.03)"
      borderRadius="lg"
      border="1px solid rgba(255,255,255,0.08)"
      transition="all 0.2s"
      _hover={{ bg: 'rgba(255,255,255,0.06)' }}
    >
      <Box mb={2}>
        <AlphaBadge label={token.alpha_label} />
      </Box>

      <Flex justify="space-between" align="center" mb={2}>
        <Box>
          <Text fontWeight="bold" color="white" fontSize="sm">
            {token.symbol}
          </Text>
          <Text color="gray.400" fontSize="xs">
            {truncate(token.name, 12)}
          </Text>
        </Box>
        <RiskBadge level={token.risk_level} />
      </Flex>

      <Box mb={2}>
        <AlphaBar score={token.alpha_score} />
      </Box>

      <Flex justify="space-between" align="center">
        <Box>
          <Text fontSize="xl" fontWeight="bold" fontFamily="'Courier New', monospace" color="white">
            {token.alpha_score}
          </Text>
          <Text fontSize="xs" color="gray.500">
            α score
          </Text>
        </Box>
        <Box textAlign="right">
          <Text fontSize="xs" color="gray.400">
            Liq: {formatUsd(token.liquidity)}
          </Text>
          <Text fontSize="xs" color="gray.400">
            Vol: {formatUsd(token.volume_1m)}
          </Text>
          <Text fontSize="xs" color="gray.500">
            Age: {formatAge(token.age_seconds)}
          </Text>
        </Box>
      </Flex>

      <Flex mt={2} gap={2}>
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
        {onStopLossClick && (
          <Button size="xs" variant="ghost" onClick={onStopLossClick}>
            🔔
          </Button>
        )}
      </Flex>
    </Box>
  )
}