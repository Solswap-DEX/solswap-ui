import { SvgIcon } from '@/icons/type'

export default function Logo(props: SvgIcon) {
  const { width = 140, height = 30 } = props

  return (
    <svg width={width} height={height} viewBox="0 0 140 30" fill="none" className="chakra-icon" {...props}>
      <text
        x="0"
        y="24"
        fontFamily="system-ui, sans-serif"
        fontSize="24"
        fontWeight="900"
        fill="url(#solswap_gradient)"
        letterSpacing="-0.5"
      >
        SOLSWAP
      </text>
      <defs>
        <linearGradient id="solswap_gradient" x1="0" y1="0" x2="140" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00BCD4" />
          <stop offset="1" stopColor="#00E5A0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
