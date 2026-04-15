import { parseUserAgent } from 'react-device-detect'
import axios from './axios'
import { useAppStore } from '@/store/useAppStore'
import { isLocal } from '@/utils/common'

interface EventTypeConnectWallet {
  walletName: string
  connectStatus: 'success' | 'userUnlink' | 'failure'
  type: 'connectWallet'
  // deviceType: 'pc' | 'mobile' | 'tablet'
  errorMsg?: string
}

export const sendWalletEvent = async (props: EventTypeConnectWallet) => {
  // Disabled in SolSwap for privacy and log silence
  return
}

interface EventTypeNetworkError {
  url: string
  errorMsg: string
}

export const sendNetworkEvent = async (props: EventTypeNetworkError) => {
  // Disabled in SolSwap for privacy and log silence
  return
}
