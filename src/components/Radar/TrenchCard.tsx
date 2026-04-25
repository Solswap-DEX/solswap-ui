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

function formatNumber(val: number): string {
  if (val >= 1000) return `${(val / 1000).toFixed(1)}K`
  return val.toString()
}

// ── TRIGGER REASON ENGINE ──────────────────────────────────────────────────
function getTriggerReason(token: RadarToken): { icon: string; text: string; color: string; description: string } | null {
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
    return { icon: '🚀', text: 'Bonding curve near graduation', color: '#14f195', description: 'El token está muy cerca de llegar al 100% y migrar a Raydium.' }
  if (lv > 500)
    return { icon: '⚡', text: `Liquidity inflow +${formatVelocity(lv)} SOL`, color: '#00ff88', description: 'Están entrando cantidades masivas de liquidez nueva.' }
  if (buys > 0 && sells === 0)
    return { icon: '📈', text: 'Pure buy pressure, no sells', color: '#00ff88', description: 'Mucha presión de compra y nadie está vendiendo en el último minuto.' }
  if (buys > sells * 3 && buys >= 3)
    return { icon: '📈', text: 'Early accumulation detected', color: '#ffd700', description: 'Los compradores superan en gran número a los vendedores (ratio de 3 a 1).' }
  if (vv > 200)
    return { icon: '⚡', text: `Volume spike +${formatVelocity(vv)}`, color: '#ffd700', description: 'El volumen de transacciones ha explotado repentinamente.' }
  if (top10 < 0.35 && token.holders > 30)
    return { icon: '🧠', text: 'Distributed holder base', color: '#bf5af2', description: 'El top 10 de wallets tiene menos del 35% del total. Hay muy bajo riesgo de un volcado (dump) masivo.' }
  if (wc < 0.05 && token.holders > 20)
    return { icon: '✨', text: 'Low whale concentration', color: '#0d9ddb', description: 'La wallet más grande tiene menos del 5%. Nadie controla el mercado.' }
  if (pc5 > 15)
    return { icon: '📊', text: `Price +${pc5.toFixed(0)}% in 5m`, color: '#00ff88', description: 'El precio está subiendo muy rápido en el corto plazo.' }
  if (alpha > 70)
    return { icon: '🔥', text: 'High alpha momentum', color: '#ff9500', description: 'El algoritmo detecta un momento general muy alto basado en volumen, liquidez y distribución.' }
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

export function TrenchCard({ 
  token,
  onStopLossClick
}: { 
  token: RadarToken
  onStopLossClick?: (token: RadarToken) => void
}) {
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
        bg={isRug ? 'rgba(255,59,92,0.06)' : isTopAlpha ? 'rgba(20,241,149,0.06)' : '#0d0d0d'}
        border="1px solid"
        borderColor={isRug ? 'rgba(255,59,92,0.6)' : isTopAlpha ? 'rgba(20,241,149,0.7)' : 'rgba(255,255,255,0.2)'}
        borderRadius="8px"
        p="8px 10px"
        mb="6px"
        transition="all 0.15s ease"
        cursor="pointer"
        boxShadow={cardBoxShadow}
        _hover={{
          borderColor: isTopAlpha ? 'rgba(20,241,149,1)' : 'rgba(255,255,255,0.4)',
          bg: isTopAlpha ? 'rgba(20,241,149,0.1)' : '#111111',
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
            <TokenAvatar mint={token.mint} symbol={token.symbol} size={34} imageUrl={token.image_url} />
            <Box minW={0}>
              <Flex align="center" gap="6px">
                <Text fontSize="15px" fontWeight="700" color="#ffffff" lineHeight="1">
                  {token.symbol}
                </Text>
                <Text fontSize="12px" color="#ffffff" isTruncated maxW="100px" lineHeight="1" fontWeight="500">
                  {token.name.slice(0, 14)}{token.name.length > 14 ? '...' : ''}
                </Text>
              </Flex>
            </Box>
          </Flex>

          <Flex gap="10px" align="center" flexShrink={0} fontFamily="var(--radar-mono)">
            {typeof token.price_change_5m === 'number' && !isNaN(token.price_change_5m) && (
              <Tooltip label="Price change in last 5 minutes" fontSize="xs" hasArrow>
                <Flex align="baseline" gap="2px">
                  <Text fontSize="11px" fontWeight="800" color={token.price_change_5m >= 0 ? '#00ff88' : '#ff4444'}>
                    {token.price_change_5m >= 0 ? '+' : ''}{token.price_change_5m.toFixed(1)}%
                  </Text>
                </Flex>
              </Tooltip>
            )}
            <Tooltip label="Trading volume in the last minute" fontSize="xs" hasArrow>
              <Flex align="baseline" gap="3px">
                <Text fontSize="10px" color="#ffffff">V</Text>
                <Text fontSize="12px" fontWeight="700" color="#ffffff">{formatUsd(token.volume_1m)}</Text>
              </Flex>
            </Tooltip>
            <Tooltip label="Current estimated Market Cap" fontSize="xs" hasArrow>
              <Flex align="baseline" gap="3px">
                <Text fontSize="10px" color="#ffffff">MC</Text>
                <Text fontSize="12px" fontWeight="700" color="#ffffff">
                  {token.market_cap ? formatUsd(token.market_cap) : '—'}
                </Text>
              </Flex>
            </Tooltip>
          </Flex>
        </Flex>

        {/* LÍNEA 2: AGE + MINT + ALPHA LABEL */}
        <Flex justify="space-between" align="center" mb="5px">
          <Flex align="center" gap="8px">
            <Flex align="center" gap="4px">
              <Tooltip label="Time since token creation" fontSize="xs" hasArrow>
                <Text fontSize="11px" color="#ffffff" fontFamily="var(--radar-mono)" fontWeight="600">
                  {formatAge(token.age_seconds)}
                </Text>
              </Tooltip>
              <Tooltip label="Volume momentum trend" fontSize="xs" hasArrow>
                <Text color={(token.delta_volume ?? 0) >= 0 ? '#00ff88' : '#ff4444'} fontSize="13px" fontWeight="bold">
                  {(token.delta_volume ?? 0) >= 0 ? '↗' : '↘'}
                </Text>
              </Tooltip>
            </Flex>
            <Tooltip label="Token mint address (Click to view on Solscan)" fontSize="xs" hasArrow>
              <Text
                fontSize="10px" color="rgba(255,255,255,0.5)"
                onClick={(e) => { e.stopPropagation(); window.open(`https://solscan.io/token/${token.mint}`, '_blank') }}
                _hover={{ color: 'white', textDecoration: 'underline' }}
                cursor="pointer"
              >
                {token.mint.slice(0, 4)}...{token.mint.slice(-4)}
              </Text>
            </Tooltip>
            {typeof token.holders === 'number' && token.holders > 0 && (
              <Tooltip label="Total unique wallet holders" fontSize="xs" hasArrow>
                <Flex align="center" gap="2px">
                  <Text fontSize="10px">👥</Text>
                  <Text fontSize="11px" color="#ffffff" fontWeight="700" fontFamily="var(--radar-mono)">
                    {formatNumber(token.holders)}
                  </Text>
                </Flex>
              </Tooltip>
            )}
          </Flex>

          <Tooltip label="Calculated alpha/priority state" fontSize="xs" hasArrow>
            <Box
              px="6px" py="1px"
              bg={isRug ? 'rgba(255,59,92,0.1)' : 'transparent'}
              border={`1px solid ${isRug ? '#ff3b5c' : alphaColor}`}
              borderRadius="4px"
              fontSize="10px" fontWeight="800" color="#ffffff"
              textTransform="uppercase"
              letterSpacing="0.5px"
            >
              {token.alpha_label.replace(/[^\w\s]/gi, '').trim()}
            </Box>
          </Tooltip>
        </Flex>

        {/* TRIGGER REASON — "por qué mirar ESTE ahora" */}
        {trigger && (
          <Tooltip label={trigger.description} fontSize="xs" hasArrow placement="top-start">
            <Flex align="center" gap="5px" mb="6px"
              px="6px" py="3px"
              bg={`${trigger.color}0d`}
              borderLeft={`2px solid ${trigger.color}`}
              borderRadius="0 4px 4px 0"
              cursor="help"
            >
              <Text fontSize="10px">{trigger.icon}</Text>
              <Text fontSize="10px" color={trigger.color} fontWeight="600" fontFamily="var(--radar-mono)">
                {trigger.text}
              </Text>
            </Flex>
          </Tooltip>
        )}

        {/* LÍNEA 3: INDICATORS + VELOCITY */}
        <Flex gap="10px" align="center" mb="7px" flexWrap="wrap">
          {/* Alpha */}
          <Tooltip label="Overall Alpha Score (0-100)" fontSize="xs" hasArrow>
            <Flex align="center" gap="3px" cursor="help">
              <Text fontSize="11px" color="#ffffff" fontFamily="var(--radar-mono)">α</Text>
              <Text
                fontSize="13px" fontWeight="bold"
                color={token.alpha_score > 50 ? '#00ff88' : token.alpha_score > 20 ? '#ffd700' : '#ffffff'}
                fontFamily="var(--radar-mono)"
              >
                {token.alpha_score.toFixed(0)}
              </Text>
            </Flex>
          </Tooltip>

          {/* Buys */}
          <Tooltip label="Buys in the last minute" fontSize="xs" hasArrow>
            <Flex align="center" gap="2px" cursor="help">
              <Text fontSize="11px" color="#00ff88">@</Text>
              <Text fontSize="13px" fontWeight="700" color="#00ff88" fontFamily="var(--radar-mono)">{buys1m}</Text>
            </Flex>
          </Tooltip>

          {/* Sells */}
          <Tooltip label="Sells in the last minute" fontSize="xs" hasArrow>
            <Flex align="center" gap="2px" cursor="help">
              <Text fontSize="11px" color="#ff4444">●</Text>
              <Text fontSize="13px" fontWeight="700" color="#ff4444" fontFamily="var(--radar-mono)">{sells1m}</Text>
            </Flex>
          </Tooltip>

          {/* Whale Concentration */}
          {typeof token.top10_concentration === 'number' && !isNaN(token.top10_concentration) && (
            <Tooltip label="Whale Concentration: Supply held by top 10 wallets" fontSize="xs" hasArrow>
              <Flex align="center" gap="2px" cursor="help">
                <Text fontSize="10px">🐳</Text>
                <Text fontSize="11px" fontWeight="800" color={token.top10_concentration < 0.3 ? '#00ff88' : token.top10_concentration < 0.6 ? '#ffd700' : '#ff4444'} fontFamily="var(--radar-mono)">
                  {(token.top10_concentration * 100).toFixed(0)}%
                </Text>
              </Flex>
            </Tooltip>
          )}

          {/* Bonding Curve */}
          {token.is_pumpfun && !token.is_graduated && typeof token.bonding_curve_pct === 'number' && !isNaN(token.bonding_curve_pct) && (
            <Tooltip label="PumpFun Bonding Curve progress" fontSize="xs" hasArrow>
              <Flex align="center" gap="2px" cursor="help">
                <Text fontSize="10px">📈</Text>
                <Text fontSize="11px" fontWeight="800" color="var(--radar-solana)" fontFamily="var(--radar-mono)">
                  {token.bonding_curve_pct.toFixed(0)}%
                </Text>
              </Flex>
            </Tooltip>
          )}

          {/* LP Status */}
          <Tooltip label={token.lp_locked ? "Liquidity is BURNT or LOCKED (Safe)" : "Liquidity is UNLOCKED (Caution)"} fontSize="xs" hasArrow>
            <Box px="4px" py="0px" bg={token.lp_locked ? "rgba(0,255,136,0.1)" : "rgba(255,59,92,0.1)"} borderRadius="2px">
              <Text fontSize="10px" color={token.lp_locked ? "#00ff88" : "#ff3b5c"}>
                {token.lp_locked ? "🔒 LOCKED" : "🔓 UNLOCKED"}
              </Text>
            </Box>
          </Tooltip>

          {/* Risk */}
          <Tooltip label="Automated risk assessment level" fontSize="xs" hasArrow>
            <Box
              px="4px" py="0px"
              bg="rgba(255,255,255,0.1)"
              border="1px solid rgba(255,255,255,0.2)"
              borderRadius="2px"
              fontSize="10px" fontWeight="800" color="#ffffff"
            >
              {token.risk_level}
            </Box>
          </Tooltip>

          {/* VELOCITY */}
          {lv !== 0 && (
            <Tooltip label="Liquidity flow velocity (SOL per minute)" fontSize="xs" hasArrow>
              <Flex align="center" gap="2px" cursor="help">
                <Text fontSize="11px" color={lv > 0 ? '#14f195' : '#ff4444'}>⚡</Text>
                <Text
                  fontSize="12px" fontWeight="800" fontFamily="var(--radar-mono)"
                  color={lv > 0 ? '#14f195' : '#ff4444'}
                >
                  {lv > 0 ? '+' : ''}{formatVelocity(lv)}
                </Text>
              </Flex>
            </Tooltip>
          )}
        </Flex>

        {/* LÍNEA 4: BUY/SELL BAR */}
        <Box mb="8px">
          <Tooltip label="Buy vs Sell volume ratio (last minute)" fontSize="xs" hasArrow>
            <Flex align="center" justify="space-between" cursor="help">
              <Text fontSize="11px" color="#ffffff" fontFamily="var(--radar-mono)" fontWeight="700">{buyPct}%</Text>
              <Flex h="4px" flex={1} mx="8px" bg="rgba(255,255,255,0.1)" overflow="hidden" borderRadius="2px">
                <Box w={`${buyPct}%`} bg="#00cc66" h="100%" />
                <Box w={`${sellPct}%`} bg="#ff3333" h="100%" />
              </Flex>
              <Text fontSize="11px" color="#ffffff" fontFamily="var(--radar-mono)" fontWeight="700">{sellPct}%</Text>
            </Flex>
          </Tooltip>
        </Box>

        {/* FOOTER: ALPHA SCORE + BUY BUTTON */}
        <Flex justify="space-between" align="center">
          <Flex align="center" gap="4px">
            {token.social_twitter && (
              <Tooltip label="Twitter / X" fontSize="xs" hasArrow>
                <Text fontSize="12px" cursor="pointer" onClick={(e) => { e.stopPropagation(); window.open(token.social_twitter, '_blank') }}>𝕏</Text>
              </Tooltip>
            )}
            {token.social_telegram && (
              <Tooltip label="Telegram" fontSize="xs" hasArrow>
                <Text fontSize="12px" cursor="pointer" onClick={(e) => { e.stopPropagation(); window.open(token.social_telegram, '_blank') }}>✈</Text>
              </Tooltip>
            )}
            {token.social_website && (
              <Tooltip label="Website" fontSize="xs" hasArrow>
                <Text fontSize="12px" cursor="pointer" onClick={(e) => { e.stopPropagation(); window.open(token.social_website, '_blank') }}>🌐</Text>
              </Tooltip>
            )}
            <Tooltip label="Set Stop Loss / Price Alert" fontSize="xs" hasArrow>
              <Box 
                as="button"
                onClick={(e: any) => { e.stopPropagation(); onStopLossClick?.(token) }}
                _hover={{ opacity: 0.8, transform: 'scale(1.2)' }}
                transition="all 0.1s"
                fontSize="12px"
              >
                🔔
              </Box>
            </Tooltip>
          </Flex>

          <Tooltip
            label={`Liq: ${formatUsd(token.liquidity)} · Est. slip: ~${token.liquidity > 50000 ? '<1' : token.liquidity > 10000 ? '1–3' : '>5'}%`}
            fontSize="xs" hasArrow placement="top"
          >
            <Box
              px="12px" py="4px"
              bg={isTopAlpha ? 'rgba(0,255,136,0.2)' : 'rgba(0,255,136,0.15)'}
              border={`1px solid ${isTopAlpha ? '#00ff88' : '#00ff88'}`}
              borderRadius="4px"
              color="#ffffff"
              fontSize="12px"
              fontWeight="900"
              transition="all 0.2s"
              _hover={{ bg: 'rgba(0,255,136,0.3)', transform: 'scale(1.04)' }}
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
