import { TxVersion, solToWSol } from '@raydium-io/raydium-sdk-v2'
import axios from '@/api/axios'
import { useAppStore } from '@/store'
import { useSwapStore } from './useSwapStore'
import useSWR from 'swr'
import { shallow } from "zustand/shallow"
import { useCallback, useEffect, useState } from 'react'
import { debounce } from '@/utils/functionMethods'
import { isValidPublicKey } from '@/utils/publicKey'
import { safeDecimal } from '@/utils/safeDecimal'
import { ApiSwapV1OutSuccess, ApiSwapV1OutError } from './type'
import { REVENUE_CONFIG } from '@/config/revenueConfig'

const WSOL_MINT = 'So11111111111111111111111111111111111111112'

// Normalize 'sol' or SOLMint to WSOL for Raydium API
const toApiMint = (mint: string) => {
  if (!mint) return mint
  if (mint === 'sol' || mint === '11111111111111111111111111111111') return WSOL_MINT
  if (isValidPublicKey(mint)) return solToWSol(mint).toBase58()
  return mint
}

// Try Jupiter Quote API as a fallback for pump.fun / non-Raydium tokens
const fetchJupiterQuote = async (
  inputMint: string,
  outputMint: string,
  amount: string,
  slippageBps: string,
  swapType: 'BaseIn' | 'BaseOut'
): Promise<ApiSwapV1OutSuccess | ApiSwapV1OutError> => {
  const mode = swapType === 'BaseOut' ? 'ExactOut' : 'ExactIn'
  // Use our local proxy to avoid ERR_TUNNEL_CONNECTION_FAILED from browser extensions/firewalls
  const url = `/api/jup/quote?inputMint=${inputMint}&outputMint=${outputMint}&amount=${amount}&slippageBps=${slippageBps}&swapMode=${mode}`
  const res = await fetch(url)
  if (!res.ok) throw new Error('Jupiter API error')
  const jup = await res.json()
  if (jup.error || !jup.outAmount) throw new Error(jup.error || 'No route found on Jupiter')
  // Map Jupiter response to Raydium-like format
  return {
    id: 'jup-' + Date.now(),
    success: true,
    version: 'V1',
    openTime: undefined,
    msg: undefined,
    data: {
      swapType,
      inputMint: jup.inputMint,
      inputAmount: jup.inAmount,
      outputMint: jup.outputMint,
      outputAmount: jup.outAmount,
      otherAmountThreshold: jup.otherAmountThreshold || jup.outAmount,
      slippageBps: Number(slippageBps),
      priceImpactPct: parseFloat(jup.priceImpactPct || '0'),
      routePlan: (jup.routePlan || []).map((r: any) => ({
        poolId: r.swapInfo?.ammKey || '',
        inputMint: r.swapInfo?.inputMint || '',
        outputMint: r.swapInfo?.outputMint || '',
        feeMint: r.swapInfo?.feeMint || '',
        feeRate: 0,
        feeAmount: r.swapInfo?.feeAmount || '0'
      }))
    },
    _jupiterQuote: jup
  } as ApiSwapV1OutSuccess & { _jupiterQuote?: any }
}

const fetcher = async (key: string): Promise<ApiSwapV1OutSuccess | ApiSwapV1OutError> => {
  // key format: "raydium|<url>|<inputMint>|<outputMint>|<amount>|<slippageBps>|<swapType>"
  const [, url, inputMint, outputMint, amount, slippageBps, swapType] = key.split('|')
  try {
    const res = await axios.get(url, { skipError: true })
    if (res && typeof res === 'object') {
      const data = res as unknown as ApiSwapV1OutSuccess | ApiSwapV1OutError
      // If Raydium returns a route error, fall back to Jupiter
      if (!data.success && data.msg && (
        data.msg.includes('ROUTE_NOT_FOUND') ||
        data.msg.includes('REQ_INPUT_MINT_ERROR') ||
        data.msg.includes('REQ_OUTPUT_MINT_ERROR')
      )) {
        return fetchJupiterQuote(inputMint, outputMint, amount, slippageBps, swapType as 'BaseIn' | 'BaseOut')
      }
      return data
    }
    throw new Error('Invalid API response')
  } catch (e) {
    // On network error, also try Jupiter
    try {
      return fetchJupiterQuote(inputMint, outputMint, amount, slippageBps, swapType as 'BaseIn' | 'BaseOut')
    } catch {
      throw e
    }
  }
}

export default function useSwap(props: {
  shouldFetch?: boolean
  inputMint?: string
  outputMint?: string
  amount?: string
  refreshInterval?: number
  slippageBps?: number
  swapType: 'BaseIn' | 'BaseOut'
}) {
  const {
    shouldFetch = true,
    inputMint: propInputMint = '',
    outputMint: propOutputMint = '',
    amount: propsAmount,
    slippageBps: propsSlippage,
    swapType,
    refreshInterval = 10 * 1000
  } = props || {}

  const [amount, setAmount] = useState('')
  const [inputMint, outputMint] = [toApiMint(propInputMint), toApiMint(propOutputMint)]

  const [txVersion, urlConfigs] = useAppStore((s) => [s.txVersion, s.urlConfigs], shallow)
  const slippage = useSwapStore((s) => s.slippage)
  const slippageBps = safeDecimal(propsSlippage || slippage * 10000).toFixed(0)

  const apiTrail = swapType === 'BaseOut' ? 'swap-base-out' : 'swap-base-in'
  const raydiumUrl =
    shouldFetch && inputMint && outputMint && !safeDecimal(amount.trim() || 0).isZero()
      ? `${urlConfigs.SWAP_HOST}${urlConfigs.SWAP_COMPUTE}${apiTrail}?inputMint=${inputMint}&outputMint=${outputMint}&amount=${amount}&slippageBps=${slippageBps}&txVersion=${
          txVersion === TxVersion.V0 ? 'V0' : 'LEGACY'
        }&referrer=${REVENUE_CONFIG.referrerWallet}&platformFee=${REVENUE_CONFIG.feeBps}&feeAccount=${REVENUE_CONFIG.feeCollector}`
      : null

  // Include mints and params in the SWR key so Jupiter fallback also has them
  const swrKey = raydiumUrl
    ? `raydium|${raydiumUrl}|${inputMint}|${outputMint}|${amount}|${slippageBps}|${swapType}`
    : null

  const updateAmount = useCallback(
    debounce((val: string) => {
      setAmount(val)
    }, 200),
    []
  )

  useEffect(() => {
    updateAmount(propsAmount)
  }, [propsAmount, updateAmount])

  const { data, error, ...swrProps } = useSWR(() => swrKey, fetcher, {
    refreshInterval,
    focusThrottleInterval: refreshInterval,
    dedupingInterval: 30 * 1000
  })

  return {
    response: data,
    data: data?.data,
    error: error?.message || (!data?.success ? data?.msg : undefined),
    openTime: data?.openTime,
    ...swrProps
  }
}
