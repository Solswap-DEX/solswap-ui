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
      bg="#0d0d0d"
      borderBottom="1px solid rgba(255,255,255,0.06)"
      pb={2}
    >
      <Flex align="center" justify="space-between" mb={2}>
        <Flex align="center" gap={2}>
          <Text
            fontSize="xs"
            fontWeight="800"
            color={color}
            letterSpacing="widest"
            textTransform="uppercase"
          >
            {title}
          </Text>
          <Box
            px="6px"
            py="1px"
            bg={`${color}22`}
            border={`1px solid ${color}44`}
            borderRadius="full"
            fontSize="9px"
            fontWeight="700"
            color={color}
          >
            {count}
          </Box>
        </Flex>
      </Flex>

      <Flex gap={1}>
        <Input
          placeholder="Search..."
          value={search}
          onChange={e => onSearchChange(e.target.value)}
          size="xs"
          bg="rgba(255,255,255,0.04)"
          border="1px solid rgba(255,255,255,0.08)"
          color="white"
          borderRadius="md"
          fontSize="11px"
          _placeholder={{ color: 'gray.600' }}
          _focus={{ border: `1px solid ${color}66`, boxShadow: 'none' }}
          flex={1}
        />
        <Select
          value={sort}
          onChange={e => onSortChange(e.target.value as SortKey)}
          size="xs"
          bg="rgba(255,255,255,0.04)"
          border="1px solid rgba(255,255,255,0.08)"
          color="gray.400"
          borderRadius="md"
          fontSize="10px"
          w="90px"
          flexShrink={0}
          _focus={{ border: `1px solid ${color}66`, boxShadow: 'none' }}
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
