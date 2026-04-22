import { Box } from '@chakra-ui/react'
import { useMemo } from 'react'

/**
 * Generates a synthetic sparkline SVG based on a price change percentage.
 * No real historical data needed — creates a plausible trend line.
 */
export function MiniSparkline({
  priceChange,
  width = 80,
  height = 32
}: {
  priceChange: number | null
  width?: number
  height?: number
}) {
  const { path, color } = useMemo(() => {
    const change = priceChange ?? 0
    const isPositive = change >= 0
    const c = isPositive ? '#00c853' : '#ff1744'

    // Generate synthetic points based on trend direction
    const points: number[] = []
    const numPoints = 12
    const volatility = Math.min(Math.abs(change) * 0.8, 40)
    const trend = change / numPoints

    let value = 50
    for (let i = 0; i < numPoints; i++) {
      value += trend + (Math.random() - 0.5) * volatility
      value = Math.max(5, Math.min(95, value))
      points.push(value)
    }

    // Normalize to SVG coordinates
    const min = Math.min(...points)
    const max = Math.max(...points)
    const range = max - min || 1
    const padding = 2

    const svgPoints = points.map((p, i) => ({
      x: padding + (i / (numPoints - 1)) * (width - padding * 2),
      y: padding + (1 - (p - min) / range) * (height - padding * 2)
    }))

    // Build smooth path using quadratic bezier curves
    let d = `M ${svgPoints[0].x} ${svgPoints[0].y}`
    for (let i = 1; i < svgPoints.length; i++) {
      const prev = svgPoints[i - 1]
      const curr = svgPoints[i]
      const cpx = (prev.x + curr.x) / 2
      d += ` Q ${cpx} ${prev.y} ${curr.x} ${curr.y}`
    }

    return { path: d, color: c }
  }, [priceChange, width, height])

  return (
    <Box w={`${width}px`} h={`${height}px`} flexShrink={0}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Glow effect */}
        <path d={path} stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.2" />
      </svg>
    </Box>
  )
}
