import { Box, Flex, Text, Tooltip } from '@chakra-ui/react'

export function BuySellBar({
  buys,
  sells,
  compact = false
}: {
  buys: number
  sells: number
  compact?: boolean
}) {
  const total = buys + sells
  const buyRatio = total === 0 ? 0 : (buys / total) * 100
  const sellRatio = total === 0 ? 0 : (sells / total) * 100

  if (compact) {
    if (total === 0) {
      return (
        <Tooltip label="0 buys / 0 sells" placement="top" hasArrow>
          <Box w="36px" h="5px" bg="rgba(255,255,255,0.1)" borderRadius="full" />
        </Tooltip>
      )
    }
    return (
      <Tooltip label={`${buys} buys / ${sells} sells`} placement="top" hasArrow>
        <Flex w="36px" h="5px" borderRadius="full" overflow="hidden" bg="#ff1744">
          <Box w={`${buyRatio}%`} h="100%" bg="#00c853" />
        </Flex>
      </Tooltip>
    )
  }

  return (
    <Tooltip label={`${buys} buys / ${sells} sells`} placement="top" hasArrow>
      <Flex align="center" gap="5px" w="100%">
        <Text fontSize="9px" color="#00c853" fontWeight="700" minW="24px" textAlign="right">
          {buys > 0 ? `${buyRatio.toFixed(0)}%` : '0%'}
        </Text>
        <Flex flex={1} h="5px" borderRadius="full" overflow="hidden" bg="rgba(255,23,68,0.3)">
          <Box w={`${buyRatio}%`} h="100%" bg="#00c853" transition="width 0.3s" />
        </Flex>
        <Text fontSize="9px" color="#ff1744" fontWeight="700" minW="24px">
          {sells > 0 ? `${sellRatio.toFixed(0)}%` : '0%'}
        </Text>
      </Flex>
    </Tooltip>
  )
}
