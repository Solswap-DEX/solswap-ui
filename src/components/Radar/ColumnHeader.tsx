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
      bg="rgba(255,255,255,0.05)"
      p={3}
      borderBottom="1px solid rgba(255,255,255,0.1)"
      mb={3}
      borderRadius="4px 4px 0 0"
    >
      <Flex align="center" justify="space-between" mb={2}>
        <Flex align="center" gap={3}>
          <Text
            fontSize="11px"
            fontWeight="900"
            color="#ffffff"
            letterSpacing="2px"
            textTransform="uppercase"
          >
            {title}
          </Text>
          <Box
            px="8px"
            py="1px"
            bg="rgba(255,255,255,0.1)"
            border={`1px solid ${color}`}
            borderRadius="full"
            fontSize="10px"
            fontWeight="bold"
            color="#ffffff"
            fontFamily="var(--radar-mono)"
          >
            {count}
          </Box>
        </Flex>
        
        <Box color="#ffffff" fontSize="14px">⊞</Box>
      </Flex>

      <Flex gap={2}>
        <Input
          placeholder="Search..."
          value={search}
          onChange={e => onSearchChange(e.target.value)}
          size="xs"
          bg="#0d0d0d"
          border="1px solid rgba(255,255,255,0.3)"
          color="#ffffff"
          borderRadius="4px"
          fontSize="11px"
          h="26px"
          _placeholder={{ color: 'rgba(255,255,255,0.5)' }}
          _focus={{ border: '1px solid var(--radar-solana)', boxShadow: 'none' }}
          flex={1}
        />
        <Select
          value={sort}
          onChange={e => onSortChange(e.target.value as SortKey)}
          size="xs"
          bg="#0d0d0d"
          border="1px solid rgba(255,255,255,0.3)"
          color="#ffffff"
          borderRadius="4px"
          fontSize="10px"
          h="26px"
          w="100px"
          flexShrink={0}
          _focus={{ border: '1px solid var(--radar-solana)', boxShadow: 'none' }}
          sx={{
            '& > option': {
              bg: '#0d0d0d',
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
