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

function formatVelocity(v: number): string {
  if (Math.abs(v) >= 1000) return `${(v / 1000).toFixed(1)}K/m`
  if (Math.abs(v) >= 1) return `${v.toFixed(1)}/m`
  return `${(v * 60).toFixed(1)}/m`
}

// ── TRIGGER REASON ENGINE ──────────────────────────────────────────────────
function getTriggerReason(token: RadarToken): { icon: string; text: string; color: string } | null {
  const lv = token.liquidity_velocity ?? 0
  const vv = token.volume_velocity ?? 0
  const buys = token.buys_1m ?? 0
  const sells = token.sells_1m ?? 0
  const bc = token.bonding_curve_pct ?? 0
  const top10 = token.top10_concentration ?? 1
  const wc = token.wallet_concentration ?? 1
  const pc5 = token.price_change_5m ?? 0
  const alpha = token.alpha_score

  if (token.is_pumpfun && bc >= 80 && !token.is_graduated)
    return { icon: '🚀', text: 'Bonding curve near graduation', color: '#14f195' }
  if (lv > 500)
    return { icon: '⚡', text: `Liquidity inflow +${formatVelocity(lv)} SOL`, color: '#00ff88' }
  if (buys > 0 && sells === 0)
    return { icon: '📈', text: 'Pure buy pressure, no sells', color: '#00ff88' }
  if (buys > sells * 3 && buys >= 3)
    return { icon: '📈', text: 'Early accumulation detected', color: '#ffd700' }
  if (vv > 200)
    return { icon: '⚡', text: `Volume spike +${formatVelocity(vv)}`, color: '#ffd700' }
  if (top10 < 0.35 && token.holders > 30)
    return { icon: '🧠', text: 'Distributed holder base', color: '#bf5af2' }
  if (wc < 0.05 && token.holders > 20)
    return { icon: '✨', text: 'Low whale concentration', color: '#0d9ddb' }
  if (pc5 > 15)
    return { icon: '📊', text: `Price +${pc5.toFixed(0)}% in 5m`, color: '#00ff88' }
  if (alpha > 70)
    return { icon: '🔥', text: 'High alpha momentum', color: '#ff9500' }
  return null
}

const ALPHA_COLORS: Record<string, string> = {
  '🔥 HIGH ALPHA':    '#00ff88',
  '⚡ EARLY SIGNAL':  '#ffd700',
  '👀 WATCH':         '#ff9500',
  '🧪 SPECULATIVE':   '#bf5af2',
  '😴 NEUTRAL':       '#6e7681',
  '☠️ RUG PROBABLE':  '#ff3b5c',
  '🚀 GRADUATING':    '#14f195',
}

