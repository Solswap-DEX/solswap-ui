import { Flex, Text, Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import useScroll from '@/hooks/useScroll'
import Button from '../Button'
import Logo from './images/Logo'
import LogoLegacy from './images/LogoLegacy'

export default function Header() {
  const { pageYOffset, isScrollup } = useScroll()
  const [headerOpacity, setHeaderOpacity] = useState(0)

  useEffect(() => {
    if (pageYOffset > 600 && !isScrollup) {
      setHeaderOpacity((p) => {
        p += 0.1
        return p > 1 || pageYOffset > 1200 ? 1 : p
      })
    } else if (pageYOffset < 1200 && isScrollup) {
      setHeaderOpacity((p) => {
        p -= 0.1
        return p < 0 || pageYOffset < 600 ? 0 : p
      })
    }
  }, [pageYOffset, isScrollup])

  return (
    <>
      <Box w="100%" bg="var(--background-light)" color="var(--text-secondary)" py={2} textAlign="center" fontSize="sm" borderBottom="1px solid var(--primary)">
        <Text><strong>SolSwap</strong> — An independent decentralized exchange on Solana, developed by <strong>ArtLogic Labs</strong>.</Text>
      </Box>
      <Flex justify={['center', 'flex-start']} pl={[0, 77]} py={6}>
        <Logo />
      </Flex>
      <Flex
        position="fixed"
        justify={['center', 'space-between']}
        align="center"
        px={[0, 77]}
        py={6}
        opacity={headerOpacity}
        bg="var(--background-dark)"
        w="100%"
        zIndex="10"
      >
        <LogoLegacy />
        <Button ml={[4, 0]} w={['fit-content', '180px']} size={['sm', 'md']}>
          Launch App
        </Button>
      </Flex>
    </>
  )
}
