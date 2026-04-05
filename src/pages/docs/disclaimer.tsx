import { Box, Container, VStack, Text, Heading, Divider } from '@chakra-ui/react'
import { colors } from '@/theme/cssVariables'

export default function DisclaimerPage() {
  return (
    <Box display="flex" justifyContent="center" bg={colors.backgroundDark}>
      <Container maxW="6xl" py={[10, 20]} px={4}>
        <VStack spacing={[6, 10]} maxW="4xl" mx="auto" align="stretch">
          <VStack align="center" spacing={4}>
            <Heading as="h1" size="2xl" textAlign="center" color={colors.textPrimary}>
              SolSwap Disclaimer
            </Heading>
            <Text color={colors.textTertiary} fontSize="lg" textAlign="center">
              Last updated: April 2026
            </Text>
          </VStack>

          <Divider borderColor={colors.backgroundTransparent07} />

          <VStack
            p={[6, 12]}
            bg={colors.backgroundMedium}
            borderRadius="2xl"
            fontSize="md"
            color={colors.textSecondary}
            boxShadow="xl"
            spacing={6}
            align="stretch"
          >
            <section>
              <Heading as="h2" size="md" color={colors.textPrimary} mb={3}>
                1. Interface vs. Protocol
              </Heading>
              <Text lineHeight={1.8}>
                The SolSwap interface (the "Interface") is an open-source, decentralized frontend software portal that allows users to interact with the SolSwap protocol, a suite of permissionless smart contracts deployed on the Solana blockchain (the "Protocol"). 
                The Interface is provided as a convenience to the community and acts as one of several possible entry points to the Protocol.
              </Text>
            </section>

            <section>
              <Heading as="h2" size="md" color={colors.textPrimary} mb={3}>
                2. No Warranties
              </Heading>
              <Text lineHeight={1.8}>
                THIS INTERFACE AND THE PROTOCOL ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND. 
                We do not guarantee that the Interface will be secure, available, or free of bugs or viruses. No developer, entity, or contributor involved in creating or maintaining SolSwap shall be liable for any damages or losses associated with your use of the Interface or Protocol.
              </Text>
            </section>

            <section>
              <Heading as="h2" size="md" color={colors.textPrimary} mb={3}>
                3. Assumption of Risk
              </Heading>
              <Text lineHeight={1.8}>
                By using SolSwap, you acknowledge that blockchain technology and decentralized finance (DeFi) involve significant risks, including but not limited to: smart contract vulnerabilities, permanent loss of digital assets, extreme price volatility, and regulatory uncertainty. 
                You are solely responsible for your own digital assets and investment decisions.
              </Text>
            </section>

            <section>
              <Heading as="h2" size="md" color={colors.textPrimary} mb={3}>
                4. Compliance and Eligibility
              </Heading>
              <Text lineHeight={1.8}>
                SolSwap is a global, permissionless platform. Users are responsible for ensuring that their use of the Interface and Protocol complies with all applicable local, state, and federal laws and regulations in their respective jurisdictions. 
                By accessing this Interface, you represent and warrant that you are of legal age and have the capacity to enter into a binding agreement.
              </Text>
            </section>

            <section>
              <Heading as="h2" size="md" color={colors.textPrimary} mb={3}>
                5. Limitation of Liability
              </Heading>
              <Text lineHeight={1.8}>
                In no event shall the developers, contributors, or any associated entities be liable for any direct, indirect, incidental, special, or consequential damages (including loss of profits, data, or digital assets) arising out of or in connection with your use or inability to use the platform.
              </Text>
            </section>

            <Divider borderColor={colors.backgroundTransparent07} />

            <Text fontSize="sm" color={colors.textTertiary} fontStyle="italic" textAlign="center">
              SolSwap is a community-driven project. Exercise caution and do your own research before interacting with any smart contracts.
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export async function getStaticProps() {
  return {
    props: { title: 'Disclaimer | SolSwap' }
  }
}
