import React, { useMemo } from 'react';
import { Box, Flex, Spinner } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const LiFiWidget = dynamic(
  () => import('@lifi/widget').then((module) => module.LiFiWidget),
  { 
    ssr: false, 
    loading: () => <Flex h="500px" justify="center" align="center"><Spinner color="#00D1FF" emptyColor="#1A1B2E" size="xl" thickness="4px" /></Flex> 
  }
);

export const BridgeWidget: React.FC = () => {
  const widgetConfig = useMemo(() => ({
    integrator: 'SolSwap',
    fee: 0.001, // 10 BPS revenue share matching NEXT_PUBLIC_FEE_BPS
    variant: 'compact' as const,
    appearance: 'dark' as const,
    hiddenUI: ['appearance', 'language'] as any[],
    theme: {
      shape: {
        borderRadius: 24,
        borderRadiusSecondary: 24,
      },
      palette: {
        background: {
          paper: '#1A1B2E',
          default: '#0A0D14',
        },
        primary: { main: '#00D1FF' },
      }
    },
    fromChain: 1, // Ethereum
    toChain: 42161, // Arbitrum
    fromToken: '0xdAC17F958D2ee523a2206206994597C13D831ec7', // USDT
    toToken: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831' // USDC
  }), []);

  return (
    <Box w="100%" maxW="450px" mx="auto" minH="500px" borderRadius="24px" p={1} bg="transparent">
      <LiFiWidget config={widgetConfig} />
    </Box>
  );
};
