import { useState, useRef } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Text,
  VStack,
  useToast
} from '@chakra-ui/react'
import { RadarToken } from './radar.types'

export function StopLossModal({
  isOpen,
  onClose,
  token,
  walletAddress
}: {
  isOpen: boolean
  onClose: () => void
  token: RadarToken | null
  walletAddress?: string
}) {
  const [stopLossPct, setStopLossPct] = useState(20)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()

  const handleSubmit = async () => {
    if (!walletAddress || !token) return

    setIsLoading(true)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_RADAR_WS_URL?.replace('ws', 'http') || 'http://localhost:3333'}/radar/watch`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mint: token.mint,
          wallet: walletAddress,
          entry_price: token.price_usd,
          stop_loss_pct: stopLossPct
        })
      })

      if (res.ok) {
        setIsSuccess(true)
      } else {
        throw new Error('Failed')
      }
    } catch {
      toast({
        title: 'Failed to set alert',
        status: 'error',
        duration: 3000
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (!token) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bg="#1a1a1a" color="white">
        <ModalHeader>Stop Loss Alert</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {isSuccess ? (
            <VStack spacing={4} py={4}>
              <Text color="green.300" fontSize="lg">
                ✓ Alert set.
              </Text>
              <Text fontSize="sm" color="gray.400">
                We will notify you if price drops {stopLossPct}%
              </Text>
              <Text fontSize="xs" color="gray.500" textAlign="center">
                Stop loss alerts are notifications only. You must execute the swap manually.
              </Text>
            </VStack>
          ) : (
            <VStack spacing={4}>
              <Text>
                Alert me when <Text as="span" color="red.300">{token.symbol}</Text> drops{' '}
                <Text as="span" fontWeight="bold" color="white">
                  {stopLossPct}%
                </Text>{' '}
                from entry
              </Text>

              <Input
                type="number"
                min={5}
                max={50}
                value={stopLossPct}
                onChange={(e) => setStopLossPct(Number(e.target.value))}
                bg="#2a2a2a"
                textAlign="center"
                fontSize="xl"
                fontFamily="'Courier New', monospace"
              />

              <Button
                colorScheme="green"
                width="full"
                onClick={handleSubmit}
                isLoading={isLoading}
              >
                Set Alert
              </Button>

              <Text fontSize="xs" color="gray.500" textAlign="center">
                Stop loss alerts are notifications only. You must execute the swap manually.
              </Text>
            </VStack>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}