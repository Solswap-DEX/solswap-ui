import { SvgIcon } from './type'
import Image from 'next/image'

export default function SolSwapLogo(props: SvgIcon) {
  const { width = 40, height = 40, ...rest } = props as any
  return (
    <Image
      src="/logo.png"
      alt="SolSwap"
      width={typeof width === 'string' ? parseInt(width) || 40 : width}
      height={typeof height === 'string' ? parseInt(height) || 40 : height}
      style={{ objectFit: 'contain' }}
    />
  )
}
