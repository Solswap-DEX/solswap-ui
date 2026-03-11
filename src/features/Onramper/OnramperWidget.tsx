import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

export const OnramperWidget: React.FC = () => {
  const apiKey = process.env.NEXT_PUBLIC_ONRAMPER_API_KEY;
  
  // Note: In a real implementation, you would use @onramper/widget or an iframe
  // according to their documentation. This is a simplified integration.
  
  const onramperUrl = `https://widget.onramper.com/?apiKey=${apiKey}&defaultCrypto=SOL&defaultFiat=USD&isAddressEditable=false&color=00D1CF`;

  return (
    <Box w="100%" h="600px" borderRadius="xl" overflow="hidden" border="1px solid" borderColor="whiteAlpha.100" bg="#13141F">
      {!apiKey ? (
         <Flex align="center" justify="center" h="100%" p={8}>
            <Text color="textSecondary" textAlign="center">
              Please configure NEXT_PUBLIC_ONRAMPER_API_KEY in your environment to enable the fiat onramp.
            </Text>
         </Flex>
      ) : (
        <iframe
          src={onramperUrl}
          title="Onramper Widget"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          allow="accelerometer; autoplay; camera; gyroscope; payment"
        />
      )}
    </Box>
  );
};
