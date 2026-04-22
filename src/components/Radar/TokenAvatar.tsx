import { Box, Image } from '@chakra-ui/react'
import { useState } from 'react'

function mintToGradient(mint: string): string {
  let hash = 0
  for (let i = 0; i < mint.length; i++) {
    hash = mint.charCodeAt(i) + ((hash << 5) - hash)
  }
  const h1 = Math.abs(hash % 360)
  const h2 = (h1 + 40) % 360
  return `linear-gradient(135deg, hsl(${h1}, 70%, 45%), hsl(${h2}, 80%, 35%))`
}

export function TokenAvatar({
  mint,
  symbol,
  size = 48
}: {
  mint: string
  symbol: string
  size?: number
}) {
  const [imgError, setImgError] = useState(false)
  const imgUrl = `https://dd.dexscreener.com/ds-data/tokens/solana/${mint}.png`

  if (imgError) {
    return (
      <Box
        w={`${size}px`}
        h={`${size}px`}
        minW={`${size}px`}
        borderRadius="full"
        bg={mintToGradient(mint)}
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize={`${Math.floor(size * 0.35)}px`}
        fontWeight="800"
        color="white"
        textTransform="uppercase"
        letterSpacing="tight"
        border="2px solid rgba(255,255,255,0.1)"
        userSelect="none"
      >
        {symbol.slice(0, 2)}
      </Box>
    )
  }

  return (
    <Image
      src={imgUrl}
      alt={symbol}
      w={`${size}px`}
      h={`${size}px`}
      minW={`${size}px`}
      borderRadius="full"
      objectFit="cover"
      border="2px solid rgba(255,255,255,0.1)"
      bg="rgba(255,255,255,0.05)"
      onError={() => setImgError(true)}
    />
  )
}
