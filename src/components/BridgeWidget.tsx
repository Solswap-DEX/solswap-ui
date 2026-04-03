import { useMemo } from 'react';
import { createConfig, http, WagmiProvider } from 'wagmi';
import { mainnet, polygon, bsc, avalanche, arbitrum, optimism, base } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LiFiWidget } from '@lifi/widget';

// Minimal wagmi config so the LI.FI widget detects EVM chain support
const wagmiConfig = createConfig({
  chains: [mainnet, base, polygon, bsc, avalanche, arbitrum, optimism],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
    [polygon.id]: http(),
    [bsc.id]: http(),
    [avalanche.id]: http(),
    [arbitrum.id]: http(),
    [optimism.id]: http(),
  },
});

const queryClient = new QueryClient();

export default function BridgeWidget() {
  const widgetConfig = useMemo(
    () => ({
      integrator: 'SolSwap',
      appearance: 'dark' as const,

      // --- Fee monetization: 1% ---
      fee: 0.01,

      // --- Default route: Base USDC → Solana SOL ---
      fromChain: 8453,  // Base
      toChain: 1151111081099710,  // Solana
      fromToken: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',  // USDC on Base
      toToken: '11111111111111111111111111111111',  // Native SOL on Solana

      // --- Let the widget show ALL supported chains (EVM + SVM) ---
      // No chains.allow filter so all chains including Solana are visible

      // --- SDK config with Solana RPC ---
      sdkConfig: {
        routeOptions: {
          fee: 0.01,
        },
        rpcUrls: {
          1151111081099710: ['https://mainnet.helius-rpc.com/?api-key=d526019a-9e67-4638-9273-0490b4bfdb8a'],
        },
      },

      // --- Hide wallet menu ---
      hiddenUI: ['walletMenu' as const],

      // --- Theme: Neon Moderno ---
      theme: {
        palette: {
          primary: { main: '#00D1FF' },
          secondary: { main: '#7B61FF' },
          background: {
            default: '#05070A',
            paper: '#0D1117',
          },
          text: {
            primary: '#F0F4F8',
            secondary: '#8B8EA8',
          },
        },
        shape: {
          borderRadius: 16,
        },
        typography: {
          fontFamily: 'inherit',
        },
      },

      containerStyle: {
        border: '1px solid #0D1117',
        borderRadius: '16px',
      } as any,
    }),
    []
  );

  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={wagmiConfig}>
        <LiFiWidget integrator="SolSwap" config={widgetConfig} />
      </WagmiProvider>
    </QueryClientProvider>
  );
}
