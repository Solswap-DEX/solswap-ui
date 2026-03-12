import { SwapChart } from '@/components/Charts/SwapChart'
import { ApiV3Token } from '@raydium-io/raydium-sdk-v2'
import { GridItem } from '@chakra-ui/react'

interface Props {
  onPriceChange?: (val: { current: number; change: number } | undefined) => void
  baseMint?: ApiV3Token
  quoteMint?: ApiV3Token
  timeType: any
  untilDate?: number
}

export default function CandleChart({ baseMint, quoteMint }: Props) {
  if (!baseMint) return null
  return (
    <GridItem gridArea="chart" position="relative" alignSelf="stretch">
      <SwapChart baseMint={baseMint.address} quoteMint={quoteMint?.address || ''} />
    </GridItem>
  )
}
