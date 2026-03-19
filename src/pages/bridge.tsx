import dynamic from 'next/dynamic';
import { Box, Flex, Container } from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useMemo } from 'react';

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

  const widgetConfig = useMemo(
    () => ({
      integrator: 'SolSwap',
      appearance: 'dark' as const,

      // --- Fee monetization: 1% (100 basis points) ---
      fee: 0.01,

      // --- Default route: Base USDC → Solana SOL ---
      fromChain: 8453,       // Base chain id
      toChain: 1151111081099710, // Solana chain id
      fromToken: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', // USDC on Base
      toToken: '0x0000000000000000000000000000000000000000',      // native SOL

      // --- SVM (Solana) wallet integration ---
      sdkConfig: {
        routeOptions: {
          fee: 0.01,
        },
      },
      walletConfig: {
        onConnect: async () => {
          // Triggered when LI.FI widget tries to connect.
          // Delegate to the dApp's master wallet adapter.
          if (!connected && wallet) {
            try {
              await connect();
            } catch (e) {
              console.warn('Wallet connect cancelled', e);
            }
          }
        },
      },

      // --- Hide internal connect wallet button ---
      hiddenUI: ['walletMenu' as any],

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
        // Targeted CSS workaround to hide any internal "Connect Wallet" button
        // that the widget may still render
        '& button[class*="connect"], & [class*="ConnectButton"], & [data-testid*="connect-wallet"]': {
          display: 'none !important',
        },
      } as any,
    }),
    [connected, wallet, connect]
  );

  return (
    <Box pt={20} minH="100vh" bg="#05070A">
      <Container maxW="container.lg">
        <Flex justify="center" align="center" direction="column">
          <LiFiWidget integrator="SolSwap" config={widgetConfig} />
        </Flex>
      </Container>

      {/* Global CSS override as a fallback to hide any internal connect wallet UI */}
      <style jsx global>{`
        /* Hide LI.FI internal connect wallet button(s) */
        .MuiButton-root[class*="connectWallet"],
        [class*="WalletButton"],
        button[aria-label*="connect" i][class*="lifi"],
        .lifi-widget button[class*="connect" i]:not([class*="header"]) {
          display: none !important;
        }
      `}</style>
    </Box>
  );
}

export default BridgePage;

export async function getStaticProps() {
  return {
    props: { title: 'Bridge | SolSwap' },
  };
}
