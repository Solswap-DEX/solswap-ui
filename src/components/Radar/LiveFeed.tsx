import React, { useState } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { RadarToken, RadarAlert } from './radar.types'
import { TrenchCard } from './TrenchCard'
import { ColumnHeader, SortKey } from './ColumnHeader'

export function LiveFeed({
  tokens,
  isConnected,
  title = "FRESH",
  color = "var(--radar-solana)"
}: {
  tokens: RadarToken[]
  isConnected: boolean
  alerts: RadarAlert[]
  title?: string
  color?: string
  onStopLossClick?: (token: RadarToken) => void
}) {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<SortKey>('age')

  const filtered = tokens.filter(t => 
    t.symbol.toLowerCase().includes(search.toLowerCase()) ||
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.mint.toLowerCase().includes(search.toLowerCase())
  )

  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'age') return a.age_seconds - b.age_seconds
    if (sort === 'alpha') return b.alpha_score - a.alpha_score
    if (sort === 'volume') return b.volume_1m - a.volume_1m
    if (sort === 'mcap') return (b.market_cap || 0) - (a.market_cap || 0)
    return 0
  })

  return (
    <Box h="calc(100vh - 180px)" overflow="hidden" display="flex" flexDirection="column">
      <ColumnHeader
        title={title}
        count={tokens.length}
        color={color}
        search={search}
        onSearchChange={setSearch}
        sort={sort}
        onSortChange={setSort}
      />

      <Box flex={1} overflowY="auto" pr={1}>
        {!isConnected ? (
          <Box py={10} textAlign="center">
            <Text color="var(--radar-text-dim)" fontSize="sm" fontFamily="var(--radar-mono)">CONNECTING...</Text>
          </Box>
        ) : sorted.length === 0 ? (
          <Box py={10} textAlign="center">
            <Text color="#ffffff" fontSize="sm" fontFamily="var(--radar-mono)">NO MATCHES</Text>
          </Box>
        ) : (
          <Flex direction="column" gap={0}>
            {sorted.slice(0, 50).map((token) => (
              <TrenchCard key={token.mint} token={token} onStopLossClick={onStopLossClick} />
            ))}
          </Flex>
        )}
      </Box>
    </Box>
  )
}