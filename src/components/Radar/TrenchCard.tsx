import React from 'react'
import { Box, Flex, Text, Tooltip } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { RadarToken } from './radar.types'
import { TokenAvatar } from './TokenAvatar'

function formatUsd(value: number): string {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `$${(value / 1_000).toFixed(1)}K`
  return `$${value.toFixed(0)}`
}

function formatAge(seconds: number): string {
  if (seconds < 60) return `${seconds}s`
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m`
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h`
  return `${Math.floor(seconds / 86400)}d`
}

const ALPHA_COLORS: Record<string, string> = {
  '🔥 HIGH ALPHA': '#00ff88',
  '⚡ EARLY SIGNAL': '#ffd700',
  '👀 WATCH': '#ff9500',
  '🧪 SPECULATIVE': '#bf5af2',
  '😴 NEUTRAL': '#6e7681',
  '☠️ RUG PROBABLE': '#ff3b5c'
}

export function TrenchCard({ token }: { token: RadarToken }) {
  const router = useRouter()
  const isRug = token.risk_level === 'RUG PROBABLE' || token.alpha_label === '☠️ RUG PROBABLE'
  const alphaColor = ALPHA_COLORS[token.alpha_label] || '#6e7681'
  
  const buyPct = (token.buys_1m + token.sells_1m) > 0 
    ? Math.round((token.buys_1m / (token.buys_1m + token.sells_1m)) * 100) 
    : 50
  const sellPct = 100 - buyPct

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px) }
          to   { opacity: 1; transform: translateY(0) }
        }
        @keyframes pulseBorder {
          0%, 100% { border-color: rgba(255,59,92,0.4); }
          50% { border-color: rgba(255,59,92,0.1); }
        }
      `}</style>
      
      <Box
        bg={isRug ? 'rgba(255,59,92,0.03)' : 'var(--radar-surface)'}
        border="1px solid"
        borderColor={isRug ? 'rgba(255,59,92,0.4)' : 'var(--radar-border)'}
        borderRadius="8px"
        p="10px 12px"
        mb="6px"
        transition="all 0.15s ease"
        cursor="pointer"
        _hover={{ 
          borderColor: 'rgba(255,255,255,0.12)', 
          bg: 'var(--radar-surface-2)',
          transform: 'translateX(2px)'
        }}
        onClick={() => router.push(`/swap?inputMint=So11111111111111111111111111111111111111112&outputMint=${token.mint}`)}
        style={{ animation: 'slideDown 0.2s ease-out' }}
        animation={isRug ? 'pulseBorder 2s infinite' : undefined}
      >
        {/* LÍNEA 1: IDENTITY + VOLUME/MC */}
        <Flex justify="space-between" align="center" mb="4px">
          <Flex align="center" gap="10px" minW={0}>
            <TokenAvatar mint={token.mint} symbol={token.symbol} size={32} />
            <Box minW={0}>
              <Flex align="center" gap="6px">
                <Text fontSize="13px" fontWeight="700" color="white" lineHeight="1">{token.symbol}</Text>
                <Text fontSize="11px" color="var(--radar-text-dim)" isTruncated maxW="100px" lineHeight="1">
                  {token.name.slice(0, 14)}{token.name.length > 14 ? '...' : ''}
                </Text>
              </Flex>
            </Box>
          </Flex>
          
          <Flex gap="10px" align="center" flexShrink={0} fontFamily="var(--radar-mono)">
            <Flex align="baseline" gap="3px">
              <Text fontSize="9px" color="var(--radar-text-dim)">V</Text>
              <Text fontSize="11px" fontWeight="700" color="var(--radar-text)">{formatUsd(token.volume_1m)}</Text>
            </Flex>
            <Flex align="baseline" gap="3px">
              <Text fontSize="9px" color="var(--radar-text-dim)">MC</Text>
              <Text fontSize="11px" fontWeight="700" color="var(--radar-text)">{token.market_cap ? formatUsd(token.market_cap) : '—'}</Text>
            </Flex>
          </Flex>
        </Flex>

        {/* LÍNEA 2: METADATA + ALPHA LABEL */}
        <Flex justify="space-between" align="center" mb="6px">
          <Flex align="center" gap="10px">
            <Flex align="center" gap="4px">
              <Text fontSize="10px" color="var(--radar-text-dim)" fontFamily="var(--radar-mono)">
                {formatAge(token.age_seconds)}
              </Text>
              <Text color={(token.delta_volume ?? 0) >= 0 ? 'var(--radar-green)' : 'var(--radar-red)'} fontSize="12px">
                {(token.delta_volume ?? 0) >= 0 ? '↗' : '↘'}
              </Text>
            </Flex>
            <Text 
              fontSize="9px" color="var(--radar-text-dim)" 
              onClick={(e) => { e.stopPropagation(); window.open(`https://solscan.io/token/${token.mint}`, '_blank') }}
              _hover={{ color: 'white', textDecoration: 'underline' }}
            >
              {token.mint.slice(0, 4)}...{token.mint.slice(-4)}
            </Text>
          </Flex>
          
          <Box
            px="6px" py="1px"
            bg={isRug ? 'rgba(255,59,92,0.1)' : 'transparent'}
            border={`1px solid ${alphaColor}`}
            borderRadius="4px"
            fontSize="9px" fontWeight="800" color={alphaColor}
            textTransform="uppercase"
            letterSpacing="0.5px"
          >
            {token.alpha_label.replace(/[^\w\s]/gi, '').trim()}
          </Box>
        </Flex>

        {/* LÍNEA 3: INDICADORES */}
        <Flex gap="12px" align="center" mb="8px">
          <Flex align="center" gap="4px">
            <Text fontSize="10px" color="var(--radar-text-dim)" fontFamily="var(--radar-mono)">α</Text>
            <Text 
              fontSize="11px" fontWeight="bold" 
              color={token.alpha_score > 50 ? 'var(--radar-green)' : token.alpha_score > 20 ? 'var(--radar-yellow)' : 'var(--radar-text-dim)'}
              fontFamily="var(--radar-mono)"
            >
              {token.alpha_score.toFixed(0)}
            </Text>
          </Flex>
          <Flex align="center" gap="2px">
            <Text fontSize="10px" color="var(--radar-green)">@</Text>
            <Text fontSize="11px" fontWeight="700" color="var(--radar-green)" fontFamily="var(--radar-mono)">{token.buys_1m}</Text>
          </Flex>
          <Flex align="center" gap="2px">
            <Text fontSize="10px" color="var(--radar-red)">●</Text>
            <Text fontSize="11px" fontWeight="700" color="var(--radar-red)" fontFamily="var(--radar-mono)">{token.sells_1m}</Text>
          </Flex>
          <Box
            px="4px" py="0px"
            bg="rgba(255,255,255,0.04)"
            border="1px solid var(--radar-border)"
            borderRadius="2px"
            fontSize="9px" fontWeight="800" color="var(--radar-text)"
          >
            {token.risk_level}
          </Box>
        </Flex>

        {/* LÍNEA 4: BUY/SELL BAR (FULL WIDTH) */}
        <Box mb="10px">
          <Flex align="center" justify="space-between" mb="4px">
            <Text fontSize="9px" color="var(--radar-text-dim)" fontFamily="var(--radar-mono)">{buyPct}%</Text>
            <Flex h="3px" flex={1} mx="8px" bg="rgba(255,255,255,0.05)" overflow="hidden">
              <Box w={`${buyPct}%`} bg="var(--radar-green)" h="100%" />
              <Box w={`${sellPct}%`} bg="var(--radar-red)" h="100%" />
            </Flex>
            <Text fontSize="9px" color="var(--radar-text-dim)" fontFamily="var(--radar-mono)">{sellPct}%</Text>
          </Flex>
        </Box>

        {/* FOOTER: ALPHA SCORE + BUY BUTTON */}
        <Flex justify="space-between" align="center">
          <Flex align="center" gap="2px">
            <Text fontSize="9px" color="var(--radar-text-dim)">α</Text>
            <Text fontSize="14px" fontWeight="800" color="white" fontFamily="var(--radar-mono)">
              {token.alpha_score.toFixed(0)}
            </Text>
          </Flex>
          
          <Box
            px="12px" py="4px"
            bg="rgba(20,241,149,0.1)"
            border="1px solid var(--radar-solana)"
            borderRadius="4px"
            color="var(--radar-solana)"
            fontSize="11px"
            fontWeight="bold"
            transition="all 0.2s"
            _hover={{ bg: 'rgba(20,241,149,0.2)' }}
            onClick={(e) => { e.stopPropagation(); router.push(`/swap?outputMint=${token.mint}`) }}
          >
            BUY ▶
          </Box>
        </Flex>
      </Box>
    </>
  )
}
