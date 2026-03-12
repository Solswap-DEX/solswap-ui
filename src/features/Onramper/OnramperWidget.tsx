import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

export const OnramperWidget: React.FC = () => {
  const apiKey = process.env.NEXT_PUBLIC_ONRAMPER_API_KEY;

  return (
    <Box w="100%" maxW="450px" mx="auto" minH="500px" borderRadius="2xl" p={4} bg="#1A1B2E" border="1px solid" borderColor="whiteAlpha.100">
      <Flex direction="column" align="center" justify="center" h="500px">
        <iframe
          src={`https://widget.onramper.com?apiKey=${apiKey}&defaultCrypto=SOL&defaultFiat=USD&color=00D1CF&locale=en`}
          title="Onramper Widget"
          height="100%"
          width="100%"
          style={{ borderRadius: '12px', border: 'none' }}
        />
      </Flex>
    </Box>
  );
};
