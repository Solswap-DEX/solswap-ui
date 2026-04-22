import React from 'react'
import { Box, Flex, Input, Text, Select } from '@chakra-ui/react'

export type SortKey = 'alpha' | 'volume' | 'age' | 'mcap' | 'bonding_curve'

export function ColumnHeader({
  title,
  count,
  color,
  search,
  onSearchChange,
  sort,
  onSortChange,
}: {
  title: string
  count: number
  color: string
  search: string
  onSearchChange: (v: string) => void
  sort: SortKey
  onSortChange: (v: SortKey) => void
}) {
  return (
    <Box
      position="sticky"
      top={0}
      zIndex={5}
      bg="var(--radar-bg)"
      pb={3}
      borderBottom="1px solid var(--radar-border)"
      mb={3}
    >
      <Flex align="center" justify="space-between" mb={2}>
        <Flex align="center" gap={3}>
          <Text
            fontSize="10px"
            fontWeight="900"
            color="var(--radar-text-dim)"
            letterSpacing="2px"
            textTransform="uppercase"
          >
            {title}
          </Text>
          <Box
            px="8px"
            py="1px"
            bg="rgba(255,255,255,0.05)"
            border={`1px solid ${color}66`}
            borderRadius="full"
            fontSize="10px"
            fontWeight="bold"
            color={color}
            fontFamily="var(--radar-mono)"
          >
            {count}
          </Box>
        </Flex>
        
        {/* Minimal grid icon / placeholder */}
        <Box color="var(--radar-text-dim)" fontSize="14px">⊞</Box>
      </Flex>

      <Flex gap={2}>
        <Input
          placeholder="Search..."
          value={search}
          onChange={e => onSearchChange(e.target.value)}
          size="xs"
          bg="var(--radar-bg)"
          border="1px solid var(--radar-border)"
          color="var(--radar-text)"
          borderRadius="4px"
          fontSize="11px"
          h="26px"
          _placeholder={{ color: 'var(--radar-text-dim)' }}
          _focus={{ border: '1px solid var(--radar-border-accent)', boxShadow: 'none' }}
          flex={1}
        />
        <Select
          value={sort}
          onChange={e => onSortChange(e.target.value as SortKey)}
          size="xs"
          bg="var(--radar-bg)"
          border="1px solid var(--radar-border)"
          color="var(--radar-text-dim)"
          borderRadius="4px"
          fontSize="10px"
          h="26px"
          w="100px"
          flexShrink={0}
          _focus={{ border: '1px solid var(--radar-border-accent)', boxShadow: 'none' }}
          sx={{
            '& > option': {
              bg: 'var(--radar-surface)',
              color: 'white'
            }
          }}
        >
          <option value="alpha">Alpha ↓</option>
          <option value="volume">Volume ↓</option>
          <option value="age">Age ↑</option>
          <option value="mcap">MCap ↓</option>
          <option value="bonding_curve">BC% ↓</option>
        </Select>
      </Flex>
    </Box>
  )
}
