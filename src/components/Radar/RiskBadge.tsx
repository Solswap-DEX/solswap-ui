import { Box, keyframes } from '@chakra-ui/react'
import { RiskLevel } from './radar.types'

const colors: Record<RiskLevel, { bg: string; text: string; border: string }> = {
  LOW: { bg: '#0a2a1a', text: '#00c853', border: '#00c853' },
  MEDIUM: { bg: '#2a1f00', text: '#ffd600', border: '#ffd600' },
  HIGH: { bg: '#2a0a00', text: '#ff6d00', border: '#ff6d00' },
  'RUG PROBABLE': { bg: '#2a0000', text: '#ff1744', border: '#ff1744' }
}

const rugPulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`

export function RiskBadge({ level }: { level: RiskLevel }) {
  const style = colors[level]
  const isRug = level === 'RUG PROBABLE'

  return (
    <Box
      display="inline-block"
      px={2}
      py={0.5}
      rounded="md"
      bg={style.bg}
      color={style.text}
      border={`1px solid ${style.border}`}
      fontSize="xs"
      fontWeight="bold"
      fontFamily="'Courier New', monospace"
      animation={isRug ? `${rugPulse} 1s ease-in-out infinite` : undefined}
    >
      {level}
    </Box>
  )
}