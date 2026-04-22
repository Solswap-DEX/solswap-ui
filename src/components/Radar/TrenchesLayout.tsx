import { Box, Flex, Text } from '@chakra-ui/react'
import { useState, useMemo } from 'react'
import { RadarToken, RadarAlert, getTokenColumn } from './radar.types'
import { TrenchCard } from './TrenchCard'
import { ColumnHeader, SortKey } from './ColumnHeader'

function sortTokens(tokens: RadarToken[], sort: SortKey): RadarToken[] {
  return [...tokens].sort((a, b) => {
    switch (sort) {
      case 'alpha': return b.alpha_score - a.alpha_score
      case 'volume': return b.volume_1m - a.volume_1m
      case 'age': return a.age_seconds - b.age_seconds
      case 'mcap': return (b.market_cap ?? 0) - (a.market_cap ?? 0)
      case 'bonding_curve': return (b.bonding_curve_pct ?? 0) - (a.bonding_curve_pct ?? 0)
      default: return 0
    }
  })
}

const COLUMN_CONFIG = [
  { key: 'fresh' as const, label: 'Fresh', color: '#00b0ff', emoji: '🆕' },
  { key: 'building' as const, label: 'Building', color: '#ffd600', emoji: '⚡' },
  { key: 'hot' as const, label: 'Hot', color: '#ff5722', emoji: '🔥' },
]

function Column({
  title,
  color,
  tokens,
}: {
  title: string
  color: string
  tokens: RadarToken[]
}) {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<SortKey>('alpha')

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    const base = q
      ? tokens.filter(t =>
          t.symbol.toLowerCase().includes(q) ||
          t.name.toLowerCase().includes(q)
        )
      : tokens
    return sortTokens(base, sort)
  }, [tokens, search, sort])

  return (
    <Flex
      direction="column"
      flex={1}
      minW={0}
      h="100%"
      overflow="hidden"
      bg="#0a0a0a"
      borderRight="1px solid rgba(255,255,255,0.05)"
      _last={{ borderRight: 'none' }}
    >
      <Box px={2} pt={2}>
        <ColumnHeader
          title={title}
          count={filtered.length}
          color={color}
          search={search}
          onSearchChange={setSearch}
          sort={sort}
          onSortChange={setSort}
        />
      </Box>

      <Box flex={1} overflowY="auto" px={2} py={2}
        css={{
          '&::-webkit-scrollbar': { width: '3px' },
          '&::-webkit-scrollbar-track': { background: 'transparent' },
          '&::-webkit-scrollbar-thumb': { background: 'rgba(255,255,255,0.1)', borderRadius: '3px' },
        }}
      >
        {filtered.length === 0 ? (
          <Box py={8} textAlign="center">
            <Text fontSize="xs" color="gray.600">No tokens yet...</Text>
          </Box>
        ) : (
          <Flex direction="column" gap={2}>
            {filtered.slice(0, 50).map(token => (
              <TrenchCard key={token.mint} token={token} />
            ))}
          </Flex>
        )}
      </Box>
    </Flex>
  )
}

export function TrenchesLayout({
  tokens,
  alerts,
}: {
  tokens: RadarToken[]
  alerts: RadarAlert[]
}) {
  const columns = useMemo(() => {
    const fresh: RadarToken[] = []
    const building: RadarToken[] = []
    const hot: RadarToken[] = []

    for (const token of tokens) {
      const col = getTokenColumn(token)
      if (col === 'fresh') fresh.push(token)
      else if (col === 'building') building.push(token)
      else hot.push(token)
    }
    return { fresh, building, hot }
  }, [tokens])

  return (
    <Flex
      direction="row"
      h="calc(100vh - 130px)"
      overflow="hidden"
      border="1px solid rgba(255,255,255,0.06)"
      borderRadius="xl"
      mt={2}
    >
      {COLUMN_CONFIG.map(col => (
        <Column
          key={col.key}
          title={col.label}
          color={col.color}
          tokens={columns[col.key]}
        />
      ))}
    </Flex>
  )
}
