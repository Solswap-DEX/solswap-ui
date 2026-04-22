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

function formatDsAge(seconds?: number): string {
  if (!seconds) return ''
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m`
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h`
  return `${Math.floor(seconds / 86400)}d`
}

function getPriceChangeColor(pct?: number): string {
  if (!pct) return 'gray.500'
  return pct >= 0 ? '#00c853' : '#ff1744'
}

function getRiskColor(level: string): string {
  switch (level) {
    case 'LOW': return '#00c853'
    case 'MEDIUM': return '#ffd600'
    case 'HIGH': return '#ff6d00'
    case 'RUG PROBABLE': return '#ff1744'
    default: return 'gray.500'
  }
}

function getAlphaColor(label: string): string {
  if (label.includes('HIGH ALPHA') || label.includes('GRADUATING')) return '#00e676'
  if (label.includes('EARLY SIGNAL')) return '#00b0ff'
  if (label.includes('WATCH')) return '#ffd600'
  if (label.includes('SPECULATIVE')) return '#ff9800'
  if (label.includes('RUG')) return '#ff1744'
  return 'rgba(255,255,255,0.3)'
}

export function TrenchCard({ token }: { token: RadarToken }) {
  const router = useRouter()
  const isGraduating = token.is_pumpfun && !token.is_graduated && (token.bonding_curve_pct ?? 0) >= 80
  const isRug = token.risk_level === 'RUG PROBABLE'
  const alphaColor = getAlphaColor(token.alpha_label)

  const borderColor = isGraduating
    ? 'rgba(0,230,118,0.35)'
    : isRug
      ? 'rgba(255,23,68,0.25)'
      : 'rgba(255,255,255,0.06)'

  const glowColor = isGraduating
    ? '0 0 20px rgba(0,230,118,0.08)'
    : 'none'

  return (
    <>
      <style>{`
        @keyframes bcPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes cardSlideIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <Box
        p="10px"
        bg={isGraduating ? 'rgba(0,230,118,0.04)' : 'rgba(255,255,255,0.025)'}
        borderRadius="10px"
        border={`1px solid ${borderColor}`}
        boxShadow={glowColor}
        cursor="pointer"
        onClick={() => router.push(`/swap?inputMint=So11111111111111111111111111111111111111112&outputMint=${token.mint}`)}
        transition="all 0.18s ease"
        _hover={{ bg: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.12)', transform: 'translateY(-1px)' }}
        position="relative"
        overflow="hidden"
        style={{ animation: 'cardSlideIn 0.25s ease-out' }}
      >
        {/* Top accent line for graduating tokens */}
        {isGraduating && (
          <Box
            position="absolute" top={0} left={0} right={0} h="2px"
            bgGradient="linear(to-r, transparent, #00e676, transparent)"
          />
        )}

        {/* ── Row 1: Volume + MarketCap ── */}
        <Flex justify="space-between" align="center" mb="6px">
          <Flex align="center" gap="6px">
            <TokenAvatar mint={token.mint} symbol={token.symbol} size={36} imageUrl={token.image_url} />
            <Box minW={0}>
              <Flex align="center" gap="5px">
                <Text fontSize="11px" fontWeight="800" color="white" isTruncated maxW="90px">
                  {token.symbol}
                </Text>
                <Text fontSize="9px" color="gray.500" isTruncated maxW="70px">
                  {token.name}
                </Text>
              </Flex>
              <Flex align="center" gap="5px" mt="1px">
                <Box
                  px="5px" py="1px"
                  bg="rgba(255,255,255,0.06)"
                  borderRadius="4px"
                  fontSize="9px"
                  color="gray.400"
                  fontWeight="600"
                >
                  {formatAge(token.age_seconds)}
                </Box>
                <SocialLinks
                  twitter={token.social_twitter}
                  telegram={token.social_telegram}
                  website={token.social_website}
                  mint={token.mint}
                />
              </Flex>
            </Box>
          </Flex>

          <Box textAlign="right" flexShrink={0}>
            <Flex gap="8px" justify="flex-end" align="center">
              <Box>
                <Text fontSize="9px" color="rgba(255,255,255,0.3)" textAlign="right">V</Text>
                <Text fontSize="10px" fontWeight="700" color="white" fontFamily="'Courier New', monospace">
                  {formatUsd(token.volume_1m)}
                </Text>
              </Box>
              <Box>
                <Text fontSize="9px" color="rgba(255,255,255,0.3)" textAlign="right">MC</Text>
                <Text
                  fontSize="10px" fontWeight="700"
                  color={alphaColor}
                  fontFamily="'Courier New', monospace"
                >
                  {token.market_cap ? formatUsd(token.market_cap) : '—'}
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>

        {/* ── Row 2: Creator + Alpha Label ── */}
        <Flex justify="space-between" align="center" mb="6px">
          <CopyAddress mint={token.mint} />
          <Box
            px="6px" py="1px"
            bg={`${alphaColor}18`}
            border={`1px solid ${alphaColor}44`}
            borderRadius="4px"
            fontSize="9px"
            fontWeight="700"
            color={alphaColor}
            whiteSpace="nowrap"
          >
            {token.alpha_label}
          </Box>
        </Flex>

        {/* ── Row 3: Holders + Buys/Sells + Price Changes ── */}
        <Flex justify="space-between" align="center" mb="6px">
          <Flex gap="8px" align="center">
            <Flex align="center" gap="3px">
              <Text fontSize="9px" color="rgba(255,255,255,0.3)">👤</Text>
              <Text fontSize="9px" fontWeight="600" color="gray.400">{token.holders.toLocaleString()}</Text>
            </Flex>
            <Flex align="center" gap="3px">
              <Text fontSize="9px" color="#00c853" fontWeight="600">B{token.buys_1m}</Text>
              <Text fontSize="9px" color="rgba(255,255,255,0.2)">/</Text>
              <Text fontSize="9px" color="#ff1744" fontWeight="600">S{token.sells_1m}</Text>
            </Flex>
            <Box
              px="5px" py="1px"
              bg={`${getRiskColor(token.risk_level)}18`}
              border={`1px solid ${getRiskColor(token.risk_level)}44`}
              borderRadius="4px"
              fontSize="8px"
              fontWeight="700"
              color={getRiskColor(token.risk_level)}
            >
              {token.risk_level}
            </Box>
          </Flex>
          {token.price_change_5m !== undefined && (
            <Text
              fontSize="9px"
              fontWeight="700"
              color={getPriceChangeColor(token.price_change_5m)}
              fontFamily="'Courier New', monospace"
            >
              {token.price_change_5m >= 0 ? '+' : ''}{token.price_change_5m.toFixed(1)}%
            </Text>
          )}
        </Flex>

        {/* ── Row 4: Buy/Sell pressure bar ── */}
        <Box mb="6px">
          <BuySellBar buys={token.buys_1m} sells={token.sells_1m} />
        </Box>

        {/* ── Row 5: Bonding Curve (PumpFun only) ── */}
        {token.is_pumpfun && !token.is_graduated && token.bonding_curve_pct !== undefined && (
          <Box mb="6px">
            <BondingCurveBar pct={token.bonding_curve_pct} is_graduated={false} />
          </Box>
        )}
        {token.is_graduated && (
          <Box mb="6px">
            <BondingCurveBar pct={100} is_graduated={true} />
          </Box>
        )}

        {/* ── Row 6: DS age + Alpha Score + Quick Buy ── */}
        <Flex justify="space-between" align="center" pt="6px" borderTop="1px solid rgba(255,255,255,0.04)">
          <Flex gap="8px" align="center">
            {token.ds_listing_age_seconds !== undefined && token.ds_listing_age_seconds > 0 && (
              <Text fontSize="9px" color="rgba(255,255,255,0.25)">
                DS {formatDsAge(token.ds_listing_age_seconds)}
              </Text>
            )}
            <Flex align="center" gap="3px">
              <Text fontSize="9px" color="rgba(255,255,255,0.25)">α</Text>
              <Text fontSize="9px" fontWeight="700" color={alphaColor} fontFamily="'Courier New', monospace">
                {token.alpha_score.toFixed(0)}
              </Text>
            </Flex>
          </Flex>
          <QuickBuyButton mint={token.mint} symbol={token.symbol} />
        </Flex>
      </Box>
    </>
  )
}
