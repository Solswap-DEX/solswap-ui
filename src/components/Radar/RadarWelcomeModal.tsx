import { useState, useEffect } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Text,
  VStack,
  Box,
  Flex
} from '@chakra-ui/react'

export function RadarWelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasSeen = localStorage.getItem('radar_welcome_seen')
    if (!hasSeen) {
      setIsOpen(true)
    }
  }, [])

  const handleClose = () => {
    localStorage.setItem('radar_welcome_seen', 'true')
    setIsOpen(false)
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} isCentered size="lg">
      <ModalOverlay backdropFilter="blur(10px)" bg="blackAlpha.800" />
      <ModalContent bg="#0A1A2F" border="1px solid" borderColor="#00c853" borderRadius="xl" p={2}>
        <ModalHeader color="white" fontFamily="'Courier New', monospace" fontSize="2xl">
          Welcome to SolSwap RADAR 🛰️
        </ModalHeader>
        
        <ModalBody pb={6}>
          <VStack align="stretch" spacing={5}>
            <Text color="gray.300" fontSize="md">
              We monitor the Solana blockchain in real-time to find alpha opportunities before anyone else. Radar is now your default landing experience.
            </Text>

            <Box bg="blackAlpha.500" p={4} borderRadius="md" borderLeft="4px solid" borderColor="#00c853">
              <Text color="white" fontWeight="bold" mb={2}>📈 How to read the metrics:</Text>
              <Flex direction="column" gap={2}>
                <Text color="gray.400" fontSize="sm">
                  <strong style={{color: '#00c853'}}>Alpha Score:</strong> AI-driven rating from 1-100. Higher is better. Based on momentum, liquidity, and holder growth.
                </Text>
                <Text color="gray.400" fontSize="sm">
                  <strong style={{color: '#ff1744'}}>Risk:</strong> Scans for mint authorities, LP locks, and wallet concentration. If you see ☣️ RUG PROBABLE, stay away.
                </Text>
              </Flex>
            </Box>
            
            <Text color="gray.400" fontSize="sm" fontStyle="italic">
              * Radar processes data at sub-second latency directly from Helius nodes. Trade safely.
            </Text>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button 
            onClick={handleClose} 
            w="full" 
            bg="#00c853" 
            color="black" 
            _hover={{ bg: '#00e676' }}
            size="lg"
            fontFamily="'Courier New', monospace"
            fontWeight="bold"
          >
            START SCANNING 🚀
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
