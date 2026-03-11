import { SvgIcon } from './type'

export default function SolSwapLogo(props: SvgIcon) {
  const { width, height, ...rest } = props as any
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt="SolSwap"
      width={160}
      height={40}
      style={{ objectFit: 'contain', height: '40px', width: 'auto' }}
    />
  )
}
