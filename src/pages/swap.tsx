import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Swap = dynamic(() => import('@/features/Swap'))

function SwapPage() {
  const router = useRouter()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (!router.isReady) return

    const { query, pathname } = router
    let needsRedirect = false
    const newQuery = { ...query }

    if (!query.referrer) {
      newQuery.referrer = '5KUA4a4qFusTvJeSquKsBSEPvhiVedvaj8hE8pVp2vmz'
      needsRedirect = true
    }
    
    // Also inject default USDC pair if arriving strictly at /swap or /swap/
    if (Object.keys(query).length === 0 || (!query.inputMint && !query.outputMint)) {
       newQuery.inputMint = 'sol'
       newQuery.outputMint = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'
       needsRedirect = true
    }

    if (needsRedirect) {
      router.replace({ pathname, query: newQuery }, undefined, { shallow: true })
    }
    setIsReady(true)
  }, [router.isReady, router.query, router.pathname])

  if (!isReady) return null

  return <Swap />
}

export default SwapPage

export async function getStaticProps() {
  return {
    props: { title: 'Swap' }
  }
}
