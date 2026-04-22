import { Box, Flex, Text } from '@chakra-ui/react'
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
              <Flex align="baseline" gap="4px">
                <Text fontSize="11px" fontWeight="800" color="white" isTruncated maxW="70px" lineHeight="1.2">
                  {token.symbol}
                </Text>
                <Text fontSize="9px" color="gray.600" isTruncated maxW="60px" lineHeight="1.2">
                  {token.name}
                </Text>
              </Flex>
              <Flex align="center" gap="4px" mt="2px">
                <Text fontSize="9px" color="gray.600" fontFamily="monospace">
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
          <Flex gap="6px" align="center" flexShrink={0}>
            <Box textAlign="right">
              <Text fontSize="8px" color="rgba(255,255,255,0.25)" lineHeight="1">V</Text>
              <Text fontSize="9px" fontWeight="700" color="white" fontFamily="monospace" lineHeight="1.3">
                {formatUsd(token.volume_1m)}
              </Text>
            </Box>
            <Box textAlign="right">
              <Text fontSize="8px" color="rgba(255,255,255,0.25)" lineHeight="1">MC</Text>
              <Text fontSize="9px" fontWeight="700" color={alphaColor} fontFamily="monospace" lineHeight="1.3">
                {token.market_cap ? formatUsd(token.market_cap) : '—'}
              </Text>
            </Box>
          </Flex>
        </Flex>

        {/* ── Row 2: Creator + Fee / Alpha badge ── */}
        <Flex justify="space-between" align="center" mb="4px">
          <Flex align="center" gap="5px">
            <CopyAddress mint={token.mint} />
            {token.fee_ratio !== undefined && token.fee_ratio > 0 && (
              <Text fontSize="9px" color="rgba(255,255,255,0.2)" fontFamily="monospace">
                F≡{token.fee_ratio.toFixed(2)}
              </Text>
            )}
          </Flex>
          <Box
            px="5px" py="1px"
            bg={`${alphaColor}18`}
            border={`1px solid ${alphaColor}33`}
            borderRadius="3px"
            fontSize="8px" fontWeight="700" color={alphaColor}
            whiteSpace="nowrap"
          >
            {token.alpha_label}
          </Box>
        </Flex>

        {/* ── Row 3: Holders · B/S · Risk · PriceChange ── */}
        <Flex justify="space-between" align="center" mb="5px">
          <Flex gap="6px" align="center">
            {/* Holders */}
            <Flex align="center" gap="2px">
              <Text fontSize="9px" color="rgba(255,255,255,0.3)">👤</Text>
              <Text fontSize="9px" color="gray.400" fontWeight="600">{token.holders}</Text>
            </Flex>
            {/* Buys */}
            <Flex align="center" gap="1px">
              <Text fontSize="9px" color="#00c853" fontWeight="700">🟢{token.buys_1m}</Text>
            </Flex>
            {/* Sells */}
            <Flex align="center" gap="1px">
              <Text fontSize="9px" color="#ff1744" fontWeight="700">🔴{token.sells_1m}</Text>
            </Flex>
            {/* Risk */}
            <Box
              px="4px" py="0px"
              bg={`${riskColor}18`}
              border={`1px solid ${riskColor}44`}
              borderRadius="3px"
              fontSize="8px" fontWeight="700" color={riskColor}
            >
              {token.risk_level === 'RUG PROBABLE' ? 'RUG' : token.risk_level}
            </Box>
          </Flex>
          {/* Price change 5m */}
          {token.price_change_5m !== undefined && (
            <Text
              fontSize="9px" fontWeight="700" fontFamily="monospace"
              color={token.price_change_5m >= 0 ? '#00c853' : '#ff1744'}
            >
              {token.price_change_5m >= 0 ? '+' : ''}{token.price_change_5m.toFixed(0)}%
            </Text>
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
          <Flex gap="6px" align="center">
            <Text fontSize="8px" color="rgba(255,255,255,0.2)">α</Text>
            <Text fontSize="9px" fontWeight="700" color={alphaColor} fontFamily="monospace">
              {token.alpha_score.toFixed(0)}
            </Text>
            {token.ds_listing_age_seconds !== undefined && token.ds_listing_age_seconds > 0 && (
              <Text fontSize="8px" color="rgba(255,255,255,0.15)">
                DS {formatAge(token.ds_listing_age_seconds)}
              </Text>
            )}
          </Flex>
          <QuickBuyButton mint={token.mint} symbol={token.symbol} />
        </Flex>
      </Box>
    </>
  )
}
