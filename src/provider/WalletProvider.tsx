import { FC, PropsWithChildren, useEffect } from 'react'
import React, { useMemo, useState } from 'react'

import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { GlowWalletAdapter } from '@solana/wallet-adapter-glow'
import { ExodusWalletAdapter } from '@solana/wallet-adapter-exodus'
import { SlopeWalletAdapter } from '@solana/wallet-adapter-slope'
import { initialize } from '@solflare-wallet/wallet-adapter'
import { BackpackWalletAdapter } from '@solana/wallet-adapter-backpack'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom'
import {
  TorusWalletAdapter,
  TrustWalletAdapter,
  // LedgerWalletAdapter,
  MathWalletAdapter,
  TokenPocketWalletAdapter,
  CoinbaseWalletAdapter,
  SolongWalletAdapter,
  Coin98WalletAdapter,
  SafePalWalletAdapter,
  BitpieWalletAdapter,
  BitgetWalletAdapter
} from '@solana/wallet-adapter-wallets'
import { useAppStore, defaultNetWork, defaultEndpoint } from '../store/useAppStore'
import { registerMoonGateWallet } from '@moongate/moongate-adapter'
import { WalletConnectWalletAdapter } from '@walletconnect/solana-adapter'

import { type Adapter, type WalletError } from '@solana/wallet-adapter-base'
import { sendWalletEvent } from '@/api/event'
import { useEvent } from '@/hooks/useEvent'
import { LedgerWalletAdapter } from './Ledger/LedgerWalletAdapter'

initialize()

const App: FC<PropsWithChildren<any>> = ({ children }) => {
  const [network] = useState<WalletAdapterNetwork>(defaultNetWork)
  const rpcNodeUrl = useAppStore((s) => s.rpcNodeUrl)
  const wsNodeUrl = useAppStore((s) => s.wsNodeUrl)
  // const [endpoint] = useState<string>(defaultEndpoint)
  const [endpoint, setEndpoint] = useState<string>(rpcNodeUrl || defaultEndpoint)

  registerMoonGateWallet({
    authMode: 'Ethereum',
    position: 'top-right'
    // logoDataUri: 'OPTIONAL ADD IN-WALLET LOGO URL HERE',
    // buttonLogoUri: 'ADD OPTIONAL LOGO FOR WIDGET BUTTON HERE'
  })
  registerMoonGateWallet({
    authMode: 'Google',
    position: 'top-right'
    // logoDataUri: 'OPTIONAL ADD IN-WALLET LOGO URL HERE',
    // buttonLogoUri: 'ADD OPTIONAL LOGO FOR WIDGET BUTTON HERE'
  })
  // registerMoonGateWallet({
  //   authMode: 'Twitter',
  //   position: 'top-right'
  //   // logoDataUri: 'OPTIONAL ADD IN-WALLET LOGO URL HERE',
  //   // buttonLogoUri: 'ADD OPTIONAL LOGO FOR WIDGET BUTTON HERE'
  // })
  registerMoonGateWallet({
    authMode: 'Apple',
    position: 'top-right'
    // logoDataUri: 'OPTIONAL ADD IN-WALLET LOGO URL HERE',
    // buttonLogoUri: 'ADD OPTIONAL LOGO FOR WIDGET BUTTON HERE'
  })

  const _walletConnect = useMemo(() => {
    const connectWallet: WalletConnectWalletAdapter[] = []
    const wcProjectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PJ_ID
    // Only init WalletConnect if a real project ID is configured — avoids relay errors
    if (wcProjectId && wcProjectId.length > 8) {
      try {
        connectWallet.push(
          new WalletConnectWalletAdapter({
            network: network as WalletAdapterNetwork.Mainnet,
            options: {
              projectId: wcProjectId,
              metadata: {
                name: 'SolSwap',
                description: 'Solana DEX - Swap, Bridge & LaunchLab',
                url: 'https://solswap.cloud',
                icons: ['https://solswap.cloud/logo/logo-only-icon.svg']
              }
            }
          })
        )
      } catch (e) {
        // silently ignore
      }
    }
    return connectWallet
  }, [network])

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new BackpackWalletAdapter(),
      new SlopeWalletAdapter({ endpoint }),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
      ..._walletConnect,
      new GlowWalletAdapter(),
      new TrustWalletAdapter(),
      new MathWalletAdapter({ endpoint }),
      new TokenPocketWalletAdapter(),
      new CoinbaseWalletAdapter({ endpoint }),
      new SolongWalletAdapter({ endpoint }),
      new Coin98WalletAdapter({ endpoint }),
      new SafePalWalletAdapter({ endpoint }),
      new BitpieWalletAdapter({ endpoint }),
      new BitgetWalletAdapter({ endpoint }),
      new ExodusWalletAdapter({ endpoint })
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network] // Do NOT add 'endpoint' here — changing RPC would recreate all adapters,
    // causing @solana/wallet-adapter-react to disconnect the active wallet (Phantom disconnect bug)
  )

  useEffect(() => {
    if (rpcNodeUrl) setEndpoint(rpcNodeUrl)
  }, [rpcNodeUrl])

  const onWalletError = useEvent((error: WalletError, adapter?: Adapter) => {
    if (!adapter) return
    sendWalletEvent({
      type: 'connectWallet',
      walletName: adapter.name,
      connectStatus: 'failure',
      errorMsg: error.message || error.stack
    })
  })

  return (
    <ConnectionProvider endpoint={endpoint} config={{ disableRetryOnRateLimit: true, ...(wsNodeUrl ? { wsEndpoint: wsNodeUrl } : {}) }}>
      <WalletProvider wallets={wallets} onError={onWalletError} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
