import React, { useState, useEffect } from 'react'
import { useConnection } from '@solana/wallet-adapter-react'
import { Box, Flex, HStack, Text, keyframes } from '@chakra-ui/react'
import { useAppStore } from '@/store'
import Link from 'next/link'
import { colors } from '@/theme/cssVariables'

const pingAnimation = keyframes`
  0% { transform: scale(1); opacity: 1; }
  75%, 100% { transform: scale(2); opacity: 0; }
`

export function NetworkStatusBar() {
  const { connection } = useConnection()
  const rpcNodeUrl = useAppStore((s) => s.rpcNodeUrl)

  const [isOnline, setIsOnline] = useState(true)
  const [latency, setLatency] = useState<number | null>(null)
  const [slot, setSlot] = useState<number | null>(null)
  const [utcTime, setUtcTime] = useState<string>('')

  // The actual URL used for the ping (defaulting to Helius Mainnet if missing)
  const rpcUrl = rpcNodeUrl || 'https://mainnet.helius-rpc.com/?api-key=d526019a-9e67-4638-9273-0490b4bfdb8a'

  // Determine provider name for display
  const providerName = rpcUrl.includes('helius')
    ? 'Helius'
    : rpcUrl.includes('alchemy')
    ? 'Alchemy'
    : rpcUrl.includes('quicknode')
    ? 'QuickNode'
    : rpcUrl.includes('solana')
    ? 'Solana Mainnet'
    : 'Custom RPC'

  useEffect(() => {
    // Basic online/offline browser status
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // Initial check
    setIsOnline(navigator.onLine)

    // UTC Clock
    const updateTime = () => {
      const now = new Date()
      setUtcTime(now.toISOString().substring(11, 19)) // HH:MM:SS
    }
    updateTime()
    const clockInt = setInterval(updateTime, 1000)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
      clearInterval(clockInt)
    }
  }, [])

  useEffect(() => {
    if (!connection) return
    // Poll slot via HTTP instead of WebSocket (WSS not available)
    const fetchSlot = () => {
      connection.getSlot().then(setSlot).catch(() => {})
    }
    fetchSlot()
    const slotInterval = setInterval(fetchSlot, 10000)
    return () => clearInterval(slotInterval)
  }, [connection])

  useEffect(() => {
    if (!isOnline) {
      setLatency(null)
      return
    }

    let intervalId: NodeJS.Timeout

    // Ping the RPC to get a rough latency estimate
    const pingRpc = async () => {
      const startTime = performance.now()
      try {
        // using our internal proxy if rpcUrl contains helius-rpc but we are pointing to it directly,
        // Wait, solswap uses /api/helius explicitly in the bridge, but useAppStore holds the full URLs.
        const response = await fetch(rpcUrl.startsWith('/') ? rpcUrl : (rpcUrl.includes('helius') ? '/api/helius' : rpcUrl), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            jsonrpc: '2.0',
            id: 1,
            method: 'getHealth'
          })
        })

        if (response.ok) {
          const endTime = performance.now()
          setLatency(Math.round(endTime - startTime))
        } else {
          setLatency(null)
        }
      } catch (error) {
        setLatency(null)
      }
    }

    pingRpc() // Initial ping
    intervalId = setInterval(pingRpc, 10000) // Update every 10 secs

    return () => clearInterval(intervalId)
  }, [isOnline, rpcUrl])

  // Latency color logic
  const latencyBaseColor = latency === null ? 'gray.700' : latency >= 500 ? 'red.500' : latency >= 250 ? 'yellow.500' : 'green.500'

  return (
    <Flex
      position="fixed" // Make it fixed to not depend on scroll
      bottom={0}
      left={0}
      width="full"
      bg="#111114"
      borderTop="1px solid rgba(255,255,255,0.05)"
      py={1.5}
      px={4}
      zIndex={50}
      alignItems="center"
      justifyContent="space-between"
      fontSize="xs"
      fontWeight="medium"
      color="gray.400"
      userSelect="none"
    >
      <HStack spacing={6}>
        {/* Status Indicator */}
        <HStack spacing={2}>
          <Box position="relative" display="flex" h="2.5px" w="2.5px">
            {isOnline ? (
              <>
                <Box
                  position="absolute"
                  display="inline-flex"
                  h="10px"
                  w="10px"
                  borderRadius="full"
                  bg="green.400"
                  opacity={0.75}
                  animation={`${pingAnimation} 1.5s cubic-bezier(0, 0, 0.2, 1) infinite`}
                  top="-3.75px"
                  left="-3.75px"
                />
                <Box position="relative" display="inline-flex" borderRadius="full" h="10px" w="10px" bg="green.500" top="-3.75px" left="-3.75px" />
              </>
            ) : (
              <Box position="relative" display="inline-flex" borderRadius="full" h="10px" w="10px" bg="red.500" top="-3.75px" left="-3.75px" />
            )}
          </Box>
          <Text color={isOnline ? 'green.500' : 'red.500'}>{isOnline ? 'Online' : 'Offline'}</Text>
        </HStack>

        {/* RPC Provider & Latency */}
        {isOnline && (
          <HStack spacing={2} borderLeft="1px solid rgba(255,255,255,0.1)" pl={6}>
            {/* Signal Bars Icon */}
            <Flex alignItems="flex-end" px="2px" h="14px" mr={1} gap="2px">
              <Box
                w="3px"
                borderRadius="sm"
                h="6px"
                bg={latency === null ? 'gray.700' : latency >= 500 ? 'red.500' : latency >= 250 ? 'yellow.500' : 'green.500'}
              />
              <Box
                w="3px"
                borderRadius="sm"
                h="10px"
                bg={latency === null || latency >= 500 ? 'gray.700' : latency >= 250 ? 'yellow.500' : 'green.500'}
              />
              <Box w="3px" borderRadius="sm" h="14px" bg={latency === null || latency >= 250 ? 'gray.700' : 'green.500'} />
            </Flex>
            <Text>
              RPC: <Text as="span" color="gray.300">{providerName}</Text>
            </Text>
            {latency !== null && (
              <Text color="gray.500" fontSize="10px" ml={1}>
                ({latency}ms)
              </Text>
            )}
          </HStack>
        )}

        {/* Slot Indicator */}
        {slot !== null && (
          <HStack spacing={2} borderLeft="1px solid rgba(255,255,255,0.1)" pl={6} cursor="default">
            <Box opacity={0.7} color="blue.400">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </Box>
            <Text>
              Slot: <Text as="span" color="gray.300" fontFamily="mono" letterSpacing="tight">{slot.toLocaleString()}</Text>
            </Text>
          </HStack>
        )}
      </HStack>

      {/* Right side Elements */}
      <HStack spacing={6}>
        {/* UTC Clock */}
        <Text color="gray.300" fontFamily="mono" letterSpacing="tight" cursor="default">
          {utcTime ? `${utcTime} (UTC)` : ''}
        </Text>

        {/* App Version */}
        <HStack spacing={2} borderLeft="1px solid rgba(255,255,255,0.1)" pl={6} color="gray.500" cursor="default" display={['none', 'flex']}>
          <Text>v1.0.0</Text>
          <Box w="4px" h="4px" borderRadius="full" bg="gray.500" />
          <Text>Mainnet-Beta</Text>
        </HStack>

        {/* Links / Disclaimer*/}
        <HStack spacing={3} borderLeft="1px solid rgba(255,255,255,0.1)" pl={6}>
            <Link href="/docs/disclaimer">
              <Text fontSize="xs" color="gray.500" _hover={{ color: 'white', textDecoration: 'underline' }}>
                 Disclaimer
              </Text>
            </Link>
            <Text fontSize="xs" color="gray.500">|</Text>
            <Text fontSize="xs" color="gray.500">
                ArtLogic Labs
            </Text>
        </HStack>

      </HStack>
    </Flex>
  )
}
