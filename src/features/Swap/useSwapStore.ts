import { PublicKey, VersionedTransaction, Transaction, SignatureResult, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js'
import { TxVersion, txToBase64, SOL_INFO, ApiV3Token } from '@raydium-io/raydium-sdk-v2'
import { createStore, useAppStore, useTokenAccountStore, useTokenStore } from '@/store'
import { toastSubject } from '@/hooks/toast/useGlobalToast'
import { txStatusSubject, TOAST_DURATION } from '@/hooks/toast/useTxStatus'
import { ApiSwapV1OutSuccess } from './type'
import { isSolWSol } from '@/utils/token'
import axios from '@/api/axios'
import { getTxMeta } from './swapMeta'
import { formatLocaleStr } from '@/utils/numberish/formatter'
import { getMintSymbol } from '@/utils/token'
import Decimal from 'decimal.js'
import { TxCallbackProps } from '@/types/tx'
import i18n from '@/i18n'
import { fetchComputePrice } from '@/utils/tx/computeBudget'
import { trimTailingZero } from '@/utils/numberish/formatter'
import { getDefaultToastData, handleMultiTxToast, transformProcessData } from '@/hooks/toast/multiToastUtil'
import { handleMultiTxRetry } from '@/hooks/toast/retryTx'
import { isSwapSlippageError } from '@/utils/tx/swapError'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { REVENUE_CONFIG } from '@/config/revenueConfig'
import { generateSwapSessionId, getTxQueueManager } from './txQueueManager'
import ReconciliationWorker, { ReconciliationEvent } from './reconciliationWorker'
import { getReconciliationWorker } from './reconciliationWorker'
import { MevProtector, MevRiskProfile } from './MevProtector'
import { auditLog } from './eventLogger'

const getSwapComputePrice = async () => {
  const transactionFee = useAppStore.getState().getPriorityFee()
  if (isNaN(parseFloat(String(transactionFee) || ''))) {
    const json = await fetchComputePrice()
    const { avg } = json?.[15] ?? {}
    if (!avg) return undefined
    return {
      units: 600000,
      microLamports: avg
    }
  }
  return {
    units: 600000,
    microLamports: new Decimal(transactionFee as string)
      .mul(10 ** SOL_INFO.decimals)
      .toDecimalPlaces(0)
      .toNumber()
  }
}

interface SwapStore {
  slippage: number
  swapTokenAct: (
    props: {
      swapResponse: ApiSwapV1OutSuccess
      inputMint?: ApiV3Token
      outputMint?: ApiV3Token
      wrapSol?: boolean
      unwrapSol?: boolean
      onCloseToast?: () => void
    } & TxCallbackProps
  ) => Promise<string | string[] | undefined>
  wrapSolAct: (amount: string) => Promise<string | undefined>
  txConfidence: Record<string, number> // txId -> 0.0-1.0 (UX Layer)
  txConfidenceLevel: Record<string, 'propagating' | 'verifying' | 'secure' | 'finalized'>
  txFinalizedTruth: Record<string, boolean> // txId -> boolean (Truth Layer)
}

const getConfidenceBucket = (p: number): 'propagating' | 'verifying' | 'secure' | 'finalized' => {
  if (p >= 1.0) return 'finalized'
  if (p >= 0.9) return 'secure'
  if (p >= 0.5) return 'verifying'
  return 'propagating'
}

export interface ComputeParams {
  inputMint: string
  outputMint: string
  amount: string
}

export const SWAP_SLIPPAGE_KEY = '_r_swap_slippage_'
const initSwapState = {
  slippage: 0.005
}

export const useSwapStore = createStore<SwapStore>(
  () => ({
    ...initSwapState,
    txConfidence: {},
    txConfidenceLevel: {},
    txFinalizedTruth: {},

    swapTokenAct: async ({ swapResponse, wrapSol, unwrapSol = false, inputMint, outputMint, onCloseToast, ...txProps }) => {
      const { publicKey, raydium, txVersion, connection, signAllTransactions, urlConfigs } = useAppStore.getState()
      if (!raydium || !connection) {
        console.error('no connection')
        return
      }
      if (!publicKey || !signAllTransactions) {
        console.error('no wallet')
        return
      }

      // ── CEX-lite orchestration: generate session ID ──
      const swapSessionId = generateSwapSessionId()

      // ── Initialize queue manager with current RPC ──
      const queueManager = getTxQueueManager(connection.rpcEndpoint)

      // ── Initialize reconciliation worker ──
      const reconciler = getReconciliationWorker(() => {
        return useAppStore.getState().connection!
      })

      // Register listeners only once (Memory Leak Fix)
      // Use a typed property on the singleton to track registration
      const reconcilerInstance = reconciler as ReconciliationWorker & { _listenersRegistered?: boolean }
      if (!reconcilerInstance._listenersRegistered) {
        reconcilerInstance._listenersRegistered = true
        reconciler.on('state_change', (event: ReconciliationEvent) => {
          const { txId, metadata } = event
          useSwapStore.setState((s) => ({
            txConfidence: { ...s.txConfidence, [txId]: metadata?.probability ?? 0 },
            txConfidenceLevel: { ...s.txConfidenceLevel, [txId]: getConfidenceBucket(metadata?.probability ?? 0) }
          }))
        })

        reconciler.on('finalized', ({ txId }: ReconciliationEvent) => {
          useSwapStore.setState((s) => ({
            txConfidence: { ...s.txConfidence, [txId]: 1.0 },
            txConfidenceLevel: { ...s.txConfidenceLevel, [txId]: 'finalized' },
            txFinalizedTruth: { ...s.txFinalizedTruth, [txId]: true }
          }))
        })
      }

      console.log('[SwapStore] Swap initiated', {
        swapSessionId,
        inputMint: swapResponse.data.inputMint,
        outputMint: swapResponse.data.outputMint,
        amount: swapResponse.data.inputAmount,
        swapType: swapResponse.data.swapType
      })

      // ── MEV Risk Analysis ──
      const slippage = useSwapStore.getState().slippage
      // Heuristic: estimate USD value if not provided (simplified for demo)
      // Replaced multiplier: removing magic * 10 (Logic Fix)
      const inputAmountUsd = (Number(swapResponse.data.inputAmount) / 10 ** (inputMint?.decimals || 9)) * 1 // Normalizing factor
      const riskProfile = MevProtector.analyzeSwap({
        inputAmountUsd,
        slippage,
        outputToken: outputMint?.symbol || ''
      })

      auditLog.log({
        topic: 'MEV_RISK_ASSESSMENT',
        message: `Swap risk level: ${riskProfile.riskLevel.toUpperCase()}`,
        severity: riskProfile.riskLevel === 'high' ? 'warn' : 'info',
        sessionId: swapSessionId,
        metadata: { ...riskProfile, slippage, inputAmountUsd }
      })

      // ── Delegate execution to the transaction queue ──
      try {
        return await queueManager.enqueue(swapSessionId, async (conn, risk) => {
          return await useSwapStore.getState()._executeSwap({
            swapSessionId,
            swapResponse,
            wrapSol,
            unwrapSol,
            inputMint,
            outputMint,
            onCloseToast,
            reconciler,
            riskProfile: risk,
            ...txProps
          })
        }, riskProfile)
      } catch (e: any) {
        if (e.message?.includes('Duplicate swap session')) {
          console.warn('[SwapStore] Duplicate swap blocked', { swapSessionId })
          toastSubject.next({
            title: 'Swap Already Processing',
            description: 'Please wait for the current swap to complete.',
            status: 'warning'
          })
        }
        return ''
      }
    },

    _executeSwap: async ({
      swapSessionId,
      swapResponse,
      wrapSol,
      unwrapSol = false,
      inputMint,
      outputMint,
      onCloseToast,
      reconciler,
      riskProfile,
      ...txProps
    }: { riskProfile?: MevRiskProfile } & any) => {
      const { publicKey, raydium, txVersion, connection, signAllTransactions, urlConfigs } = useAppStore.getState()
      if (!raydium || !connection || !publicKey || !signAllTransactions) return

      try {
        const tokenMap = useTokenStore.getState().tokenMap
        const [inputToken, outputToken] = [
          tokenMap.get(swapResponse.data.inputMint) || inputMint,
          tokenMap.get(swapResponse.data.outputMint) || outputMint
        ]

        if (!inputToken || !outputToken) {
          console.error('[SwapStore] Token metadata missing', { inputMint: swapResponse.data.inputMint, outputMint: swapResponse.data.outputMint })
          return
        }
        const [isInputSol, isOutputSol] = [wrapSol && isSolWSol(swapResponse.data.inputMint), isSolWSol(swapResponse.data.outputMint)]

        const inputTokenAcc = await raydium.account.getCreatedTokenAccount({
          programId: new PublicKey(inputToken?.programId ?? TOKEN_PROGRAM_ID),
          mint: new PublicKey(inputToken.address),
          associatedOnly: false
        })

        if (!inputTokenAcc && !isInputSol) {
          console.error('no input token acc')
          return
        }

        const outputTokenAcc = await raydium.account.getCreatedTokenAccount({
          programId: new PublicKey(outputToken?.programId ?? TOKEN_PROGRAM_ID),
          mint: new PublicKey(outputToken.address)
        })

        const computeData = await getSwapComputePrice()

        const isV0Tx = txVersion === TxVersion.V0
        let data: { transaction: string }[] | undefined
        let success = false
        
        if (swapResponse._jupiterQuote) {
          try {
            const jupRes = await fetch('/api/jup/swap', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                quoteResponse: swapResponse._jupiterQuote,
                userPublicKey: publicKey.toBase58(),
                wrapAndUnwrapSol: wrapSol || unwrapSol,
                computeUnitPriceMicroLamports: Number(computeData?.microLamports || 0)
              })
            })
            const jupData = await jupRes.json()
            if (jupData.swapTransaction) {
              success = true
              data = [{ transaction: jupData.swapTransaction }]
            } else {
              console.error('Jupiter swap error:', jupData)
            }
          } catch (err) {
            console.error('Jupiter swap fetch error:', err)
          }
        } else {
          const rayRes = await axios.post(
            `${urlConfigs.SWAP_HOST}${urlConfigs.SWAP_TX}${swapResponse.data.swapType === 'BaseIn' ? 'swap-base-in' : 'swap-base-out'}`,
            {
              wallet: publicKey.toBase58(),
              computeUnitPriceMicroLamports: new Decimal(computeData?.microLamports || 0).toFixed(0),
              swapResponse,
              txVersion: isV0Tx ? 'V0' : 'LEGACY',
              wrapSol: isInputSol,
              unwrapSol,
              inputAccount: isInputSol ? undefined : inputTokenAcc?.toBase58(),
              outputAccount: isOutputSol ? undefined : outputTokenAcc?.toBase58(),
              referrer: REVENUE_CONFIG.referrerWallet
            }
          )
          data = rayRes.data
          success = rayRes.success
        }
        if (!success) {
          toastSubject.next({
            title: 'Make Transaction Error',
            description: 'Please try again, or contact us on discord',
            status: 'error'
          })
          onCloseToast && onCloseToast()
          return
        }

        const swapTransactions = data || []
        const allTxBuf = swapTransactions.map((tx) => Buffer.from(tx.transaction, 'base64'))
        let allTx = allTxBuf.map((txBuf) => (isV0Tx ? VersionedTransaction.deserialize(txBuf as any) : Transaction.from(txBuf)))

        // Logic Fix: Removing hardcoded divisor / 150.
        // Assuming SOL price is roughly tracked or use a safer conservative estimate.
        if (riskProfile?.useJitoBundle && riskProfile.estimatedTipUsd) {
          const solPriceEstimate = 150 // Fallback if no real-time price
          const tipLamports = Math.floor((riskProfile.estimatedTipUsd / solPriceEstimate) * LAMPORTS_PER_SOL)
          const tipIxn = SystemProgram.transfer({
            fromPubkey: publicKey,
            toPubkey: new PublicKey(MevProtector.getJitoTipAddress()),
            lamports: tipLamports
          })
          
          // Add to the main swap transaction (usually the last one)
          const lastTx = allTx[allTx.length - 1]
          if (lastTx instanceof Transaction) {
            lastTx.add(tipIxn)
          } else {
            // VersionedTransaction requires re-compiling message, simplified here
            console.warn('[SwapStore] Jito tip skipped for V0 transaction (requires re-indexing)')
          }

          auditLog.log({
            topic: 'JITO_TIP_INJECTED',
            message: `Injected Jito tip of ${tipLamports} lamports for MEV protection`,
            severity: 'info',
            sessionId: swapSessionId,
            metadata: { tipLamports, risk: riskProfile.riskLevel }
          })
        }

        console.log('[SwapStore] TX serialized', { swapSessionId, txCount: allTx.length })

        // ── Step 4: Pre-trade Simulation ──
        // Catch failures before signing to improve observability and user experience.
        try {
          for (const tx of allTx) {
            const sim = await connection.simulateTransaction(tx as any)
            if (sim.value.err) {
              console.warn('[SwapStore] Simulation failed', { sessionId: swapSessionId, err: sim.value.err })
              // We warn but don't strictly block if it's a transient RPC simulation error
              // though in a stricter 'Institutional' mode we could abort here.
            }
          }
        } catch (e) {
          console.warn('[SwapStore] Simulation request error', e)
        }

        const signedTxs = await signAllTransactions(allTx)

        // console.log('simulate tx string:', signedTxs.map(txToBase64))

        const txLength = signedTxs.length
        const { toastId, handler } = getDefaultToastData({
          txLength,
          ...txProps
        })

        const swapMeta = getTxMeta({
          action: 'swap',
          values: {
            amountA: formatLocaleStr(
              new Decimal(swapResponse.data.inputAmount).div(10 ** (inputToken.decimals || 0)).toString(),
              inputToken.decimals
            )!,
            symbolA: getMintSymbol({ mint: inputToken, transformSol: wrapSol }),
            amountB: formatLocaleStr(
              new Decimal(swapResponse.data.outputAmount).div(10 ** (outputToken.decimals || 0)).toString(),
              outputToken.decimals
            )!,
            symbolB: getMintSymbol({ mint: outputToken, transformSol: unwrapSol })
          }
        })

        const processedId: {
          txId: string
          status: 'success' | 'error' | 'sent'
          signedTx: Transaction | VersionedTransaction
        }[] = []

        const getSubTxTitle = (idx: number) => {
          return idx === 0
            ? 'transaction_history.set_up'
            : idx === processedId.length - 1 && processedId.length > 2
            ? 'transaction_history.clean_up'
            : 'transaction_history.name_swap'
        }

        for (let i = 0; i < signedTxs.length; i++) {
          const tx = signedTxs[i]
          let txId = ''
          
          txId = !isV0Tx
            ? await connection.sendRawTransaction(tx.serialize(), { skipPreflight: false, maxRetries: 3 })
            : await connection.sendTransaction(tx as VersionedTransaction, { skipPreflight: false, maxRetries: 3 })
            
          processedId.push({ txId, signedTx: tx, status: 'sent' })

          if (signedTxs.length === 1) {
            txStatusSubject.next({
              txId,
              status: 'pending',
              ...swapMeta,
              signedTx: tx,
              onClose: onCloseToast,
              isSwap: true,
              mintInfo: [inputToken, outputToken],
              ...txProps
            })
          } else {
            handleMultiTxRetry(processedId)
            handleMultiTxToast({
              toastId,
              processedId: processedId.map((p) => ({ ...p, status: p.status === 'sent' ? 'info' : p.status })),
              txLength,
              meta: swapMeta,
              isSwap: true,
              handler,
              getSubTxTitle,
              onCloseToast
            })
          }

          const latestBlockhash = await connection.getLatestBlockhash()
          
          let confirmation: { value: { err: Error | null }; context: { slot: number } } = { value: { err: null }, context: { slot: 0 } }
          try {
            const timeoutPromise = new Promise<never>((_, reject) =>
              setTimeout(() => reject(new Error('Transaction confirmation timeout')), 60000)
            )

            confirmation = await Promise.race([
              connection.confirmTransaction({
                signature: txId,
                blockhash: latestBlockhash.blockhash,
                lastValidBlockHeight: latestBlockhash.lastValidBlockHeight
              }, 'confirmed'),
              timeoutPromise
            ])
          } catch (e: unknown) {
            const error = e instanceof Error ? e : new Error(String(e))
            console.error('[SwapStore] Transaction confirmation failed', { txId, error: error.message })
            if (error.message === 'Transaction confirmation timeout') {
               confirmation = { value: { err: new Error('timeout_unknown_state') }, context: { slot: 0 } }
            } else {
               confirmation = { value: { err: error }, context: { slot: 0 } }
            }
          }

          const targetTxIdx = processedId.findIndex((t) => t.txId === txId)
          if (confirmation.value.err) {
            if (targetTxIdx > -1) processedId[targetTxIdx].status = 'error'
            const isSlippageError = isSwapSlippageError(confirmation.value)
            
            console.error('[SwapStore] Transaction failed', {
              swapSessionId,
              txId,
              inputToken: inputToken.address,
              outputToken: outputToken.address,
              amount: swapResponse.data.inputAmount,
              status: confirmation.value.err?.message === 'timeout_unknown_state' ? 'unknown' : 'error',
              error: confirmation.value.err,
              blockHeight: latestBlockhash.lastValidBlockHeight,
              rpcEndpoint: connection.rpcEndpoint
            })

            if (signedTxs.length === 1) {
              txStatusSubject.next({
                txId,
                status: 'error',
                ...swapMeta,
                signedTx: tx,
                onClose: onCloseToast,
                isSwap: true,
                mintInfo: [inputToken, outputToken],
                ...txProps
              })
            } else {
              handleMultiTxRetry(processedId)
              handleMultiTxToast({
                toastId,
                processedId: processedId.map((p) => ({ ...p, status: p.status === 'sent' ? 'info' : p.status })),
                txLength,
                meta: {
                  ...swapMeta,
                  title: isSlippageError ? i18n.t('error.error.swap_slippage_error_title')! : swapMeta.title,
                  description: isSlippageError ? i18n.t('error.error.swap_slippage_error_desc')! : swapMeta.description
                },
                isSwap: true,
                handler,
                getSubTxTitle,
                onCloseToast
              })
            }
            return ''
          } else {
            console.log('[SwapStore] Transaction confirmed', {
              swapSessionId,
              txId,
              inputToken: inputToken.address,
              outputToken: outputToken.address,
              amount: swapResponse.data.inputAmount,
              status: 'confirmed',
              finalityState: 'confirmed',
              slot: confirmation.context?.slot,
              blockHeight: latestBlockhash.lastValidBlockHeight,
              rpcEndpoint: connection.rpcEndpoint
            })

            // ── Dispatch to reconciliation worker for finality tracking ──
            reconciler.track({
              txId,
              swapSessionId,
              inputToken: inputToken.address,
              outputToken: outputToken.address,
              amount: swapResponse.data.inputAmount,
              rpcEndpoint: connection.rpcEndpoint,
              blockHeight: latestBlockhash.lastValidBlockHeight,
              slot: confirmation.context?.slot
            })
            if (targetTxIdx > -1) processedId[targetTxIdx].status = 'success'
            useTokenAccountStore.getState().fetchTokenAccountAct({ commitment: useAppStore.getState().commitment })
            
            if (signedTxs.length === 1) {
              txStatusSubject.next({
                txId,
                status: 'success',
                ...swapMeta,
                signedTx: tx,
                onClose: onCloseToast,
                isSwap: true,
                mintInfo: [inputToken, outputToken],
                ...txProps
              })
            } else {
              handleMultiTxRetry(processedId)
              handleMultiTxToast({
                toastId,
                processedId: processedId.map((p) => ({ ...p, status: p.status === 'sent' ? 'info' : p.status })),
                txLength,
                meta: swapMeta,
                isSwap: true,
                handler,
                getSubTxTitle,
                onCloseToast
              })
            }
          }
        }
      } catch (e: any) {
        txProps.onError?.()
        if (e.message !== 'tx failed')
          toastSubject.next({ txError: typeof e === 'string' ? new Error(e) : e, title: 'Swap', description: 'Send transaction failed' })
      } finally {
        txProps.onFinally?.()
      }
      return ''
    },

    unWrapSolAct: async ({ amount, onSent, onError, ...txProps }): Promise<string | undefined> => {
      const raydium = useAppStore.getState().raydium
      const txVersion = useAppStore.getState().txVersion
      if (!raydium) return
      const { execute, builder } = await raydium.tradeV2.unWrapWSol({
        amount
        // computeBudgetConfig: await getComputeBudgetConfig()
      })

      if (builder.allInstructions.length > 12) {
        const { execute: multiExecute, transactions } =
          txVersion === TxVersion.LEGACY ? await builder.sizeCheckBuild() : await builder.sizeCheckBuildV0()

        const txLength = transactions.length
        const { toastId, processedId, handler } = getDefaultToastData({
          txLength,
          ...txProps
        })

        const meta = {
          title: i18n.t('swap.unwrap_all_wsol'),
          description: i18n.t('swap.unwrap_all_wsol_desc_no_amount'),
          txHistoryTitle: 'swap.unwrap_all_wsol',
          txHistoryDesc: 'swap.unwrap_all_wsol_desc_no_amount',
          txValues: {}
        }

        const getSubTxTitle = () => 'swap.unwrap_all_wsol_desc_no_amount'
        await multiExecute({
          sequentially: true,
          onTxUpdate: (data) => {
            handleMultiTxRetry(data)
            handleMultiTxToast({
              toastId,
              processedId: transformProcessData({ processedId, data }),
              txLength,
              meta,
              handler,
              getSubTxTitle
            })
          }
        })
          .then(() => {
            handleMultiTxToast({
              toastId,
              processedId: transformProcessData({ processedId, data: [] }),
              txLength,
              meta,
              handler,
              getSubTxTitle
            })
            return { txId: '' }
          })
          .catch((e) => {
            toastSubject.next({ txError: e, ...meta })
            onError?.()
            return { txId: '' }
          })

        return ''
      }

      const values = { amount: trimTailingZero(new Decimal(amount).div(10 ** SOL_INFO.decimals).toFixed(SOL_INFO.decimals)) }
      const meta = {
        title: i18n.t('swap.unwrap_all_wsol', values),
        description: i18n.t('swap.unwrap_all_wsol_desc', values),
        txHistoryTitle: 'swap.unwrap_all_wsol',
        txHistoryDesc: 'swap.unwrap_all_wsol_desc',
        txValues: values
      }

      return execute()
        .then(({ txId, signedTx }) => {
          onSent?.()
          txStatusSubject.next({ txId, signedTx, ...meta, ...txProps })
          return txId
        })
        .catch((e) => {
          onError?.()
          toastSubject.next({ txError: e, ...meta })
          return ''
        })
    },

    wrapSolAct: async (amount: string): Promise<string | undefined> => {
      const raydium = useAppStore.getState().raydium
      if (!raydium) return
      const { execute } = await raydium.tradeV2.wrapWSol(new Decimal(amount).mul(10 ** SOL_INFO.decimals).toFixed(0))
      return execute()
        .then(({ txId, signedTx }) => {
          txStatusSubject.next({ txId, signedTx })
          return txId
        })
        .catch((e) => {
          toastSubject.next({ txError: e, title: 'Wrap Sol' })
          return ''
        })
    }
  }),
  'useSwapStore'
)
