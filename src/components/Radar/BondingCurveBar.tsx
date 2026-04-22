import { Box, Flex, Text, Tooltip } from '@chakra-ui/react'

function getBarColor(pct: number): string {
  if (pct >= 80) return '#00e676'
  if (pct >= 60) return '#ff9800'
  if (pct >= 30) return '#ffd600'
  return 'rgba(255,255,255,0.25)'
}

function getBarLabel(pct: number, is_graduated: boolean): string {
  if (is_graduated) return 'GRADUATED'
  if (pct >= 95) return 'MIGRATING...'
  if (pct >= 80) return `${pct.toFixed(0)}% 🚀`
  return `${pct.toFixed(0)}%`
}

export function BondingCurveBar({
  pct,
  is_graduated = false
}: {
  pct: number
  is_graduated?: boolean
}) {
  const color = is_graduated ? '#00e676' : getBarColor(pct)
  const filledPct = is_graduated ? 100 : Math.min(pct, 100)
  const isHot = is_graduated || pct >= 80

  return (
    <Tooltip
      label={is_graduated
        ? 'Token graduated to Raydium!'
        : `PumpFun bonding curve: ${pct.toFixed(1)}% — ${100 - pct < 20 ? 'About to migrate!' : 'In progress'}`
      }
      placement="top"
      hasArrow
    >
      <Flex align="center" gap="6px" cursor="default">
        <Text fontSize="9px" color="rgba(255,255,255,0.4)" fontWeight="600" whiteSpace="nowrap">
          BC
        </Text>
        <Box flex={1} h="4px" bg="rgba(255,255,255,0.08)" borderRadius="full" overflow="hidden">
          <Box
            h="100%"
            w={`${filledPct}%`}
            bg={color}
            borderRadius="full"
            transition="width 0.3s ease"
            style={isHot ? {
              boxShadow: `0 0 6px ${color}`,
              animation: 'bcPulse 1.5s ease-in-out infinite'
            } : undefined}
          />
        </Box>
        <Text
          fontSize="9px"
          fontWeight="700"
          color={color}
          fontFamily="'Courier New', monospace"
          whiteSpace="nowrap"
          minW="42px"
          textAlign="right"
        >
          {getBarLabel(pct, is_graduated)}
        </Text>
      </Flex>
    </Tooltip>
  )
}
