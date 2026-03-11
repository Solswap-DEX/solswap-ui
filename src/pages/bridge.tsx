import dynamic from 'next/dynamic'
const Bridge = dynamic(() => import('@/features/Bridge/BridgeWidget').then(mod => ({ default: mod.BridgeWidget })))

function BridgePage() {
  return <Bridge />
}

export default BridgePage

export async function getStaticProps() {
  return {
    props: { title: 'Bridge' }
  }
}
