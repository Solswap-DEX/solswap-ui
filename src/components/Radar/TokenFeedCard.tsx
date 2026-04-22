import { Box, Flex, Text, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { RadarToken } from './radar.types'
import { TokenAvatar } from './TokenAvatar'
import { MiniSparkline } from './MiniSparkline'
import { AlphaBadge } from './AlphaBadge'

function formatUsd(value: number): string {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `$${(value / 1_000).toFixed(1)}K`
  return `$${value.toFixed(0)}`
}

function formatAge(seconds: number): string {
  if (seconds < 60) return `${seconds}s`
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m`
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h`
  return `${Math.floor(seconds / 86400)}d`
}

export function TokenFeedCard({
  token,
  rank,
  isHighlighted = false
}: {
  token: RadarToken
  rank?: number
  isHighlighted?: boolean
}) {
  const router = useRouter()

  const priceChange = token.price_at_detection && token.price_usd
    ? ((token.price_usd - token.price_at_detection) / token.price_at_detection) * 100
    : null

  const mcapDisplay = token.market_cap ? formatUsd(token.market_cap) : '—'
  const isPositive = (priceChange ?? 0) >= 0

  return (
    <Box
      p={3}
      bg="rgba(255,255,255,0.025)"
      borderRadius="xl"
      border={isHighlighted
        ? '1px solid rgba(255, 215, 0, 0.3)'
        : '1px solid rgba(255,255,255,0.06)'
      }
      transition="all 0.2s ease"
      _hover={{
        bg: 'rgba(255,255,255,0.055)',
        borderColor: 'rgba(255,255,255,0.12)',
        transform: 'translateY(-1px)'
      }}
      cursor="pointer"
      onClick={() =>
        router.push(
          `/swap?inputMint=So11111111111111111111111111111111111111112&outputMint=${token.mint}`
        )
      }
      position="relative"
      overflow="hidden"
      {...(isHighlighted && {
        boxShadow: '0 0 20px rgba(255, 215, 0, 0.06)',
      })}
    >
      {/* Glow accent for highlighted cards */}
      {isHighlighted && (
        <Box
          position="absolute"
          top="-1px"
          left="0"
          right="0"
          h="2px"
          bgGradient="linear(to-r, transparent, #ffd700, transparent)"
        />
      )}

      <Flex align="center" gap={3}>
        {/* Rank */}
        {rank !== undefined && (
          <Text
            fontSize="xs"
            color="gray.600"
            fontWeight="700"
            fontFamily="'Courier New', monospace"
            minW="18px"
            textAlign="center"
          >
            {rank}
          </Text>
        )}

        {/* Avatar */}
        <TokenAvatar mint={token.mint} symbol={token.symbol} size={48} />

        {/* Token Info */}
        <Box flex={1} minW={0}>
          <Flex align="center" gap={1.5}>
            <Text
              fontSize="sm"
              fontWeight="700"
              color="white"
              isTruncated
            >
              {token.name || token.symbol}
            </Text>
          </Flex>
          <Flex align="center" gap={1.5} mt={0.5}>
            <Text fontSize="xs" color="gray.500" fontWeight="500">
              {token.symbol}
            </Text>
            <Box w="3px" h="3px" borderRadius="full" bg="gray.600" />
            <Text fontSize="xs" color="gray.500">
              🕐 {formatAge(token.age_seconds)}
            </Text>
          </Flex>
          <Flex mt={1} gap={1.5} align="center" flexWrap="wrap">
            <AlphaBadge label={token.alpha_label} />
            {priceChange !== null && (
              <Text
                fontSize="10px"
                fontWeight="700"
                color={isPositive ? '#00c853' : '#ff1744'}
              >
                {isPositive ? '▲' : '▼'} {Math.abs(priceChange).toFixed(1)}%
              </Text>
            )}
          </Flex>
        </Box>

        {/* Sparkline + MCAP */}
        <Flex direction="column" align="flex-end" flexShrink={0} gap={1}>
          <MiniSparkline priceChange={priceChange} width={72} height={28} />
          <Text
            fontSize="md"
            fontWeight="800"
            color={isPositive ? '#00ff88' : '#ff4444'}
            fontFamily="'Courier New', monospace"
            letterSpacing="-0.5px"
          >
            {mcapDisplay}
          </Text>
        </Flex>
      </Flex>

      {/* Bottom Row — Micro Stats */}
      <Flex
        mt={2}
        pt={2}
        borderTop="1px solid rgba(255,255,255,0.04)"
        justify="space-between"
        align="center"
      >
        <Flex gap={3} fontSize="10px" color="gray.500">
          <Text>
            Liq <Text as="span" color="gray.400" fontWeight="600">{formatUsd(token.liquidity)}</Text>
          </Text>
          <Text>
            Vol <Text as="span" color="gray.400" fontWeight="600">{formatUsd(token.volume_1m)}</Text>
          </Text>
          <Text>
            Holders <Text as="span" color="gray.400" fontWeight="600">{token.holders.toLocaleString()}</Text>
          </Text>
        </Flex>
        <Button
          size="xs"
          bg="rgba(0, 200, 83, 0.15)"
          color="#00c853"
          border="1px solid rgba(0, 200, 83, 0.3)"
          borderRadius="md"
          fontWeight="700"
          fontSize="10px"
          px={3}
          _hover={{
            bg: 'rgba(0, 200, 83, 0.25)',
            borderColor: '#00c853',
          }}
          onClick={(e) => {
            e.stopPropagation()
            router.push(
              `/swap?inputMint=So11111111111111111111111111111111111111112&outputMint=${token.mint}`
            )
          }}
        >
          Swap →
        </Button>
      </Flex>
    </Box>
  )
}
