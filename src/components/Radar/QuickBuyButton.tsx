import { Box, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useRouter } from 'next/router'

const PRESETS = [0.1, 0.5, 1.0]

export function QuickBuyButton({
  mint,
  symbol
}: {
  mint: string
  symbol: string
}) {
  const [expanded, setExpanded] = useState(false)
  const router = useRouter()

  const handleAmount = (e: React.MouseEvent, sol: number) => {
    e.stopPropagation()
    const lamports = Math.round(sol * 1e9)
    router.push(
      `/swap?inputMint=So11111111111111111111111111111111111111112&outputMint=${mint}&amount=${lamports}`
    )
    setExpanded(false)
  }

  if (expanded) {
    return (
      <Flex
        gap="4px"
        onClick={e => e.stopPropagation()}
        align="center"
      >
        {PRESETS.map(sol => (
          <Box
            key={sol}
            px="8px"
            py="4px"
            bg="rgba(0,200,83,0.2)"
            border="1px solid rgba(0,200,83,0.4)"
            borderRadius="6px"
            cursor="pointer"
            fontSize="10px"
            fontWeight="700"
            color="#00c853"
            onClick={(e) => handleAmount(e, sol)}
            _hover={{ bg: 'rgba(0,200,83,0.35)', borderColor: '#00c853' }}
            transition="all 0.15s"
            whiteSpace="nowrap"
          >
            {sol} SOL
          </Box>
        ))}
        <Box
          px="6px"
          py="4px"
          cursor="pointer"
          fontSize="11px"
          color="gray.500"
          onClick={e => { e.stopPropagation(); setExpanded(false) }}
          _hover={{ color: 'white' }}
        >
          ✕
        </Box>
      </Flex>
    )
  }

  return (
    <Flex
      align="center"
      gap="4px"
      px="10px"
      py="5px"
      bg="rgba(0,200,83,0.12)"
      border="1px solid rgba(0,200,83,0.3)"
      borderRadius="8px"
      cursor="pointer"
      onClick={e => { e.stopPropagation(); setExpanded(true) }}
      _hover={{ bg: 'rgba(0,200,83,0.22)', borderColor: '#00c853' }}
      transition="all 0.15s"
      flexShrink={0}
    >
      <Text fontSize="10px" fontWeight="700" color="#00c853" whiteSpace="nowrap">
        BUY
      </Text>
      <Box
        fontSize="9px"
        color="rgba(0,200,83,0.7)"
        fontFamily="'Courier New', monospace"
      >
        ▶
      </Box>
    </Flex>
  )
}
