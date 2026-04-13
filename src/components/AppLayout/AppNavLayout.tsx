import { useDisclosure } from '@/hooks/useDelayDisclosure'
import SolSwapLogo from '@/icons/SolSwapLogo'
import SolSwapLogoOutline from '@/icons/SolSwapLogoOutline'
import ChevronDownIcon from '@/icons/misc/ChevronDownIcon'
import Gear from '@/icons/misc/Gear'
import { useAppStore } from '@/store'
import { colors } from '@/theme/cssVariables'
import { appLayoutPaddingX } from '@/theme/detailConfig'
import {
  Box,
  Flex,
  HStack,
  VStack,
  Menu,
  MenuButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  SystemStyleObject
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ReactNode, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Desktop, Mobile } from '../MobileDesktop'
import SolWallet from '../SolWallet'
import { MobileBottomNavbar } from './MobileBottomNavbar'
import { ColorThemeSettingField } from './components/ColorThemeSettingField'
import { DefaultExplorerSettingField } from './components/DefaultExplorerSettingField'
import { LanguageSettingField } from './components/LanguageSettingField'
import { NavMoreButtonMenuPanel } from './components/NavMoreButtonMenuPanel'
import { RPCConnectionSettingField } from './components/RPCConnectionSettingField'
import { Divider } from './components/SettingFieldDivider'
import { SlippageToleranceSettingField } from './components/SlippageToleranceSettingField'
import { VersionedTransactionSettingField } from './components/VersionedTransactionSettingField'
import { PriorityButton } from './components/PriorityButton'
import DisclaimerModal from './components/DisclaimerModal'
import AppVersion from './AppVersion'
import TagNewIcon from '@/icons/misc/TagNewIcon'
import { useReferrerQuery } from '@/features/Launchpad/utils'
import { TorqueButton } from '@/features/Torque'

export interface NavSettings {
  // colorTheme: 'dark' | 'light'
}

function AppNavLayout({
  children,
  overflowHidden
}: {
  children: ReactNode
  /** use screen height */
  overflowHidden?: boolean
}) {
  const { t } = useTranslation()
  const { pathname } = useRouter()
  const queryReferrer = useReferrerQuery('?')

  return (
    <Flex direction="column" id="app-layout" height="full" overflow={overflowHidden ? 'hidden' : 'auto'}>
      <HStack
        className="navbar"
        flex="none"
        height={['64px', '80px']}
        px={['12px', '12px', '12px']}
        gap={['4px', 0, 0, '20px']}
        alignItems="center"
        justifyContent="space-between"
        overflow="visible"
      >
        {/* logo */}
        <Desktop>
          <Box flex={'none'}>
            <Link href="/swap">
              <SolSwapLogo />
            </Link>
          </Box>
        </Desktop>
        <Mobile>
          <HStack flex={1} minW={0} overflow="hidden">
            <SolSwapLogoOutline />
            <Text 
              fontSize="xl" 
              fontWeight="medium" 
              color={colors.textSecondary} 
              isTruncated
              noOfLines={1}
            >
              {pathname === '/swap'
                ? t('swap.title')
                : pathname === '/liquidity-pools'
                ? t('liquidity.title')
                : pathname === '/portfolio'
                ? t('portfolio.title')
                : pathname === '/playground'
                ? t('common.playground')
                : pathname === '/bridge'
                ? t('bridge.title')
                : pathname.includes('/docs/disclaimer')
                ? t('disclaimer.title')
                : ''}
            </Text>
          </HStack>
        </Mobile>

        {/* nav routes */}
        <Desktop>
          <HStack flexGrow={1} flexShrink={1} justify="start" overflow={['auto', 'visible']} gap={0}>
            <RouteLink href="/swap" isActive={pathname === '/swap'} title={t('swap.title')} />
            <RouteLink href="/liquidity-pools" isActive={pathname.includes('/liquidity')} title={t('liquidity.title')} />
            <RouteLink
              href="/launchpad"
              isActive={pathname.startsWith('/launchpad')}
              title={t('launchpad.title')}
              slotAfter={
                <Box
                  as="span"
                  ml={1}
                  sx={{
                    '@keyframes blink': {
                      '0%, 100%': { opacity: 1 },
                      '50%': { opacity: 0.5 }
                    },
                    animation: 'blink 1.5s ease-in-out infinite'
                  }}
                >
                  <TagNewIcon />
                </Box>
              }
            />
            <RouteLink href="/portfolio" isActive={pathname === '/portfolio'} title={t('portfolio.title')} />
            <RouteLink href="https://perps.solswap.cloud" isActive={false} title={t('perpetuals.title')} />

            <Menu size="lg">
              <MenuButton fontSize={'sm'} px={1.5} py={1.5}>
                <Flex
                  align="center"
                  gap={0.5}
                  color={pathname === '/bridge' ? colors.textSecondary : colors.textTertiary}
                >
                  {pathname === '/bridge' ? t('bridge.title') : t('common.more')}
                  <ChevronDownIcon width={16} height={16} />
                </Flex>
              </MenuButton>
              <NavMoreButtonMenuPanel />
            </Menu>
          </HStack>
        </Desktop>

        {/* wallet and settings button */}
        {!pathname.startsWith('/docs') && (
          <Flex gap={[0.5, 1]} align="center" flexShrink={0}>
            <Desktop>
              <TorqueButton />
            </Desktop>
            <PriorityButton />
            <SettingsMenu />
            {/* <EVMWallet />  don't need currently yet*/}
            <SolWallet />
          </Flex>
        )}
      </HStack>

      <Box
        px={appLayoutPaddingX}
        pt={[0, 4]}
        flex={1}
        overflow={overflowHidden ? 'hidden' : 'auto'}
        display="flex"
        flexDirection="column"
        justifyItems={'flex-start'}
        sx={{
          scrollbarGutter: 'stable',
          contain: 'size',
          '& > *': {
            // for flex-col container
            flex: 'none'
          }
        }}
      >
        {children}
        <Box as="footer" py={6} mt="auto" textAlign="center" borderTop={`1px solid ${colors.backgroundTransparent07}`}>
          <VStack spacing={2}>
            <HStack spacing={4} justify="center">
              <Link href="/docs/disclaimer">
                <Text fontSize="xs" color={colors.textTertiary} _hover={{ color: colors.textSecondary, textDecoration: 'underline' }}>
                  Disclaimer
                </Text>
              </Link>
              <Text fontSize="xs" color={colors.textTertiary}>|</Text>
              <Text fontSize="xs" color={colors.textTertiary}>
                Jose Reyes Dev | ArtLogic Labs
              </Text>
            </HStack>
            <Text fontSize="x-small" color={colors.textQuaternary}>
              SolSwap is an independent fork of the Raydium Protocol V3
            </Text>
          </VStack>
        </Box>
      </Box>
      <DisclaimerModal />
      <Mobile>
        <Box className="mobile_bottom_navbar" flex="none">
          <MobileBottomNavbar />
        </Box>
      </Mobile>
    </Flex>
  )
}

