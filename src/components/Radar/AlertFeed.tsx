import React, { useEffect, useState } from 'react'
import { Box, Text, VStack, Flex } from '@chakra-ui/react'
import { RadarAlert } from './radar.types'

export function AlertFeed({ alerts }: { alerts: RadarAlert[] }) {
  const [visibleAlerts, setVisibleAlerts] = useState<RadarAlert[]>([])

  useEffect(() => {
    setVisibleAlerts(alerts.slice(0, 5))
  }, [alerts])

  if (visibleAlerts.length === 0) return null

  return (
    <Box
      position="fixed"
      top="80px"
      right="16px"
      width="280px"
      zIndex={1000}
      pointerEvents="none"
    >
      <VStack spacing={2} align="stretch">
        {visibleAlerts.map((alert, idx) => (
          <AlertToast key={alert.mint + idx} alert={alert} />
        ))}
      </VStack>
    </Box>
  )
}

function AlertToast({ alert }: { alert: RadarAlert }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 8000)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  const severityColor = 
    alert.severity === 'CRITICAL' ? 'var(--radar-red)' :
    alert.severity === 'WARNING' ? 'var(--radar-yellow)' : 'var(--radar-blue)'

  return (
    <Box
      bg="var(--radar-surface)"
      borderLeft={`3px solid ${severityColor}`}
      p="8px 12px"
      borderRadius="0 4px 4px 0"
      boxShadow="0 4px 12px rgba(0,0,0,0.5)"
      pointerEvents="auto"
      style={{
        transition: 'all 0.4s ease',
        animation: 'slideIn 0.3s ease-out'
      }}
    >
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
      <Flex direction="column" gap={1}>
        <Flex justify="space-between" align="center">
          <Text 
            fontSize="9px" 
            fontWeight="bold" 
            color={severityColor} 
            fontFamily="var(--radar-mono)"
            textTransform="uppercase"
          >
            {alert.type.replace('_', ' ')}
          </Text>
          <Text fontSize="8px" color="var(--radar-text-dim)">
            {new Date(alert.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </Text>
        </Flex>
        <Text fontSize="11px" color="white" fontFamily="var(--radar-mono)" lineHeight="1.3">
          {alert.message}
        </Text>
      </Flex>
    </Box>
  )
}