import { getMultipleTokenPrices } from '@/config/api'
import { isValidPublicKey } from '@/utils/publicKey'
import { MINUTE_MILLISECONDS } from '@/utils/date'
import { useTokenStore, TokenPrice } from '@/store'
import { solToWSol } from '@raydium-io/raydium-sdk-v2'
import { NATIVE_MINT } from '@solana/spl-token'
import { PublicKey } from '@solana/web3.js'
import { useCallback, useEffect, useMemo, useState } from 'react'
import useSWR from 'swr'

export type { TokenPrice }

const fetcher = (mints: string[]) => {
  return getMultipleTokenPrices(mints)
}

export default function useTokenPrice(props: { mintList: (string | PublicKey | undefined)[]; refreshInterval?: number; timeout?: number }) {
  const { mintList, refreshInterval = 3 * MINUTE_MILLISECONDS, timeout = 800 } = props || {}
  const tokenPriceRecord = useTokenStore((s) => s.tokenPriceRecord)
  const [startFetch, setStartFetch] = useState(timeout === 0)

  const readyList = useMemo(
    () => Array.from(new Set(mintList.filter((m) => !!m && isValidPublicKey(m)).map((m) => solToWSol(m!).toString()))),
    [JSON.stringify(mintList)]
  )

  const { data, isLoading, error, ...rest } = useSWR(
    startFetch && readyList.length > 0 ? readyList : null,
    fetcher,
    {
      refreshInterval,
      dedupingInterval: refreshInterval,
      focusThrottleInterval: refreshInterval
    }
  )

  const resData = useMemo(() => {
    const prices: Record<string, TokenPrice> = {}
    if (data) {
      Object.entries(data).forEach(([mint, price]) => {
        prices[mint] = { value: price }
      })
    }
    
    if (prices[NATIVE_MINT.toBase58()]) {
      prices[PublicKey.default.toBase58()] = prices[NATIVE_MINT.toBase58()]
    }

    return prices
  }, [data])

  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      const fetchRecord = new Map(Array.from(useTokenStore.getState().tokenPriceRecord))
      Object.entries(data).forEach(([mint, price]) => {
        fetchRecord.set(mint, {
          fetchTime: Date.now(),
          data: { value: price }
        })
      })
      useTokenStore.setState({ tokenPriceRecord: fetchRecord })
    }
  }, [data])

  useEffect(() => {
    if (!readyList.length) return
    if (timeout === 0) {
        setStartFetch(true)
        return
    }
    const id = setTimeout(() => setStartFetch(true), timeout)
    return () => clearTimeout(id)
  }, [readyList, timeout])

  return {
    data: resData,
    isLoading,
    error,
    refreshPrice: rest.mutate,
    ...rest
  }
}
