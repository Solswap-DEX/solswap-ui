import { getMultipleTokenPrices } from '@/config/api'
import { MINUTE_MILLISECONDS } from '@/utils/date'
import { isValidPublicKey } from '@/utils/publicKey'
import { solToWSol, WSOLMint } from '@raydium-io/raydium-sdk-v2'
import { PublicKey } from '@solana/web3.js'
import { useMemo } from 'react'
import useSWR from 'swr'

export interface BirdEyeTokenPrice {
  value: number
  updateUnixTime: number
  updateHumanTime: string
  priceChange24h: number
}

const fetcher = (mintList: string) => {
  return getMultipleTokenPrices(mintList.split(','))
}

export default function useBirdeyeTokenPrice(props: {
  mintList: (string | PublicKey | undefined)[]
  refreshInterval?: number
  timeout?: number
}) {
  const { mintList, refreshInterval = 2 * MINUTE_MILLISECONDS } = props || {}

  const readyList = useMemo(
    () => Array.from(new Set(mintList.filter((m) => !!m && isValidPublicKey(m)).map((m) => solToWSol(m!).toString()))),
    [JSON.stringify(mintList)]
  )

  const shouldFetch = readyList.length > 0

  const { data, isLoading, error, ...rest } = useSWR(shouldFetch ? readyList.join(',') : null, fetcher, {
    refreshInterval,
    dedupingInterval: refreshInterval,
    focusThrottleInterval: refreshInterval
  })

  const formattedData = useMemo(() => {
    const prices: Record<string, BirdEyeTokenPrice> = {}
    if (data) {
        Object.entries(data).forEach(([mint, price]) => {
            prices[mint] = {
                value: price,
                updateUnixTime: Date.now() / 1000,
                updateHumanTime: new Date().toISOString(),
                priceChange24h: 0
            }
        })
    }
    if (prices[WSOLMint.toBase58()]) {
        prices[PublicKey.default.toBase58()] = prices[WSOLMint.toBase58()]
    }
    return prices
  }, [data])

  return {
    data: formattedData,
    isLoading,
    error,
    isEmptyResult: !isLoading && Object.keys(formattedData).length === 0,
    ...rest
  }
}
