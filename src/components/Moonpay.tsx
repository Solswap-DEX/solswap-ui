import { Box, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, useDisclosure } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { OnramperWidget } from '@/features/Onramper/OnramperWidget'

export function MoonpayBuy(props: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box cursor="pointer" onClick={onOpen}>
        {props.children}
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
        <ModalOverlay />
        <ModalContent bg="#13141F" borderRadius="2xl">
          <ModalCloseButton zIndex={10} color="white" />
          <ModalBody p={0} overflow="hidden" borderRadius="2xl">
            <OnramperWidget />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export function MoonpaySell(props: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box cursor="pointer" onClick={onOpen}>
        {props.children}
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
        <ModalOverlay />
        <ModalContent bg="#13141F" borderRadius="2xl">
          <ModalCloseButton zIndex={10} color="white" />
          <ModalBody p={0} overflow="hidden" borderRadius="2xl">
            <OnramperWidget />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
