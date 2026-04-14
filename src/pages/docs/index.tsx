import { Box, Container, VStack, HStack, Text, Heading, Button, Icon, Flex, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { colors } from '@/theme/cssVariables'
import DocThumbnailIcon from '@/icons/pageNavigation/DocThumbnailIcon'
import TwitterMediaIcon from '@/icons/media/TwitterMediaIcon'
import TelegrameMediaIcon from '@/icons/media/TelegrameMediaIcon'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

export default function DocsUnderConstruction() {
  const { t } = useTranslation()
  const glowColor = colors.primary

  return (
    <Box 
      minH="100vh" 
      display="flex" 
      alignItems="center" 
      justifyContent="center" 
      bg={colors.backgroundDark}
      position="relative"
      overflow="hidden"
    >
      {/* Background Decorative Elements */}
      <Box 
        position="absolute" 
        top="-10%" 
        left="-10%" 
        w="40%" 
        h="40%" 
        bgGradient={`radial(${glowColor}22 0%, transparent 70%)`}
        filter="blur(80px)"
        zIndex={0}
      />
      <Box 
        position="absolute" 
        bottom="-10%" 
        right="-10%" 
        w="40%" 
        h="40%" 
        bgGradient={`radial(${colors.secondary}22 0%, transparent 70%)`}
        filter="blur(80px)"
        zIndex={0}
      />

      <Container maxW="container.md" zIndex={1}>
        <MotionVStack
          spacing={8}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Card */}
          <Box
            w="full"
            p={[8, 12]}
            bg={colors.backgroundTransparent07}
            backdropFilter="blur(20px)"
            borderRadius="3xl"
            border="1px solid"
            borderColor={colors.backgroundTransparent10}
            textAlign="center"
            position="relative"
            overflow="hidden"
          >
            {/* Pulsing Icon */}
            <MotionBox
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatType: "reverse",
                ease: "easeInOut" 
              }}
              mb={6}
              display="inline-block"
            >
              <Box 
                p={5} 
                bg={colors.backgroundTransparent07} 
                borderRadius="2xl"
                boxShadow={`0 0 30px ${glowColor}33`}
              >
                <Icon as={DocThumbnailIcon} w={12} h={12} color={colors.primary} />
              </Box>
            </MotionBox>

            <Heading 
              as="h1" 
              size="2xl" 
              mb={4} 
              bgGradient={colors.brandGradient} 
              bgClip="text"
              fontWeight="extrabold"
            >
              {t('docs.coming_soon')}
            </Heading>
            
            <Text 
              fontSize="xl" 
              color={colors.textPrimary} 
              fontWeight="medium"
              mb={2}
            >
              {t('docs.title')}
            </Text>

            <Text 
              fontSize="md" 
              color={colors.textQuaternary} 
              maxW="400px" 
              mx="auto" 
              lineHeight="tall"
              mb={8}
            >
              {t('docs.under_construction_sub')}
              <br />
              {t('docs.stay_tuned')}
            </Text>

            <VStack spacing={6}>
              <Link href="/swap" passHref>
                <Button
                  as="a"
                  size="lg"
                  variant="solid"
                  bg={colors.solidButtonBg}
                  color={colors.buttonSolidText}
                  px={10}
                  borderRadius="xl"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: `0 8px 20px ${glowColor}44`,
                    opacity: 0.9
                  }}
                  transition="all 0.3s"
                >
                  {t('docs.back_to_app')}
                </Button>
              </Link>

              <HStack spacing={6} pt={4}>
                <Link href="https://x.com/SolswapDEX" isExternal>
                  <Box 
                    color={colors.textQuaternary} 
                    _hover={{ color: colors.primary, transform: 'scale(1.1)' }} 
                    transition="all 0.2s"
                  >
                    <TwitterMediaIcon width={28} height={28} />
                  </Box>
                </Link>
                <Link href="https://t.me/Solswap_Pro" isExternal>
                  <Box 
                    color={colors.textQuaternary} 
                    _hover={{ color: colors.primary, transform: 'scale(1.1)' }} 
                    transition="all 0.2s"
                  >
                    <TelegrameMediaIcon width={28} height={28} />
                  </Box>
                </Link>
              </HStack>
            </VStack>
          </Box>

          <Text fontSize="sm" color={colors.textSenary}>
            ArtLogic Labs &copy; {new Date().getFullYear()}
          </Text>
        </MotionVStack>
      </Container>
    </Box>
  )
}

export async function getStaticProps() {
  return {
    props: { title: 'Docs | Coming Soon' }
  }
}
