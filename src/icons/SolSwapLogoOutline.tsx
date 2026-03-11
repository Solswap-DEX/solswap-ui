import { SvgIcon } from './type'
import Image from 'next/image'

export default function SolSwapLogoOutline(props: SvgIcon) {
  const { width = 24, height = 24, ...rest } = props as any
  return (
    <Image
      src="/logo.png"
      alt="SolSwap"
      width={typeof width === 'string' ? parseInt(width) || 24 : width}
      height={typeof height === 'string' ? parseInt(height) || 24 : height}
      style={{ objectFit: 'contain' }}
    />
  )
}
