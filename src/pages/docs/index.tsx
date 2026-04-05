import { Box, Container, VStack, Text, Heading, Divider, Grid, GridItem, Icon, Link, Flex } from '@chakra-ui/react'
import { colors } from '@/theme/cssVariables'
import SwapPageThumbnailIcon from '@/icons/pageNavigation/SwapPageThumbnailIcon'
import LiquidityPageThumbnailIcon from '@/icons/pageNavigation/LiquidityPageThumbnailIcon'
import BridgePageThumbnailIcon from '@/icons/pageNavigation/BridgePageThumbnailIcon'
import DocThumbnailIcon from '@/icons/pageNavigation/DocThumbnailIcon'
import PerpetualsPageThumbnailIcon from '@/icons/pageNavigation/PerpetualsPageThumbnailIcon'

export default function DocsPage() {
  return (
    <Box display="flex" justifyContent="center" bg={colors.backgroundDark} minH="100vh">
      <Container maxW="6xl" py={[10, 20]} px={4}>
        <VStack spacing={[10, 16]} align="stretch">
          {/* Hero Section */}
          <VStack align="center" spacing={6} textAlign="center">
            <Box p={3} bg={colors.backgroundTransparent07} borderRadius="full">
              <DocThumbnailIcon width={48} height={48} color={colors.textPrimary} />
            </Box>
            <Heading as="h1" size="2xl" color={colors.textPrimary} letterSpacing="tight">
              SolSwap Documentation
            </Heading>
            <Text color={colors.textQuaternary} fontSize="xl" maxW="2xl" lineHeight="tall">
              Welcome to the official SolSwap documentation. Learn how to trade, provide liquidity, and bridge assets on the fastest decentralized exchange on Solana.
            </Text>
          </VStack>

          <Divider borderColor={colors.backgroundTransparent07} />

          {/* Main Content Grid */}
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
            {/* Swapping */}
            <GridItem>
              <DocCard 
                title="Swapping Tokens" 
                icon={SwapPageThumbnailIcon}
                description="SolSwap uses an Automated Market Maker (AMM) model to enable instant token swaps. Simply select your trading pair and execute your trade directly from your Solana wallet."
              />
            </GridItem>

            {/* Liquidity */}
            <GridItem>
              <DocCard 
                title="Liquidity Pools" 
                icon={LiquidityPageThumbnailIcon}
                description="Provide liquidity to our pools and earn a share of every trade performed in that pair. Liquidity providers receive LP tokens representing their share of the pool."
              />
            </GridItem>

            {/* Bridge */}
            <GridItem>
              <DocCard 
                title="Cross-Chain Bridge" 
                icon={BridgePageThumbnailIcon}
                description="Bridge assets from Ethereum, Polygon, Arbitrum, and more directly into the Solana ecosystem using our integrated LI.FI bridge solution."
              />
            </GridItem>

            {/* Perpetuals */}
            <GridItem>
              <DocCard 
                title="Perpetual Trading" 
                icon={PerpetualsPageThumbnailIcon}
                description="Trade with leverage on our Perpetuals platform. Liquid, low-fee, and decentralized perpetual swaps for professional traders."
              />
            </GridItem>
          </Grid>

          {/* Detailed FAQ Section */}
          <VStack align="stretch" spacing={8} pt={10}>
            <Heading as="h2" size="xl" color={colors.textPrimary}>
              Frequently Asked Questions
            </Heading>
            <VStack align="stretch" spacing={6}>
              <FAQItem 
                question="What is SolSwap?" 
                answer="SolSwap is a decentralized exchange (DEX) built on the Solana blockchain. It allows users to swap tokens, provide liquidity, and trade perpetuals with high speed and low transaction costs."
              />
              <FAQItem 
                question="Are my funds safe?" 
                answer="SolSwap is a non-custodial platform. Your funds are always in your wallet and controlled by you via decentralized smart contracts on the Solana blockchain."
              />
              <FAQItem 
                question="How do I get started?" 
                answer="To use SolSwap, you'll need a Solana wallet like Phantom or Solflare. Simply connect your wallet, ensure you have some SOL for gas fees, and you're ready to trade."
              />
              <FAQItem 
                question="What are the trading fees?" 
                answer="Trading fees are used to incentivize liquidity providers. Standard pools typically have a 0.25% fee, most of which goes directly to the LPs."
              />
            </VStack>
          </VStack>

          {/* Footer CTA */}
          <Box 
            p={10} 
            bg={colors.backgroundTransparent07} 
            borderRadius="3xl" 
            textAlign="center"
            border="1px solid"
            borderColor={colors.backgroundTransparent10}
          >
            <Text color={colors.textPrimary} fontSize="lg" fontWeight="bold" mb={4}>
              Still have questions?
            </Text>
            <Flex justify="center" gap={6}>
              <Link href="https://x.com/SolswapDEX" isExternal color={colors.textLink}>X (Twitter)</Link>
              <Link href="https://t.me/Solswap_Pro" isExternal color={colors.textLink}>Telegram</Link>
            </Flex>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

function DocCard({ title, icon, description }: { title: string, icon: any, description: string }) {
  return (
    <VStack 
      align="start" 
      p={8} 
      bg={colors.backgroundMedium} 
      borderRadius="2xl" 
      height="full"
      border="1px solid"
      borderColor="transparent"
      transition="all 0.3s ease"
      _hover={{
        borderColor: colors.backgroundTransparent10,
        transform: 'translateY(-4px)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
      }}
    >
      <Box p={3} bg={colors.backgroundTransparent07} borderRadius="lg" mb={2}>
        <Icon as={icon} width={8} height={8} color={colors.textTertiary} />
      </Box>
      <Heading as="h3" size="md" color={colors.textPrimary}>
        {title}
      </Heading>
      <Text color={colors.textQuaternary} lineHeight="tall" textAlign="justify">
        {description}
      </Text>
    </VStack>
  )
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  return (
    <VStack align="start" spacing={2}>
      <Text color={colors.textPrimary} fontWeight="bold" fontSize="lg">
        {question}
      </Text>
      <Text color={colors.textQuaternary} lineHeight="tall" textAlign="justify">
        {answer}
      </Text>
      <Divider borderColor={colors.backgroundTransparent07} mt={4} />
    </VStack>
  )
}

export async function getStaticProps() {
  return {
    props: { title: 'Documentation | SolSwap' }
  }
}
