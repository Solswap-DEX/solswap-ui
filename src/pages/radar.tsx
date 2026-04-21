import { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { RadarPage } from '@/components/Radar'
import { useWallet } from '@solana/wallet-adapter-react'
import { AppNavLayout } from '@/components/AppLayout/AppNavLayout'

export default function Radar() {
  const { publicKey } = useWallet()
  const [walletAddress, setWalletAddress] = useState<string>()

  useEffect(() => {
    if (publicKey) {
      setWalletAddress(publicKey.toBase58())
    }
  }, [publicKey])

  return (
    <AppNavLayout>
      <Box p={0}>
        <RadarPage walletAddress={walletAddress} />
      </Box>
    </AppNavLayout>
  )
}