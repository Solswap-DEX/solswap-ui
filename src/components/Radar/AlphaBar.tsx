import { Box } from '@chakra-ui/react'

export function AlphaBar({ score }: { score: number }) {
  const width = `${Math.min(100, score)}%`
  const color = score >= 80 ? '#00ff88' : score >= 50 ? '#ffd700' : '#666'

  return (
    <Box
      height="4px"
      width="100%"
      bg="rgba(255,255,255,0.1)"
      rounded="full"
      overflow="hidden"
    >
      <Box
        height="100%"
        width={width}
        bg={color}
        borderRadius="full"
        transition="width 0.3s ease"
      />
    </Box>
  )
}