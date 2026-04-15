import axios from '@/api/axios'
import { birdeyeKlineApiAddress } from '@/utils/config/birdeyeAPI'
import { MINUTE_MILLISECONDS } from '@/utils/date'
import { throttle } from '@/utils/functionMethods'
import { solToWSol } from '@raydium-io/raydium-sdk-v2'
import { CandlestickData } from 'lightweight-charts'
import { useMemo } from 'react'
import useSWRInfinite from 'swr/infinite'
import { useEvent } from '../useEvent'
import usePrevious from '../usePrevious'

export type TimeType = '15m' | '1H' | '4H' | '1D' | '1W'

type RawKLineDataItem = {
  /** volume */
  v: number
  /** open */
  o: number
  /** close */
  c: number
  /** high */
  h: number
  /** low */
  l: number

  /** accurately value */
  vBase: number
  /** accurately value */
  vQuote: number

  /** unix time (s) */
  unixTime: number
  type: TimeType
}

const poolAddressCache = new Map<string, string>()

const fetcher = async (
  url: string
): Promise<{
  success: boolean
  data: { items: RawKLineDataItem[] }
}> => {
  if (url.startsWith('gecko://')) {
    try {
      const parts = url.split('/')
      const network = parts[2]
      const base = parts[3]
      const quote = parts[4]
      const timeframe = parts[5]
      const aggregate = parts[6]
      const limit = parts[7]
      const timeType = parts[8] as TimeType

      const cacheKey = `${base}-${quote}`
      let poolAddress = poolAddressCache.get(cacheKey)

      if (!poolAddress) {
        const poolRes = (await axios.get(`/api/gecko?path=networks/${network}/tokens/${base}/pools`)) as any
        if (poolRes?.data?.[0]) {
          poolAddress = poolRes.data[0].attributes.address
          poolAddressCache.set(cacheKey, poolAddress)
        } else {
          const poolResRev = (await axios.get(`/api/gecko?path=networks/${network}/tokens/${quote}/pools`)) as any
          if (poolResRev?.data?.[0]) {
            poolAddress = poolResRev.data[0].attributes.address
            poolAddressCache.set(cacheKey, poolAddress)
          }
        }
      }

      if (!poolAddress) return { success: false, data: { items: [] } }

      const ohlcvUrl = `/api/gecko?path=networks/${network}/pools/${poolAddress}/ohlcv/${timeframe}&aggregate=${aggregate}&limit=${limit}`
      const ohlcvRes = (await axios.get(ohlcvUrl)) as any

      if (!ohlcvRes?.data?.attributes?.ohlcv_list) return { success: false, data: { items: [] } }

      const items: RawKLineDataItem[] = ohlcvRes.data.attributes.ohlcv_list
        .map((item: any) => ({
          unixTime: item[0],
          o: parseFloat(item[1]),
          h: parseFloat(item[2]),
          l: parseFloat(item[3]),
          c: parseFloat(item[4]),
          v: parseFloat(item[5]),
          vBase: parseFloat(item[5]) / 2,
          vQuote: parseFloat(item[5]) / 2,
          type: timeType
        }))
        .reverse()

      return { success: true, data: { items } }
    } catch (e) {
      console.error('GeckoTerminal fetch error:', e)
      return { success: false, data: { items: [] } }
    }
  }

  return axios.get(url, {
    skipError: true
  })
}


const MINUTE_SECONDS = 60
export const SECONDS: Record<TimeType, number> = {
  '15m': 15 * MINUTE_SECONDS,
  '1H': 60 * MINUTE_SECONDS,
  '4H': 4 * 60 * MINUTE_SECONDS,
  '1D': 24 * 60 * MINUTE_SECONDS,
  '1W': 7 * 24 * 60 * MINUTE_SECONDS
}
const offsetSize: Record<TimeType, number> = {
  '15m': 100,
  '1H': 300,
  '4H': 300,
  '1D': 300,
  '1W': 300
}

const getOffset = (timeType: TimeType, page: number) => SECONDS[timeType] * (offsetSize[timeType] * page)
let lastFetchDate = Math.floor(Date.now() / 1000)

export default function useFetchPoolKLine({
  base,
  quote,
  timeType = '15m',
  untilDate: propUntilDate = Math.floor(Date.now() / 1000), // in seconds
  refreshInterval = 3 * MINUTE_MILLISECONDS
}: {
  base?: string
  quote?: string
  timeType?: TimeType
  untilDate?: number
  refreshInterval?: number
}) {
  const untilDate =
    propUntilDate > 0 ? (Math.abs(propUntilDate - lastFetchDate) * 1000 > refreshInterval ? propUntilDate : lastFetchDate) : lastFetchDate
  lastFetchDate = untilDate

  const fetchKey = `${base}-${quote}-${timeType}`
  const prevFetchKey = usePrevious(fetchKey)

  const shouldFetch = !!base && !!quote
  const { data, setSize, error, isLoading, ...swrProps } = useSWRInfinite(
    (index) =>
      shouldFetch
        ? birdeyeKlineApiAddress({
            baseMint: solToWSol(base || '').toString(),
            quoteMint: solToWSol(quote || '').toString(),
            timeType,
            timeFrom: untilDate - getOffset(timeType, index + 1),
            timeTo: untilDate - getOffset(timeType, index)
          })
        : null,
    fetcher,
    {
      revalidateFirstPage: false,
      dedupingInterval: refreshInterval,
      focusThrottleInterval: refreshInterval,
      refreshInterval,
      keepPreviousData: shouldFetch && fetchKey === prevFetchKey
    }
  )

  const isLoadEnded =
    !isLoading && !swrProps.isValidating ? (data && data[0].success ? data[data?.length - 1 || 0].data.items.length < 1 : false) : false
  const allPoints = useMemo(
    () => (data || []).filter((data) => data.success).reduce((acc, cur) => cur.data.items.concat(acc), [] as RawKLineDataItem[]),
    [data]
  )
  const isEmptyResult = !isLoading && !(data && !error)

  const loadMore = useEvent(
    throttle(() => {
      if (isLoading || swrProps.isValidating || isLoadEnded) return
      setSize((s) => s + 1)
    }, 1000)
  )

  const formattedData = useMemo(
    () =>
      allPoints.map((p) => {
        return {
          open: p.o,
          high: p.h,
          low: p.l,
          close: p.c,
          time: p.unixTime,
          value: p.vBase + p.vQuote
        } as CandlestickData & { value: number }
      }),
    [allPoints]
  )
  const lastData = formattedData[formattedData.length - 1]
  const prev24HData =
    timeType === '1W'
      ? formattedData[formattedData.length - 2]
      : formattedData[formattedData.length - Math.floor(SECONDS['1D'] / SECONDS[timeType] + 1)]
  const change24H = lastData && prev24HData ? (lastData.close - prev24HData.close) / prev24HData.close : undefined

  return {
    data: formattedData,
    currentPrice: lastData?.close,
    change24H,
    loadMore,
    isLoadEnded,
    isLoading,
    error,
    isEmptyResult,
    ...swrProps
  }
}
