import { Box, Tooltip } from '@chakra-ui/react'
import { useState } from 'react'

export function CopyAddress({ mint }: { mint: string }) {
  const [copied, setCopied] = useState(false)

  const shortAddr = mint.length > 12
    ? `${mint.slice(0, 4)}..${mint.slice(-4)}`
    : mint

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation()
    navigator.clipboard.writeText(mint).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <Tooltip label={copied ? '✓ Copied!' : mint} placement="top" hasArrow>
      <Box
        as="span"
        fontSize="10px"
        color={copied ? '#00c853' : 'gray.500'}
        fontFamily="'Courier New', monospace"
        cursor="pointer"
        onClick={handleCopy}
        transition="color 0.2s"
        _hover={{ color: 'gray.300' }}
        userSelect="none"
      >
        {copied ? '✓ copied' : shortAddr}
      </Box>
    </Tooltip>
  )
}
