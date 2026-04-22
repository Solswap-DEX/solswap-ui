import { Box, Flex, Text, Tooltip } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { RadarToken } from './radar.types'
import { TokenAvatar } from './TokenAvatar'
import { BuySellBar } from './BuySellBar'
import { BondingCurveBar } from './BondingCurveBar'
import { QuickBuyButton } from './QuickBuyButton'
import { SocialLinks } from './SocialLinks'
import { CopyAddress } from './CopyAddress'

function formatUsd(value: number): string {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`
  return `$${value.toFixed(0)}`
}

function formatAge(seconds: number): string {
  if (seconds < 60) return `${seconds}s`
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m`
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h`
  return `${Math.floor(seconds / 86400)}d`
}

function getAlphaColor(label: string): string {
  if (label.includes('HIGH ALPHA') || label.includes('GRADUATING')) return '#00e676'
  if (label.includes('EARLY SIGNAL')) return '#00b0ff'
  if (label.includes('WATCH')) return '#ffd600'
  if (label.includes('SPECULATIVE')) return '#ff9800'
  if (label.includes('RUG')) return '#ff1744'
  return 'rgba(255,255,255,0.3)'
}

function getRiskColor(level: string): string {
  switch (level) {
    case 'LOW': return '#00c853'
    case 'MEDIUM': return '#ffd600'
    case 'HIGH': return '#ff6d00'
    case 'RUG PROBABLE': return '#ff1744'
    default: return 'rgba(255,255,255,0.3)'
  }
}

export function TrenchCard({ token }: { token: RadarToken }) {
  const router = useRouter()
  const isGraduating = token.is_pumpfun && !token.is_graduated && (token.bonding_curve_pct ?? 0) >= 80
  const isRug = token.risk_level === 'RUG PROBABLE'
  const alphaColor = getAlphaColor(token.alpha_label)
  const riskColor = getRiskColor(token.risk_level)

  const borderColor = isGraduating
    ? 'rgba(0,230,118,0.4)'
    : isRug
      ? 'rgba(255,23,68,0.3)'
      : 'rgba(255,255,255,0.07)'

  return (
    <>
      <style>{`
        @keyframes bcPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px #00e676; }
          50% { opacity: 0.7; box-shadow: 0 0 2px #00e676; }
        }
        @keyframes cardSlideIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <Box
        px="8px" py="7px"
        bg={isGraduating ? 'rgba(0,230,118,0.04)' : '#141414'}
        borderRadius="8px"
        border={`1px solid ${borderColor}`}
        cursor="pointer"
        onClick={() => router.push(`/swap?inputMint=So11111111111111111111111111111111111111112&outputMint=${token.mint}`)}
        transition="border-color 0.15s, background 0.15s"
        _hover={{ borderColor: 'rgba(255,255,255,0.15)', bg: 'rgba(255,255,255,0.04)' }}
        style={{ animation: 'cardSlideIn 0.2s ease-out' }}
        position="relative"
        overflow="hidden"
      >
        {isGraduating && (
          <Box position="absolute" top={0} left={0} right={0} h="1px"
            bgGradient="linear(to-r, transparent, #00e676, transparent)" />
        )}

        {/* ── Row 1: Identity + Stats ── */}
        <Flex justify="space-between" align="flex-start" mb="5px">
          <Flex align="center" gap="6px" flex={1} minW={0}>
            <TokenAvatar mint={token.mint} symbol={token.symbol} size={28} imageUrl={token.image_url} />
            <Box minW={0} flex={1}>
              <Flex align="baseline" gap="5px">
                <Text fontSize="13px" fontWeight="800" color="white" isTruncated maxW="100px" lineHeight="1.1">
                  {token.symbol}
                </Text>
                <Text fontSize="11px" color="gray.500" isTruncated maxW="80px" lineHeight="1.1">
                  {token.name}
                </Text>
              </Flex>
              <Flex align="center" gap="6px" mt="3px">
                <Text fontSize="10px" color="gray.500" fontWeight="600">
                  {formatAge(token.age_seconds)}
                </Text>
                <SocialLinks
                  twitter={token.social_twitter}
                  telegram={token.social_telegram}
                  website={token.social_website}
                  mint={token.mint}
                />
              </Flex>
            </Box>
          </Flex>

          {/* V + MC */}
          <Flex gap="8px" align="center" flexShrink={0}>
            <Tooltip label="1-minute Trading Volume in USD" fontSize="xs" placement="top" hasArrow>
              <Box textAlign="right">
                <Text fontSize="9px" color="rgba(255,255,255,0.25)" lineHeight="1" fontWeight="bold">V</Text>
                <Text fontSize="10.5px" fontWeight="800" color="white" fontFamily="monospace" lineHeight="1.2">
                  {formatUsd(token.volume_1m)}
                </Text>
              </Box>
            </Tooltip>
            <Tooltip label="Current Market Capitalization in USD" fontSize="xs" placement="top" hasArrow>
              <Box textAlign="right">
                <Text fontSize="9px" color="rgba(255,255,255,0.25)" lineHeight="1" fontWeight="bold">MC</Text>
                <Text fontSize="10.5px" fontWeight="800" color={alphaColor} fontFamily="monospace" lineHeight="1.2">
                  {token.market_cap ? formatUsd(token.market_cap) : '—'}
                </Text>
              </Box>
            </Tooltip>
          </Flex>
        </Flex>

        {/* ── Row 2: Creator + Fee / Alpha badge ── */}
        <Flex justify="space-between" align="center" mb="4px">
          <Flex gap="5px" align="center">
            <CopyAddress mint={token.mint} />
            {token.fee_ratio !== undefined && token.fee_ratio > 0 && (
              <Tooltip label="Fee / Liquidity Ratio" fontSize="xs" hasArrow>
                <Text fontSize="10px" color="rgba(255,255,255,0.3)" fontFamily="monospace" cursor="help" fontWeight="bold">
                  F≡{token.fee_ratio.toFixed(2)}
                </Text>
              </Tooltip>
            )}
          </Flex>
          <Tooltip label={`Alpha signal status: ${token.alpha_label}`} fontSize="xs" hasArrow>
            <Box
              px="6px" py="2px"
              bg={`${alphaColor}18`}
              border={`1px solid ${alphaColor}33`}
              borderRadius="4px"
              fontSize="9.5px" fontWeight="800" color={alphaColor}
              whiteSpace="nowrap"
              cursor="help"
            >
              {token.alpha_label}
            </Box>
          </Tooltip>
        </Flex>

        {/* ── Row 3: Holders · B/S · Risk · PriceChange ── */}
        <Flex justify="space-between" align="center" mb="5px">
          <Flex gap="8px" align="center">
            {/* Holders */}
            <Tooltip label="Number of unique wallet holders" fontSize="xs" hasArrow>
              <Flex align="center" gap="3px" cursor="help">
                <Text fontSize="10px" color="rgba(255,255,255,0.4)">👤</Text>
                <Text fontSize="10.5px" color="gray.300" fontWeight="800">{token.holders || '0'}</Text>
              </Flex>
            </Tooltip>
            {/* Buys */}
            <Tooltip label="Buys last 1m" fontSize="xs" hasArrow>
              <Flex align="center" gap="1px" cursor="help">
                <Text fontSize="10.5px" color="#00c853" fontWeight="900">🟢{token.buys_1m}</Text>
              </Flex>
            </Tooltip>
            {/* Sells */}
            <Tooltip label="Sells last 1m" fontSize="xs" hasArrow>
              <Flex align="center" gap="1px" cursor="help">
                <Text fontSize="10.5px" color="#ff1744" fontWeight="900">🔴{token.sells_1m}</Text>
              </Flex>
            </Tooltip>
            {/* Risk */}
            <Tooltip label={`Risk: ${token.risk_level}`} fontSize="xs" hasArrow>
              <Box
                px="5px" py="1px"
                bg={`${riskColor}22`}
                border={`1px solid ${riskColor}55`}
                borderRadius="4px"
                fontSize="9px" fontWeight="900" color={riskColor}
                cursor="help"
              >
                {token.risk_level === 'RUG PROBABLE' ? 'RUG' : token.risk_level}
              </Box>
            </Tooltip>
          </Flex>
          {/* Price change 5m */}
          {token.price_change_5m !== undefined && (
            <Tooltip label="5m Price Change" fontSize="xs" hasArrow>
              <Text
                fontSize="10.5px" fontWeight="900" fontFamily="monospace"
                color={token.price_change_5m >= 0 ? '#00c853' : '#ff1744'}
                cursor="help"
              >
                {token.price_change_5m >= 0 ? '+' : ''}{token.price_change_5m.toFixed(0)}%
              </Text>
            </Tooltip>
          )}
        </Flex>

        {/* ── Row 4: Buy/Sell pressure bar ── */}
        <Box mb="4px">
          <BuySellBar buys={token.buys_1m} sells={token.sells_1m} />
        </Box>

        {/* ── Row 5: Bonding Curve (PumpFun only) ── */}
        {token.is_pumpfun && token.bonding_curve_pct !== undefined && (
          <Box mb="4px">
            <BondingCurveBar pct={token.bonding_curve_pct} is_graduated={token.is_graduated ?? false} />
          </Box>
        )}

        {/* ── Row 6: Alpha score + Quick Buy ── */}
        <Flex justify="space-between" align="center" pt="4px"
          borderTop="1px solid rgba(255,255,255,0.04)"
        >
          <Flex gap="8px" align="center">
            <Tooltip label="Alpha Score" fontSize="xs" hasArrow>
              <Flex align="center" gap="4px" cursor="help">
                <Text fontSize="9px" color="rgba(255,255,255,0.3)" fontWeight="bold">α</Text>
                <Text fontSize="10.5px" fontWeight="800" color={alphaColor} fontFamily="monospace">
                  {token.alpha_score.toFixed(0)}
                </Text>
              </Flex>
            </Tooltip>
            {token.ds_listing_age_seconds !== undefined && token.ds_listing_age_seconds > 0 && (
              <Tooltip label="DexScreener Age" fontSize="xs" hasArrow>
                <Text fontSize="9px" color="rgba(255,255,255,0.3)" cursor="help" fontWeight="bold" fontFamily="monospace">
                  DS {formatAge(token.ds_listing_age_seconds)}
                </Text>
              </Tooltip>
            )}
          </Flex>
          <QuickBuyButton mint={token.mint} symbol={token.symbol} />
        </Flex>
      </Box>
    </>
  )
}
