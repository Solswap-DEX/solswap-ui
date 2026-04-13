import { Box, Center, Flex, Text, Link } from '@chakra-ui/react'
import FooterItem from './components/FooterItem'
import FooterTitle from './components/FooterTitle'
import Discord from './images/Discord'
import Twitter from './images/Twitter'
import Logo from './images/SecondaryLogo'

export default function Footer() {
  const footerList = [
    {
      title: 'ABOUT',
      items: [
        <FooterItem key="footer-about-01">Meet SolSwap</FooterItem>,
        <FooterItem key="footer-about-02">Media Assets</FooterItem>
      ]
    },
    {
      title: 'DEVELOPMENT',
      items: [
        <FooterItem key="footer-protocol-01">
          <Link href="https://github.com/solswap-protocol" isExternal>GitHub Repository</Link>
        </FooterItem>,
        <FooterItem key="footer-protocol-02">API Documentation</FooterItem>
      ]
    },
    {
      title: 'COMMUNITY',
      items: [
        <FooterItem key="footer-community-01">
          <Link href="https://twitter.com/SolSwapProtocol" isExternal>
            <Flex gap="15px" align="center">
              <Twitter /> <Text>Twitter / X</Text>
            </Flex>
          </Link>
        </FooterItem>,
        <FooterItem key="footer-community-02">
          <Flex gap="15px" align="center">
            <Discord /> <Text>Discord</Text>
          </Flex>
        </FooterItem>
      ]
    }
  ]

  return (
    <Box
      mt={124}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}
      pt="100px"
      pb="50px"
      bg="var(--background-dark)"
      borderTop="1px solid var(--primary)"
    >
      <Center px={[8, 0]}>
        <Box style={{ position: 'relative', zIndex: 2 }}>
          <Flex justify={['center', 'space-between']} flexWrap="wrap" style={{ position: 'relative', zIndex: 2 }} gap="93px">
            {footerList.map((foot, idx) => {
              return (
                <Flex key={`foot-categary-${idx}`} direction="column" w="fit-content">
                  <FooterTitle title={foot.title} />
                  <Flex direction="column" gap="26px" mt="21.8px">
                    {foot.items.map((item) => item)}
                  </Flex>
                </Flex>
              )
            })}
          </Flex>

          <Box mt={16} textAlign="center" color="var(--text-tertiary)" maxW="800px" mx="auto">
             <Text mb={4}>
               <strong>SolSwap</strong> is an independent decentralized exchange on Solana, developed and maintained by <strong>ArtLogic Labs</strong>.
             </Text>
             <Text fontSize="sm">
               © {new Date().getFullYear()} ArtLogic Labs. All rights reserved. SolSwap is open-source software licensed under Apache 2.0.
             </Text>
          </Box>
        </Box>
      </Center>
      <Logo style={{ position: 'relative', zIndex: 2, margin: '80px auto 40px auto' }} />
    </Box>
  )
}
