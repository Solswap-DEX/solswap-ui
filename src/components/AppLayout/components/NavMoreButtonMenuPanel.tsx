import GithubMediaIcon from '@/icons/media/GithubMediaIcon'
import InstagramMediaIcon from '@/icons/media/InstagramMediaIcon'
import TelegrameMediaIcon from '@/icons/media/TelegrameMediaIcon'
import TwitterMediaIcon from '@/icons/media/TwitterMediaIcon'
import ExternalLink from '@/icons/misc/ExternalLink'
import DocThumbnailIcon from '@/icons/pageNavigation/DocThumbnailIcon'
import FeedbackThumbnailIcon from '@/icons/pageNavigation/FeedbackThumbnailIcon'

import BridgePageThumbnailIcon from '@/icons/pageNavigation/BridgePageThumbnailIcon'
import DisclaimerThumbnailIcon from '@/icons/pageNavigation/DisclaimerThumbnailIcon'
// import PortfolioPageThumbnailIcon from '@/icons/pageNavigation/PortfolioPageThumbnailIcon'
import { colors } from '@/theme/cssVariables'
import { Box, Flex, HStack, MenuDivider, MenuItem, MenuList, Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

import { useTranslation } from 'react-i18next'

export function NavMoreButtonMenuPanel() {
  const { t } = useTranslation()
  return (
    <MenuList>
      <Box py={3}>
        {/* <MenuItem>
          <Link as={NextLink} _hover={{ textDecoration: 'none' }} w="full" href="/portfolio">
            <HStack>
              <PortfolioPageThumbnailIcon color={colors.textLink} />
              <Text>{t('portfolio.title')}</Text>
            </HStack>
          </Link>
        </MenuItem> */}

        <MenuItem>
          <Link as={NextLink} _hover={{ textDecoration: 'none' }} w="full" href="/bridge">
            <HStack>
              <BridgePageThumbnailIcon />
              <Text>{t('bridge.title')}</Text>
            </HStack>
          </Link>
        </MenuItem>
        <MenuDivider />
        <MenuItem>
          <Link as={NextLink} href="/docs/disclaimer" _hover={{ textDecoration: 'none' }} w="full" isExternal>
            <HStack>
              <DisclaimerThumbnailIcon />
              <Text>{t('disclaimer.title')}</Text>
              <ExternalLink color={colors.textSecondary} />
            </HStack>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link as={NextLink} href="https://docs.solswap.cloud/raydium/" _hover={{ textDecoration: 'none' }} w="full" isExternal>
            <HStack>
              <DocThumbnailIcon />
              <Text>{t('common.nav_text_docs')}</Text>
              <ExternalLink color={colors.textSecondary} />
            </HStack>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link as={NextLink} href="https://tally.so/r/n9WZZV" _hover={{ textDecoration: 'none' }} w="full" isExternal>
            <HStack>
              <FeedbackThumbnailIcon />
              <Text>{t('common.nav_text_feedback')}</Text>
              <ExternalLink color={colors.textSecondary} />
            </HStack>
          </Link>
        </MenuItem>
      </Box>
      <Flex mb={-1} mt={1} py={2} justifyContent={'space-around'} color={colors.textSecondary} bg={colors.backgroundTransparent07}>
        <Link as={NextLink} href="https://x.com/SolswapDEX" isExternal>
          <TwitterMediaIcon />
        </Link>
        <Link as={NextLink} href="https://t.me/Solswap_Pro" isExternal>
          <TelegrameMediaIcon />
        </Link>
        <Link as={NextLink} href="https://github.com/Solswap-DEX" isExternal>
          <GithubMediaIcon />
        </Link>
        <Link as={NextLink} href="https://www.instagram.com/solswap_dex" isExternal>
          <InstagramMediaIcon />
        </Link>
      </Flex>
    </MenuList>
  )
}
