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
          <Link as={NextLink} href="/docs/disclaimer/" _hover={{ textDecoration: 'none' }} w="full" isExternal>
            <HStack>
              <DisclaimerThumbnailIcon />
              <Text>{t('disclaimer.title')}</Text>
              <ExternalLink color={colors.textSecondary} />
            </HStack>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link as={NextLink} href="/docs" _hover={{ textDecoration: 'none' }} w="full">
            <HStack>
              <DocThumbnailIcon />
              <Text>{t('common.nav_text_docs')}</Text>
              <ExternalLink color={colors.textSecondary} />
            </HStack>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link as={NextLink} href="https://tally.so/r/5Bvg7E" _hover={{ textDecoration: 'none' }} w="full" isExternal>
            <HStack>
              <FeedbackThumbnailIcon />
              <Text>{t('common.nav_text_feedback')}</Text>
              <ExternalLink color={colors.textSecondary} />
            </HStack>
          </Link>
        </MenuItem>
      </Box>
      <Flex mb={-1} mt={1} py={2} justifyContent={'space-evenly'} alignItems="center" color={colors.textSecondary} bg={colors.backgroundTransparent07}>
        <Link as={NextLink} href="https://x.com/SolswapDEX" isExternal>
          <TwitterMediaIcon width={36} height={36} />
        </Link>
        <Link as={NextLink} href="https://t.me/Solswap_Pro" isExternal>
          <TelegrameMediaIcon width={36} height={36} />
        </Link>
        <Link as={NextLink} href="https://github.com/Solswap-DEX" isExternal>
          <GithubMediaIcon width={24} height={24} />
        </Link>
        <Link as={NextLink} href="https://www.instagram.com/solswap_dex" isExternal>
          <InstagramMediaIcon width={24} height={24} />
        </Link>
      </Flex>
    </MenuList>
  )
}