export function TrenchCard({ token }: { token: RadarToken }) {
  const router = useRouter()
  const isRug = token.risk_level === 'RUG PROBABLE' || token.alpha_label === '☠️ RUG PROBABLE'
  const isTopAlpha = token.alpha_score > 80 && !isRug
  const alphaColor = ALPHA_COLORS[token.alpha_label] || '#6e7681'

  const buys1m = Number(token.buys_1m) || 0
  const sells1m = Number(token.sells_1m) || 0
  const buyPct = (buys1m + sells1m) > 0
    ? Math.round((buys1m / (buys1m + sells1m)) * 100)
    : 50
  const sellPct = 100 - buyPct

  const lv = Number(token.liquidity_velocity) || 0
  const vv = Number(token.volume_velocity) || 0
  
  // Create a copy of the token with forced numbers for getTriggerReason
  const safeToken = { ...token, buys_1m: buys1m, sells_1m: sells1m, liquidity_velocity: lv, volume_velocity: vv }
  const trigger = getTriggerReason(safeToken)

  // Border & glow based on state
  const cardBorderColor = isRug
    ? 'rgba(255,59,92,0.4)'
    : isTopAlpha
    ? 'rgba(20,241,149,0.5)'
    : 'var(--radar-border)'

  const cardBoxShadow = isTopAlpha
    ? '0 0 12px rgba(20,241,149,0.18), 0 0 2px rgba(20,241,149,0.4) inset'
    : 'none'

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px) }
          to   { opacity: 1; transform: translateY(0) }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 12px rgba(20,241,149,0.18), 0 0 2px rgba(20,241,149,0.4) inset; }
          50%       { box-shadow: 0 0 20px rgba(20,241,149,0.32), 0 0 4px rgba(20,241,149,0.6) inset; }
        }
        @keyframes rugPulse {
          0%, 100% { border-color: rgba(255,59,92,0.4); }
          50%       { border-color: rgba(255,59,92,0.15); }
        }
      `}</style>

      <Box
        bg={isRug ? 'rgba(255,59,92,0.03)' : isTopAlpha ? 'rgba(20,241,149,0.03)' : 'var(--radar-surface)'}
        border="1px solid"
        borderColor={cardBorderColor}
        borderRadius="8px"
        p="10px 12px"
        mb="6px"
        transition="all 0.15s ease"
        cursor="pointer"
        boxShadow={cardBoxShadow}
        _hover={{
          borderColor: isTopAlpha ? 'rgba(20,241,149,0.8)' : 'rgba(255,255,255,0.12)',
          bg: isTopAlpha ? 'rgba(20,241,149,0.06)' : 'var(--radar-surface-2)',
          transform: 'translateX(2px)',
        }}
        onClick={() => router.push(`/swap?inputMint=So11111111111111111111111111111111111111112&outputMint=${token.mint}`)}
        style={{
          animation: isTopAlpha
            ? 'glowPulse 2.5s ease-in-out infinite'
            : isRug
            ? 'rugPulse 2s infinite'
            : 'slideDown 0.2s ease-out',
        }}
      >
        {/* TOP-ALPHA BADGE */}
        {isTopAlpha && (
          <Flex align="center" gap="4px" mb="6px">
            <Box w="4px" h="4px" borderRadius="full" bg="var(--radar-solana)"
              style={{ animation: 'glowPulse 1s infinite' }} />
            <Text fontSize="9px" fontWeight="900" color="var(--radar-solana)"
              letterSpacing="1px" textTransform="uppercase">
              TOP ALPHA
            </Text>
          </Flex>
        )}

        {/* LÍNEA 1: IDENTITY + VOLUME/MC */}
        <Flex justify="space-between" align="center" mb="4px">
          <Flex align="center" gap="10px" minW={0}>
            <TokenAvatar mint={token.mint} symbol={token.symbol} size={32} />
            <Box minW={0}>
              <Flex align="center" gap="6px">
                <Text fontSize="13px" fontWeight="700" color="white" lineHeight="1">
                  {token.symbol}
                </Text>
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
              <Text fontSize="11px" fontWeight="700" color="var(--radar-text)">
                {token.market_cap ? formatUsd(token.market_cap) : '—'}
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {/* LÍNEA 2: AGE + MINT + ALPHA LABEL */}
        <Flex justify="space-between" align="center" mb="5px">
          <Flex align="center" gap="8px">
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
              cursor="pointer"
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

        {/* TRIGGER REASON — "por qué mirar ESTE ahora" */}
        {trigger && (
          <Flex align="center" gap="5px" mb="6px"
            px="6px" py="3px"
            bg={`${trigger.color}0d`}
            borderLeft={`2px solid ${trigger.color}`}
            borderRadius="0 4px 4px 0"
          >
            <Text fontSize="10px">{trigger.icon}</Text>
            <Text fontSize="10px" color={trigger.color} fontWeight="600" fontFamily="var(--radar-mono)">
              {trigger.text}
            </Text>
          </Flex>
        )}

        {/* LÍNEA 3: INDICATORS + VELOCITY */}
        <Flex gap="10px" align="center" mb="7px" flexWrap="wrap">
          {/* Alpha */}
          <Tooltip label="Alpha Score" fontSize="xs" hasArrow>
            <Flex align="center" gap="3px" cursor="help">
              <Text fontSize="10px" color="var(--radar-text-dim)" fontFamily="var(--radar-mono)">α</Text>
              <Text
                fontSize="11px" fontWeight="bold"
                color={token.alpha_score > 50 ? 'var(--radar-green)' : token.alpha_score > 20 ? 'var(--radar-yellow)' : 'var(--radar-text-dim)'}
                fontFamily="var(--radar-mono)"
              >
                {token.alpha_score.toFixed(0)}
              </Text>
            </Flex>
          </Tooltip>

          {/* Buys */}
          <Tooltip label="Buys last 5m" fontSize="xs" hasArrow>
            <Flex align="center" gap="2px" cursor="help">
              <Text fontSize="10px" color="var(--radar-green)">@</Text>
              <Text fontSize="11px" fontWeight="700" color="var(--radar-green)" fontFamily="var(--radar-mono)">{buys1m}</Text>
            </Flex>
          </Tooltip>

          {/* Sells */}
          <Tooltip label="Sells last 5m" fontSize="xs" hasArrow>
            <Flex align="center" gap="2px" cursor="help">
              <Text fontSize="10px" color="var(--radar-red)">●</Text>
              <Text fontSize="11px" fontWeight="700" color="var(--radar-red)" fontFamily="var(--radar-mono)">{sells1m}</Text>
            </Flex>
          </Tooltip>

          {/* Risk */}
          <Box
            px="4px" py="0px"
            bg="rgba(255,255,255,0.04)"
            border="1px solid var(--radar-border)"
            borderRadius="2px"
            fontSize="9px" fontWeight="800" color="var(--radar-text)"
          >
            {token.risk_level}
          </Box>

          {/* VELOCITY — THE EDGE */}
          {lv !== 0 && (
            <Tooltip label="Liquidity flow velocity" fontSize="xs" hasArrow>
              <Flex align="center" gap="2px" cursor="help">
                <Text fontSize="10px" color={lv > 0 ? 'var(--radar-solana)' : 'var(--radar-red)'}>⚡</Text>
                <Text
                  fontSize="10px" fontWeight="800" fontFamily="var(--radar-mono)"
                  color={lv > 0 ? 'var(--radar-solana)' : 'var(--radar-red)'}
                >
                  {lv > 0 ? '+' : ''}{formatVelocity(lv)}
                </Text>
              </Flex>
            </Tooltip>
          )}
          {vv !== 0 && lv === 0 && (
            <Tooltip label="Volume velocity" fontSize="xs" hasArrow>
              <Flex align="center" gap="2px" cursor="help">
                <Text fontSize="10px" color="var(--radar-yellow)">⚡</Text>
                <Text fontSize="10px" fontWeight="800" fontFamily="var(--radar-mono)" color="var(--radar-yellow)">
                  V{vv > 0 ? '+' : ''}{formatVelocity(vv)}
                </Text>
              </Flex>
            </Tooltip>
          )}
        </Flex>

        {/* LÍNEA 4: BUY/SELL BAR */}
        <Box mb="8px">
          <Flex align="center" justify="space-between">
            <Text fontSize="9px" color="var(--radar-text-dim)" fontFamily="var(--radar-mono)">{buyPct}%</Text>
            <Flex h="3px" flex={1} mx="8px" bg="rgba(255,255,255,0.05)" overflow="hidden" borderRadius="2px">
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
            <Text fontSize="14px" fontWeight="800" color={isTopAlpha ? 'var(--radar-solana)' : 'white'} fontFamily="var(--radar-mono)">
              {token.alpha_score.toFixed(0)}
            </Text>
          </Flex>

          <Tooltip
            label={`Liq: ${formatUsd(token.liquidity)} · Est. slip: ~${token.liquidity > 50000 ? '<1' : token.liquidity > 10000 ? '1–3' : '>5'}%`}
            fontSize="xs" hasArrow placement="top"
          >
            <Box
              px="12px" py="4px"
              bg={isTopAlpha ? 'rgba(20,241,149,0.15)' : 'rgba(20,241,149,0.1)'}
              border={`1px solid ${isTopAlpha ? 'rgba(20,241,149,0.8)' : 'var(--radar-solana)'}`}
              borderRadius="4px"
              color="var(--radar-solana)"
              fontSize="11px"
              fontWeight="bold"
              transition="all 0.2s"
              _hover={{ bg: 'rgba(20,241,149,0.25)', transform: 'scale(1.04)' }}
              onClick={(e) => { e.stopPropagation(); router.push(`/swap?outputMint=${token.mint}`) }}
              cursor="pointer"
            >
              BUY ▶
            </Box>
          </Tooltip>
        </Flex>
      </Box>
    </>
  )
}
