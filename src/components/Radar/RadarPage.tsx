import { Box, Flex, Text, Spinner, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { useRadarSocket } from './hooks/useRadarSocket'
import { LiveFeed } from './LiveFeed'
import { HotBoard } from './HotBoard'
import { AlertFeed } from './AlertFeed'
import { RadarWelcomeModal } from './RadarWelcomeModal'

type TabKey = 'feed' | 'hot' | 'alerts'

const TABS: { key: TabKey; label: string; icon: string }[] = [
  { key: 'feed', label: 'Feed', icon: '⚡' },
  { key: 'hot', label: 'Hot', icon: '🔥' },
  { key: 'alerts', label: 'Alerts', icon: '🔔' },
]

export function RadarPage() {
  const { tokens, alerts, isConnected, isLoading, isDemoMode } = useRadarSocket()
  const [activeTab, setActiveTab] = useState<TabKey>('feed')

  const tokenCount = tokens.length
  const rugCount = tokens.filter((t: any) => t.risk_level === 'RUG PROBABLE').length

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
      `}</style>

      {/* ── Header ── */}
      <Box px={4} pt={4} pb={2}>
        <Flex align="center" gap={3} wrap="wrap">
          <Text
            fontSize={{ base: '2xl', md: '4xl' }}
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
                  w={2}
                  h={2}
                  borderRadius="full"
                  bg={isDemoMode ? '#ffd600' : '#00c853'}
                  style={{ animation: 'livePulse 2s ease-in-out infinite' }}
                />
                <Text fontSize="xs" color={isDemoMode ? '#ffd600' : '#00c853'} fontWeight="bold">
                  {isDemoMode ? 'DEMO' : 'LIVE'}
                </Text>
              </Flex>

              {/* Terminal Hacker Legend */}
              {!isDemoMode && (
                <Box
                  fontFamily="'Courier New', monospace"
                  fontSize="xs"
                  color="rgba(0, 200, 83, 0.7)"
                  minW="245px"
                  whiteSpace="nowrap"
                  display={{ base: 'none', md: 'block' }}
                  sx={{
                    '@keyframes typewriter': {
                      '0%, 40%': { content: '"> Listening to Helius nodes..."' },
                      '50%, 90%': { content: '"> AI Alpha Engine Online."' },
                      '45%, 95%': { content: '"> "' }
                    },
                    '&::after': {
                      content: '"> Listening to Helius nodes..."',
                      animation: 'typewriter 8s infinite ease-in-out',
                      borderRight: '2px solid rgba(0, 200, 83, 0.7)',
                      paddingRight: '4px',
                    }
                  }}
                />
              )}
            </Flex>
          )}
        </Flex>
        <Text color="gray.600" fontSize="xs" mt={1}>
          {isDemoMode
            ? 'Preview mode — RADAR backend offline. Showing sample data.'
            : 'Real-time token intelligence for Solana'}
        </Text>

        {/* ── Stats Bar ── */}
        <Flex
          mt={3}
          gap={5}
          px={3}
          py={2}
          bg="rgba(255,255,255,0.025)"
          borderRadius="lg"
          border="1px solid rgba(255,255,255,0.04)"
        >
          <Flex align="center" gap={1.5}>
            <Text fontSize="sm" fontWeight="800" fontFamily="'Courier New', monospace" color="white">
              {tokenCount}
            </Text>
            <Text fontSize="10px" color="gray.600">tracked</Text>
          </Flex>
          <Flex align="center" gap={1.5}>
            <Text
              fontSize="sm"
              fontWeight="800"
              fontFamily="'Courier New', monospace"
              color={rugCount > 0 ? '#ff1744' : 'gray.500'}
            >
              {rugCount}
            </Text>
            <Text fontSize="10px" color="gray.600">rugs</Text>
          </Flex>
          <Flex align="center" gap={1.5}>
            <Text fontSize="sm" fontWeight="800" fontFamily="'Courier New', monospace" color="white">
              {alerts.length}
            </Text>
            <Text fontSize="10px" color="gray.600">alerts</Text>
          </Flex>
        </Flex>
      </Box>

      {/* ── Tab Switcher ── */}
      <Box
        px={4}
        pt={3}
        pb={1}
        position="sticky"
        top={0}
        zIndex={10}
        bg="#0a0a0a"
      >
        <Flex
          bg="rgba(255,255,255,0.04)"
          borderRadius="xl"
          p="3px"
          gap="2px"
        >
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
                bg={isActive ? 'rgba(0, 200, 83, 0.12)' : 'transparent'}
                border={isActive ? '1px solid rgba(0, 200, 83, 0.2)' : '1px solid transparent'}
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
                      as="span"
                      ml={1}
                      fontSize="10px"
                      bg="rgba(255,23,68,0.2)"
                      color="#ff1744"
                      px={1.5}
                      py={0.5}
                      borderRadius="full"
                      fontWeight="700"
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

      {/* ── Content ── */}
      <Box px={4} pt={3} pb={24}>
        {activeTab === 'feed' && (
          <LiveFeed tokens={tokens} isConnected={isConnected} alerts={alerts} />
        )}
        {activeTab === 'hot' && (
          <HotBoard tokens={tokens} />
        )}
        {activeTab === 'alerts' && (
          <AlertFeed alerts={alerts} />
        )}
      </Box>
    </Box>
  )
}