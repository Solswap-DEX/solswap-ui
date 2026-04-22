import { Box, Flex, Text, Spinner, VStack, useBreakpointValue } from '@chakra-ui/react'
import { useState } from 'react'
import { useRadarSocket } from './hooks/useRadarSocket'
import { TrenchesLayout } from './TrenchesLayout'
import { LiveFeed } from './LiveFeed'
import { HotBoard } from './HotBoard'
import { AlertFeed } from './AlertFeed'
import { RadarWelcomeModal } from './RadarWelcomeModal'

type TabKey = 'feed' | 'hot' | 'alerts'

const TABS: { key: TabKey; label: string; icon: string }[] = [
  { key: 'feed', label: 'Fresh', icon: '🆕' },
  { key: 'hot', label: 'Hot', icon: '🔥' },
  { key: 'alerts', label: 'Alerts', icon: '🔔' },
]

export function RadarPage() {
  const { tokens, alerts, isConnected, isLoading, isDemoMode } = useRadarSocket()
  const [activeTab, setActiveTab] = useState<TabKey>('feed')
  const isDesktop = useBreakpointValue({ base: false, lg: true })

  const tokenCount = tokens.length
  const rugCount = tokens.filter((t: any) => t.risk_level === 'RUG PROBABLE').length
  const graduatingCount = tokens.filter((t: any) => t.is_pumpfun && !t.is_graduated && (t.bonding_curve_pct ?? 0) >= 80).length

  if (isLoading) {
    return (
      <VStack py={20} justify="center">
        <Spinner size="xl" color="green.400" />
        <Text color="gray.500">Loading RADAR...</Text>
      </VStack>
    )
  }

  return (
    <Box minH="100vh" bg="#0a0a0a">
      <RadarWelcomeModal />
      <style>{`
        @keyframes livePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.6; }
        }
        @keyframes bcPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>

      {/* ── Header ── */}
      <Box px={4} pt={4} pb={2}>
        <Flex align="center" gap={3} justify="space-between" wrap="wrap">
          <Flex align="center" gap={3}>
            <Text
              fontSize={{ base: '2xl', md: '3xl' }}
              fontFamily="'Courier New', monospace"
              fontWeight="bold"
              color="white"
              letterSpacing="widest"
            >
              RADAR
            </Text>
            {isConnected && (
              <Flex align="center" gap={3}>
                <Flex align="center" gap={1}>
                  <Box
                    w={2} h={2} borderRadius="full"
                    bg={isDemoMode ? '#ffd600' : '#00c853'}
                    style={{ animation: 'livePulse 2s ease-in-out infinite' }}
                  />
                  <Text fontSize="xs" color={isDemoMode ? '#ffd600' : '#00c853'} fontWeight="bold">
                    {isDemoMode ? 'DEMO' : 'LIVE'}
                  </Text>
                </Flex>
                {!isDemoMode && (
                  <Box
                    fontFamily="'Courier New', monospace"
                    fontSize="xs"
                    color="rgba(0,200,83,0.7)"
                    display={{ base: 'none', md: 'block' }}
                    sx={{
                      '&::after': {
                        content: '"> Listening to Helius nodes..."',
                        borderRight: '2px solid rgba(0,200,83,0.7)',
                        paddingRight: '4px',
                      }
                    }}
                  />
                )}
              </Flex>
            )}
          </Flex>

          {/* Stats bar */}
          <Flex gap={4} align="center">
            <Flex align="center" gap={1.5}>
              <Text fontSize="sm" fontWeight="800" fontFamily="'Courier New', monospace" color="white">{tokenCount}</Text>
              <Text fontSize="10px" color="gray.600">tracked</Text>
            </Flex>
            {graduatingCount > 0 && (
              <Flex align="center" gap={1.5}>
                <Text fontSize="sm" fontWeight="800" fontFamily="'Courier New', monospace" color="#00e676">{graduatingCount}</Text>
                <Text fontSize="10px" color="gray.600">🚀 graduating</Text>
              </Flex>
            )}
            <Flex align="center" gap={1.5}>
              <Text fontSize="sm" fontWeight="800" fontFamily="'Courier New', monospace" color={rugCount > 0 ? '#ff1744' : 'gray.500'}>
                {rugCount}
              </Text>
              <Text fontSize="10px" color="gray.600">rugs</Text>
            </Flex>
            <Flex align="center" gap={1.5}>
              <Text fontSize="sm" fontWeight="800" fontFamily="'Courier New', monospace" color="white">{alerts.length}</Text>
              <Text fontSize="10px" color="gray.600">alerts</Text>
            </Flex>
          </Flex>
        </Flex>

        <Text color="gray.600" fontSize="xs" mt={1}>
          {isDemoMode
            ? 'Preview mode — RADAR backend offline. Showing sample data.'
            : 'Real-time token intelligence · Fresh / Building / Hot'}
        </Text>
      </Box>

      {/* ── Desktop: 3-column Trenches layout ── */}
      {isDesktop ? (
        <Box px={4} pb={6}>
          <TrenchesLayout tokens={tokens} alerts={alerts} />
        </Box>
      ) : (
        <>
          {/* ── Mobile: Tab Switcher ── */}
          <Box px={4} pt={3} pb={1} position="sticky" top={0} zIndex={10} bg="#0a0a0a">
            <Flex bg="rgba(255,255,255,0.04)" borderRadius="xl" p="3px" gap="2px">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.key
                return (
                  <Box
                    key={tab.key}
                    flex={1}
                    py={2}
                    textAlign="center"
                    borderRadius="lg"
                    cursor="pointer"
                    transition="all 0.2s ease"
                    bg={isActive ? 'rgba(0,200,83,0.12)' : 'transparent'}
                    border={isActive ? '1px solid rgba(0,200,83,0.2)' : '1px solid transparent'}
                    onClick={() => setActiveTab(tab.key)}
                    _hover={!isActive ? { bg: 'rgba(255,255,255,0.04)' } : undefined}
                  >
                    <Text
                      fontSize="sm"
                      fontWeight={isActive ? '700' : '500'}
                      color={isActive ? '#00c853' : 'gray.500'}
                    >
                      {tab.icon} {tab.label}
                      {tab.key === 'alerts' && alerts.length > 0 && (
                        <Text
                          as="span" ml={1} fontSize="10px"
                          bg="rgba(255,23,68,0.2)" color="#ff1744"
                          px={1.5} py={0.5} borderRadius="full" fontWeight="700"
                        >
                          {alerts.length}
                        </Text>
                      )}
                    </Text>
                  </Box>
                )
              })}
            </Flex>
          </Box>

          {/* ── Mobile: Content ── */}
          <Box px={4} pt={3} pb={24}>
            {activeTab === 'feed' && <LiveFeed tokens={tokens} isConnected={isConnected} alerts={alerts} />}
            {activeTab === 'hot' && <HotBoard tokens={tokens} />}
            {activeTab === 'alerts' && <AlertFeed alerts={alerts} />}
          </Box>
        </>
      )}
    </Box>
  )
}