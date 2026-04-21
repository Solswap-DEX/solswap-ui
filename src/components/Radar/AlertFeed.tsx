import { Box, Flex, Text } from '@chakra-ui/react'
import { RadarAlert } from './radar.types'

function formatTimeAgo(date: Date): string {
  const now = new Date()
  const diff = Math.floor((now.getTime() - new Date(date).getTime()) / 1000)
  if (diff < 60) return 'just now'
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
  return `${Math.floor(diff / 3600)}h ago`
}

function getAlertIcon(type: string): string {
  switch (type) {
    case 'STOP_LOSS_TRIGGERED':
      return '⚠️'
    case 'VOLUME_SPIKE':
      return '📈'
    case 'RUG_SIGNAL':
      return '🚨'
    case 'ALPHA_SURGE':
      return '⚡'
    default:
      return '🔔'
  }
}

function getSeverityBg(severity: string): string {
  switch (severity) {
    case 'CRITICAL':
      return 'rgba(255,23,68,0.1)'
    case 'WARNING':
      return 'rgba(255,214,0,0.1)'
    case 'INFO':
      return 'rgba(0,200,83,0.1)'
    default:
      return 'rgba(255,255,255,0.05)'
  }
}

export function AlertFeed({ alerts }: { alerts: RadarAlert[] }) {
  return (
    <Box
      h="100%"
      bg="rgba(0,0,0,0.3)"
      borderRadius="lg"
      border="1px solid rgba(255,255,255,0.08)"
      p={3}
      overflow="auto"
    >
      <Flex align="center" gap={2} mb={3}>
        <Text fontWeight="bold" color="white" fontSize="sm">
          🔔 Alerts
        </Text>
        <Text color="gray.500" fontSize="xs">
          ({alerts.length})
        </Text>
      </Flex>

      {alerts.length === 0 ? (
        <Text color="gray.500" fontSize="sm">
          No alerts yet. RADAR is watching...
        </Text>
      ) : (
        <Box display="flex" flexDirection="column" gap={2}>
          {alerts.map((alert, idx) => (
            <Box
              key={idx}
              p={2}
              bg={getSeverityBg(alert.severity)}
              borderRadius="md"
              border="1px solid rgba(255,255,255,0.05)"
            >
              <Flex align="center" gap={2}>
                <Text fontSize="sm">{getAlertIcon(alert.type)}</Text>
                <Text fontSize="xs" color="white" flex={1}>
                  {alert.message}
                </Text>
              </Flex>
              <Text fontSize="xs" color="gray.500" mt={1}>
                {formatTimeAgo(alert.timestamp)}
              </Text>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}