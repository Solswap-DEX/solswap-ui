import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
// Li.Fi widget is usually imported and rendered as a component
// import { LiFiWidget, WidgetConfig } from '@lifi/widget';

export const BridgeWidget: React.FC = () => {
  // Simplified implementation for code structure
  // In a production environment with @lifi/widget installed:
  /*
  const widgetConfig: WidgetConfig = {
    theme: {
      palette: {
        primary: { main: '#00D1CF' },
        secondary: { main: '#7B61FF' },
        background: { paper: '#1A1B2E', default: '#0C0D14' },
        text: { primary: '#FFFFFF', secondary: '#8B8FA8' },
      },
      shape: { borderRadius: 12 },
    },
    toChain: 115111108, // Solana Chain ID
    toToken: 'So11111111111111111111111111111111111111112', // SOL
    integrator: 'solswap',
  };
  */

  return (
    <Box w="100%" maxW="450px" mx="auto" minH="500px" borderRadius="2xl" p={4} bg="#1A1B2E" border="1px solid" borderColor="whiteAlpha.100">
      <Flex direction="column" align="center" justify="center" h="500px">
        <Text color="white" fontWeight="bold" mb={4}>Li.Fi Bridge Widget</Text>
        <Text color="textSecondary" fontSize="sm" textAlign="center">
          The Li.Fi bridge widget will be rendered here.
          Integrating cross-chain liquidity to Solana via SolSwap.
        </Text>
        {/* <LiFiWidget config={widgetConfig} /> */}
      </Flex>
    </Box>
  );
};
