import { Box, Text } from '@chakra-ui/react'

const AVATAR_COLORS = ['#14f195', '#ffd700', '#ff3b5c', '#bf5af2', '#0d9ddb', '#ff9500']

function getHashColor(name: string): string {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  const index = Math.abs(hash) % AVATAR_COLORS.length
  return AVATAR_COLORS[index]
}

export function TokenAvatar({
  symbol,
  size = 36
}: {
  mint: string
  symbol: string
  size?: number
  imageUrl?: string
}) {
  const bgColor = getHashColor(symbol)
  const displaySymbol = symbol.slice(0, 2).toUpperCase()

  return (
    <Box
      w={`${size}px`}
      h={`${size}px`}
      borderRadius="50%"
      bg={bgColor}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexShrink={0}
      boxShadow="inset 0 0 10px rgba(0,0,0,0.2)"
    >
      <Text
        fontSize={`${Math.max(size / 3, 10)}px`}
        fontWeight="800"
        color="white"
        lineHeight="1"
      >
        {displaySymbol}
      </Text>
    </Box>
  )
}
