import { Box, Flex, Tooltip } from '@chakra-ui/react'

export function BuySellBar({ buys, sells }: { buys: number, sells: number }) {
  const total = buys + sells
  const buyRatio = total === 0 ? 0 : (buys / total) * 100
  const sellRatio = total === 0 ? 0 : (sells / total) * 100

  if (total === 0) {
    return (
      <Tooltip label="0 buys / 0 sells" placement="top" hasArrow>
        <Box width="40px" height="6px" bg="gray.600" borderRadius="full" />
      </Tooltip>
    )
  }

  return (
    <Tooltip label={`${buys} buys / ${sells} sells`} placement="top" hasArrow>
      <Flex width="40px" height="6px" borderRadius="full" overflow="hidden" bg="red.500">
        <Box width={`${buyRatio}%`} height="100%" bg="green.400" />
      </Flex>
    </Tooltip>
  )
}
