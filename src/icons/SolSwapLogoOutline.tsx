import { SvgIcon } from './type'

export default function SolSwapLogoOutline(props: SvgIcon) {
  const { width, height, ...rest } = props as any
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt="SolSwap"
      width={120}
      height={28}
      style={{ objectFit: 'contain', height: '28px', width: 'auto' }}
    />
  )
}