function RouteLink({
  href,
  isActive,
  title,
  external = false,
  sx,
  slotAfter
}: {
  href: string
  isActive: boolean
  title: string | React.ReactNode
  external?: boolean
  sx?: SystemStyleObject
  slotAfter?: ReactNode
}) {
  return (
    <Link
      href={href}
      shallow
      {...(external
        ? {
            target: '_blank',
            rel: 'noopener noreferrer'
          }
        : {})}
    >
      <Flex
        textColor={isActive ? colors.textSecondary : colors.textTertiary}
        fontSize={['xs', 'xs', 'sm']}
        px={1.5}
        py={1.5}
        rounded="xl"
        transition="200ms"
        whiteSpace="nowrap"
        _hover={{ bg: colors.backgroundLight, color: colors.textSecondary }}
        alignItems="center"
        sx={sx}
      >
        {title}
        {slotAfter}
      </Flex>
    </Link>
  )
}

function SettingsMenu() {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const triggerRef = useRef<HTMLDivElement>(null)
  return (
    <>
      <Box
        w={10}
        h={10}
        p="0"
        onClick={() => onOpen()}
        _hover={{ bg: colors.backgroundLight }}
        rounded="full"
        display="grid"
        placeContent="center"
        cursor="pointer"
        ref={triggerRef}
      >
        <Gear />
      </Box>
      <SettingsMenuModalContent isOpen={isOpen} onClose={onClose} triggerRef={triggerRef} />
    </>
  )
}

function SettingsMenuModalContent(props: { isOpen: boolean; triggerRef: React.RefObject<HTMLDivElement>; onClose: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()
  const triggerPanelGap = 8
  const isMobile = useAppStore((s) => s.isMobile)
  const getTriggerRect = () => props.triggerRef.current?.getBoundingClientRect()

  return (
    <Modal size={'lg'} isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent
        css={{
          transform: (() => {
            const triggerRect = getTriggerRect()
            return (
              triggerRect
                ? `translate(${isMobile ? 0 : -(window.innerWidth - triggerRect.right)}px, ${
                    triggerRect.bottom + triggerPanelGap
                  }px) !important`
                : undefined
            ) as string | undefined
          })()
        }}
        ref={contentRef}
        marginTop={0}
        marginRight={['auto', 0]}
      >
        <ModalHeader>{t('setting_board.panel_title')}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <SlippageToleranceSettingField />
          <Divider />
          <SlippageToleranceSettingField variant="liquidity" />
          <Divider />
          <VersionedTransactionSettingField />
          <Divider />
          <DefaultExplorerSettingField />
          <Divider />
          <LanguageSettingField />
          <Divider />
          <ColorThemeSettingField />
          <Divider />
          <RPCConnectionSettingField />
          <Divider />
          <AppVersion />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AppNavLayout
