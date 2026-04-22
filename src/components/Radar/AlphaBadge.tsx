import { Box } from '@chakra-ui/react'
import { AlphaLabel } from './radar.types'

export function AlphaBadge({ label }: { label: AlphaLabel }) {
  if (label === '❌ IGNORE') return null;

  const styles: Record<string, any> = {
    '🔥 HIGH ALPHA': { bg: 'rgba(0,255,136,0.15)', border: '#00ff88' },
    '⚡ EARLY SIGNAL': { bg: 'rgba(255,214,0,0.15)', border: '#ffd700' },
    '👀 WATCH': { bg: 'rgba(255,152,0,0.15)', border: '#ff9800' },
    '🧪 SPECULATIVE': { bg: 'rgba(156,39,176,0.15)', border: '#9c27b0' },
    '😴 NEUTRAL': { bg: 'rgba(100,100,100,0.15)', border: '#666' },
    '☠️ RUG PROBABLE': { bg: 'rgba(255,23,68,0.15)', border: '#ff1744', pulse: true },
    '🚀 GRADUATING': { bg: 'rgba(0,230,118,0.2)', border: '#00e676', pulse: true },
  };

  const style = styles[label];
  if (!style) return null;

  return (
    <Box
      display="inline-block"
      px={2}
      py={0.5}
      bg={style.bg}
      border={`1px solid ${style.border}`}
      borderRadius="sm"
      fontSize="9px"
      fontWeight="bold"
      color="white"
      whiteSpace="nowrap"
      animation={style.pulse ? 'livePulse 2s ease-in-out infinite' : undefined}
    >
      {label}
    </Box>
  )
}
