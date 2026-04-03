import dynamic from 'next/dynamic';
import { Box, Flex, Container } from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useMemo, useEffect, useRef } from 'react';

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
  const { connected } = useWallet();
  const { setVisible } = useWalletModal();
  const wrapperRef = useRef<HTMLDivElement>(null);

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

      // --- Include Solana in allowed chains ---
      chains: {
        allow: [
          1,              // Ethereum
          137,            // Polygon
          56,             // BSC
          43114,          // Avalanche
          42161,          // Arbitrum
          10,             // Optimism
          8453,           // Base
          1151111081099710, // Solana
        ],
      },

      // --- SDK config with Solana RPC ---
      sdkConfig: {
        routeOptions: {
          fee: 0.01,
        },
        rpcUrls: {
          1151111081099710: ['https://mainnet.helius-rpc.com/?api-key=d526019a-9e67-4638-9273-0490b4bfdb8a'],
        },
      },

      // --- Hide wallet menu only (connectWalletButton is not a valid HiddenUI value) ---
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

  // MutationObserver: hide the internal LI.FI "Connect wallet" button,
  // and redirect clicks on any surviving connect element to the dApp's own wallet modal.
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const hideConnectButtons = () => {
      const buttons = wrapper.querySelectorAll('button');
      buttons.forEach((btn) => {
        const text = (btn.textContent || '').toLowerCase().trim();
        if (text.includes('connect wallet') || text === 'connect') {
          // Replace the button's click handler to open dApp wallet modal instead
          btn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            setVisible(true);
          };
          // Hide the button and its immediate parent container (which may hold a wallet icon)
          (btn as HTMLElement).style.display = 'none';
          const parent = btn.parentElement;
          if (parent && parent !== wrapper) {
            // Only hide the parent if it looks like a button container (not the main widget)
            const siblingButtons = parent.querySelectorAll('button');
            if (siblingButtons.length <= 2) {
              parent.style.display = 'none';
            }
          }
        }
      });
    };

    // Run immediately once
    hideConnectButtons();

    const observer = new MutationObserver(hideConnectButtons);
    observer.observe(wrapper, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [setVisible, connected]);

  return (
    <Box pt={20} minH="100vh" bg="#05070A" className="widget-wrapper" ref={wrapperRef}>
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
