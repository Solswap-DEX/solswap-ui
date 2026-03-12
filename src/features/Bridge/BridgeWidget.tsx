import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

export const BridgeWidget: React.FC = () => {
  return (
    <Box w="100%" maxW="450px" mx="auto" minH="500px" borderRadius="2xl" p={4} bg="#1A1B2E" border="1px solid" borderColor="whiteAlpha.100">
      <Flex direction="column" align="center" justify="center" h="500px">
         <iframe
          src="https://li.fi/widget/?fromChain=1&toChain=115111108&toToken=So11111111111111111111111111111111111111112&theme=dark"
          title="Li.Fi Bridge Widget"
          height="100%"
          width="100%"
          style={{ borderRadius: '12px', border: 'none' }}
        />
      </Flex>
    </Box>
  );
};
