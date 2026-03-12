import { OnramperWidget } from '@/features/Onramper/OnramperWidget'
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, useDisclosure as useChakraDisclosure } from '@chakra-ui/react'

export default function WalletOnramp() {
  const { wallets, select, connected, connecting } = useWallet()
  const { t } = useTranslation()
  const { setVisible, visible } = useWalletModal()
  const { isOpen, onOpen, onClose } = useChakraDisclosure()

  const handleClose = useCallback(() => setVisible(false), [setVisible])
  const handleOpen = useCallback(() => setVisible(true), [setVisible])

  const handleSelectWallet = useEvent((wallet: Wallet) => {
    select(wallet.adapter.name)
    handleClose()
    setTimeout(() => {
      localStorage.removeItem(WALLET_STORAGE_KEY)
    }, 0)
  })

  if (connected)
    return (
      <>
        <Box className="p-mp__submit" maxW="320px" w="100%" m="auto">
            <Button
              width="full"
              variant="solid"
              size="md"
              height="52px"
              px="40px"
              borderRadius="50em"
              border="2px solid transparent"
              color={colors.text02}
              onClick={onOpen}
            >
              Buy Crypto
            </Button>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
            <ModalOverlay />
            <ModalContent bg="transparent" boxShadow="none">
                <ModalCloseButton color="white" zIndex={10} />
                <ModalBody p={0}>
                    <OnramperWidget />
                </ModalBody>
            </ModalContent>
        </Modal>
      </>
    )
  return (
    <Box>
      <Button isLoading={connecting} loadingText="Connecting.." onClick={handleOpen}>
        {t('button.connect_wallet')}
      </Button>
      <SelectWalletModal wallets={wallets} isOpen={visible} onClose={handleClose} onSelectWallet={handleSelectWallet} />
    </Box>
  )
}
