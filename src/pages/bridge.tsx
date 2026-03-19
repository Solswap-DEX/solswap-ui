import dynamic from 'next/dynamic';
import { Box, Flex, Container } from '@chakra-ui/react';

// Dynamic import to avoid hydration errors as the widget uses browser APIs
const LiFiWidget = dynamic(
  () => import('@lifi/widget').then((config) => config.LiFiWidget),
  {
    ssr: false,
    loading: () => (
      <Flex justify="center" align="center" minH="50vh">
        <Box color="#00D1FF">Loading Bridge...</Box>
      </Flex>
    ),
  }
);

const widgetConfig = {
  integrator: 'SolSwap',
  theme: {
    palette: {
      primary: { main: '#00D1FF' },
      background: {
        default: '#05070A',
        paper: '#0D1117',
      },
      text: {
        primary: '#FFFFFF',
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
  appearance: 'dark' as const,
  containerStyle: {
    border: '1px solid #1A1B2E',
    borderRadius: '16px',
  },
};

function BridgePage() {
  return (
    <Box pt={20} minH="100vh" bg="#05070A">
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
    props: { title: 'Bridge | SolSwap' }
  };
}
