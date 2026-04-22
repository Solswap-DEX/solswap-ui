import React from 'react'
import { Box, Flex, Text, Spinner, VStack, useBreakpointValue } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
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
  const isDesktop = useBreakpointValue({ base: false, md: true })
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const tokenCount = tokens.length
  const rugCount = tokens.filter((t: any) => t.risk_level === 'RUG PROBABLE').length

  if (isLoading) {
    return (
      <VStack py={20} justify="center" bg="#080b0f" minH="100vh">
        <Spinner size="xl" color="#14f195" thickness="3px" />
        <Text color="#6e7681" fontFamily="monospace">INITIALIZING TERMINAL...</Text>
      </VStack>
    )
  }

  return (
    <Box 
      minH="100vh" 
      bg="var(--radar-bg)" 
      color="var(--radar-text)"
      fontFamily="var(--radar-mono)"
      sx={{
        '--radar-bg': '#080b0f',
        '--radar-surface': '#0d1117',
        '--radar-surface-2': '#111820',
        '--radar-border': 'rgba(255,255,255,0.06)',
        '--radar-border-accent': 'rgba(20,241,149,0.3)',
        '--radar-text': '#c9d1d9',
        '--radar-text-dim': '#6e7681',
        '--radar-text-bright': '#ffffff',
        '--radar-green': '#00ff88',
        '--radar-yellow': '#ffd700',
        '--radar-orange': '#ff9500',
        '--radar-red': '#ff3b5c',
        '--radar-purple': '#bf5af2',
        '--radar-blue': '#0d9ddb',
        '--radar-solana': '#14f195',
        '--radar-mono': "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
      }}
    >
      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes livePulse {
          0% { transform: scale(0.9); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(0.9); opacity: 0.8; }
        }
        .radar-bg-effects {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          pointer-events: none;
          z-index: 1;
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.01) 2px,
            rgba(255,255,255,0.01) 4px
          );
        }
        .listening-text::after {
          content: "|";
          animation: blink 1s infinite;
          margin-left: 4px;
          color: var(--radar-solana);
        }
      `}</style>
      
      <div className="radar-bg-effects" />
      
      <Box position="relative" zIndex={2} px={{ base: 4, md: 6 }} py={4}>
        <RadarWelcomeModal />
        
        {/* ── HEADER ── */}
        <Box 
          bg="var(--radar-surface)" 
          borderBottom="1px solid var(--radar-border-accent)" 
          p={4} 
          mb={4}
          borderRadius="4px"
        >
          <Flex justify="space-between" align="center" mb={2}>
            <Flex align="center" gap={3}>
              <Text
                fontSize="28px"
                fontWeight="800"
                color="white"
                letterSpacing="6px"
                lineHeight="1"
              >
                <Text as="span" color="var(--radar-solana)" mr={2}>◈</Text>
                RADAR
              </Text>
              
              {isConnected && (
                <Flex align="center" gap={2} ml={4}>
                  <Box 
                    w="8px" h="8px" borderRadius="full" bg="var(--radar-green)"
                    boxShadow="0 0 8px var(--radar-green)"
                    style={{ animation: 'livePulse 2s infinite' }}
                  />
                  <Text fontSize="11px" fontWeight="bold" color="var(--radar-green)" letterSpacing="1px">LIVE</Text>
                </Flex>
              )}
            </Flex>
            
            <Text fontSize="11px" color="var(--radar-text-dim)" fontFamily="monospace">
              {time.toLocaleTimeString()}
            </Text>
          </Flex>

          <Flex justify="space-between" align="center">
            <VStack align="flex-start" spacing={0}>
              <Text fontSize="12px" color="var(--radar-text-dim)">
                Tracking early momentum across Solana
              </Text>
              {isConnected && (
                <Text fontSize="11px" color="var(--radar-solana)" className="listening-text">
                  Listening to Helius nodes...
                </Text>
              )}
            </VStack>

            <Flex gap={4} align="center" fontSize="11px" color="var(--radar-text-dim)">
              <Text><Text as="span" color="white" fontWeight="bold">{tokenCount}</Text> tracked</Text>
              <Text>·</Text>
              <Text><Text as="span" color="var(--radar-red)" fontWeight="bold">{rugCount}</Text> rugs</Text>
              <Text>·</Text>
              <Text><Text as="span" color="white" fontWeight="bold">{alerts.length}</Text> alerts</Text>
              <Text>·</Text>
              <Text>updated just now</Text>
            </Flex>
          </Flex>
        </Box>

        {/* ── ALERTS (Fixed Toasts) ── */}
        <AlertFeed alerts={alerts} />

        {/* ── MAIN CONTENT ── */}
        {isDesktop ? (
          <TrenchesLayout tokens={tokens} alerts={[]} />
        ) : (
          <>
            {/* Mobile Tabs switcher */}
            <Flex bg="var(--radar-surface)" borderRadius="4px" p="2px" mb={4} border="1px solid var(--radar-border)">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.key
                return (
                  <Box
                    key={tab.key}
                    flex={1}
                    py={2}
                    textAlign="center"
                    cursor="pointer"
                    bg={isActive ? 'var(--radar-surface-2)' : 'transparent'}
                    color={isActive ? 'var(--radar-solana)' : 'var(--radar-text-dim)'}
                    fontSize="11px"
                    fontWeight="bold"
                    textTransform="uppercase"
                    letterSpacing="1px"
                    onClick={() => setActiveTab(tab.key)}
                  >
                    {tab.label}
                  </Box>
                )
              })}
            </Flex>
            <Box pb={24}>
              {activeTab === 'feed' && <LiveFeed tokens={tokens} isConnected={isConnected} alerts={[]} />}
              {activeTab === 'hot' && <HotBoard tokens={tokens} />}
            </Box>
          </>
        )}
      </Box>
    </Box>
  )
}