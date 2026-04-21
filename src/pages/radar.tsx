import dynamic from 'next/dynamic'

const Radar = dynamic(() => import('@/components/Radar/RadarPage'))

function RadarPageRoute() {
  return <Radar />
}

export default RadarPageRoute

export async function getStaticProps() {
  return {
    props: { title: 'RADAR' }
  }
}