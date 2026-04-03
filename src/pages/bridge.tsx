import dynamic from 'next/dynamic';
import { Box, Flex, Container } from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useMemo, useEffect, useRef } from 'react';

// Dynamic import for the entire bridge widget with providers (no SSR)
const BridgeWidget = dynamic(
  () => import('../components/BridgeWidget'),
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

  // MutationObserver: hide the internal LI.FI "Connect wallet" button
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const hideConnectButtons = () => {
      const buttons = wrapper.querySelectorAll('button');
      buttons.forEach((btn) => {
        const text = (btn.textContent || '').toLowerCase().trim();
        if (text.includes('connect wallet') || text === 'connect') {
          btn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            setVisible(true);
          };
          (btn as HTMLElement).style.display = 'none';
          const parent = btn.parentElement;
          if (parent && parent !== wrapper) {
            const siblingButtons = parent.querySelectorAll('button');
            if (siblingButtons.length <= 2) {
              parent.style.display = 'none';
            }
          }
        }
      });
    };

    hideConnectButtons();
    const observer = new MutationObserver(hideConnectButtons);
    observer.observe(wrapper, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [setVisible, connected]);

  return (
    <Box pt={20} minH="100vh" bg="#05070A" className="widget-wrapper" ref={wrapperRef}>
      <Container maxW="container.lg">
        <Flex justify="center" align="center" direction="column">
          <BridgeWidget />
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
