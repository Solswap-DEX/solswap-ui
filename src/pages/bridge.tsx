import dynamic from 'next/dynamic';
import { Box, Flex, Container } from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useMemo, useEffect } from 'react';

// Dynamic import to avoid hydration errors as the widget uses browser APIs
const LiFiWidget = dynamic(
  () => import('@lifi/widget').then((mod) => mod.LiFiWidget),
  {
    ssr: false,
    loading: () => (
      <Flex justify="center" align="center" minH="50vh">
        <Box color="#00D1FF">Loading Bridge...</Box>
      </Flex>
    ),
  }
);

function BridgePage() {
  const { publicKey, connected, connect, disconnect, wallet } = useWallet();
  const { setVisible } = useWalletModal();

  const widgetConfig = useMemo(
    () => ({
      integrator: 'SolSwap',
      appearance: 'dark' as const,

      // --- Fee monetization: 1% (100 basis points) ---
      fee: 0.01,

      // --- Default: Base to Solana ---
      fromChain: 8453,
      toChain: 1151111081099710, // Solana
      fromToken: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', // USDC on Base
      toToken: 'SOL', // Sol native using symbol

      // --- SVM (Solana) wallet integration ---
      sdkConfig: {
        routeOptions: {
          fee: 0.01,
        },
        rpcUrls: {
          '1151111081099710': ['https://mainnet.helius-rpc.com/?api-key=d526019a-9e67-4638-9273-0490b4bfdb8a'],
        },
      },
      walletConfig: {
        onConnect: async () => {
          // Trigger the SolSwap custom wallet modal when LIFI requests connection
          setVisible(true);
        },
      },

      // --- Hide internal connect wallet button ---
      hiddenUI: ['walletMenu' as any, 'connectWalletButton' as any],

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
          success: { main: '#00FFA3' },
          error: { main: '#FF4D6D' },
        },
        shape: {
          borderRadius: 16,
        },
        typography: {
          fontFamily: 'inherit',
        },
      },

      // --- Container style with CSS override to hide any remaining internal connect button ---
      containerStyle: {
        border: '1px solid #0D1117',
        borderRadius: '16px',
      } as any,
    }),
    [connected, wallet, connect, setVisible]
  );

  // Use a MutationObserver to completely hide the internal LI.FI "Connect Wallet" button
  // because dynamically injected CSS classes by MUI often evade static CSS rules.
  useEffect(() => {
    if (connected) return; // Only hide it when disconnected so they can still see "Review swap" later

    const observer = new MutationObserver(() => {
      const buttons = document.querySelectorAll('.widget-wrapper button');
      buttons.forEach((btn) => {
        const text = btn.textContent?.toLowerCase() || '';
        if (text.includes('connect')) {
          // Hide both the button and its parent container to also hide the small wallet icon button next to it
          const parent = btn.parentElement;
          if (parent) {
            parent.style.display = 'none';
          }
          (btn as HTMLElement).style.display = 'none';
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [connected]);

  return (
    <Box pt={20} minH="100vh" bg="#05070A" className="widget-wrapper">
      <Container maxW="container.lg">
        <Flex justify="center" align="center" direction="column">
          <LiFiWidget integrator="SolSwap" config={widgetConfig} />
        </Flex>
      </Container>
    </Box>
  );
}

export default BridgePage;

export async function getStaticProps() {
  return {
    props: { title: 'Bridge | SolSwap' },
  };
}
