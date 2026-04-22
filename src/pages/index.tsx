import dynamic from 'next/dynamic'
import { GetStaticProps } from 'next'

const RadarPage = dynamic(
  () => import('@/components/Radar/RadarPage').then(mod => {
    if (typeof mod.RadarPage === 'function') return { default: mod.RadarPage }
    if (typeof mod.default === 'function') return { default: mod.default }
    throw new Error('[RADAR] RadarPage component not found in module')
  }),
  { ssr: false }
)

export default function Home() {
  return <RadarPage />
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: { title: 'RADAR | SolSwap' } }
}
