import { Box, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { RadarToken } from './radar.types'
import { TrenchCard } from './TrenchCard'
import { ColumnHeader, SortKey } from './ColumnHeader'

export function HotBoard({ 
  tokens,
  title = "HOT",
  color = "var(--radar-red)"
}: { 
  tokens: RadarToken[] 
  title?: string
  color?: string
}) {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<SortKey>('alpha')

  const filtered = tokens.filter(t => 
    t.symbol.toLowerCase().includes(search.toLowerCase()) ||
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.mint.toLowerCase().includes(search.toLowerCase())
  )

  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'alpha') return b.alpha_score - a.alpha_score
    if (sort === 'volume') return b.volume_1m - a.volume_1m
    if (sort === 'age') return b.age_seconds - a.age_seconds
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
        {sorted.length === 0 ? (
          <Box py={10} textAlign="center">
            <Text color="var(--radar-text-dim)" fontSize="sm" fontFamily="var(--radar-mono)">NO MATCHES</Text>
          </Box>
        ) : (
          <Flex direction="column" gap={0}>
            {sorted.map((token) => (
              <TrenchCard key={token.mint} token={token} />
            ))}
          </Flex>
        )}
      </Box>
    </Box>
  )
}