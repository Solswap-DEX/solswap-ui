import { useState } from 'react'
import { Box, Button, ButtonProps } from '@chakra-ui/react'
import { colors } from '@/theme/cssVariables/colors'
import CircleCheck from '@/icons/misc/CircleCheck'
import CopyIcon from '@/icons/misc/CopyIcon'
import { SvgIcon } from '@/icons/type'

export type CopyButtonProps = {
  value?: string
  buttonType?: 'text' | 'icon' | 'default'
  children?: React.ReactNode
  Icon?: React.ComponentType<SvgIcon>
  onCopy?: () => void
} & ButtonProps

export const CopyButton = ({ value, buttonType = 'default', children, Icon, onCopy, ...buttonProps }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    if (!value) return

    setCopied(true)
    navigator.clipboard.writeText(value)
    setTimeout(() => setCopied(false), 500)
    onCopy?.()
  }

  return buttonType === 'text' ? (
    <Box
      cursor="pointer"
      display="inline-flex"
      alignItems="center"
      gap="0.5ch"
      minWidth="max-content"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        copy()
      }}
      sx={
        copied
          ? {
              filter: 'brightness(0.8)'
            }
          : {
              '&:hover': {
                filter: 'brightness(1.1)',
                textDecoration: 'underline'
              }
            }
      }
    >
      {children}
      {copied ? <CircleCheck color={colors.textSecondary} /> : <CopyIcon color={colors.textTertiary} />}
    </Box>
  ) : buttonType === 'icon' ? (
    copied ? (
      <CircleCheck color={colors.textSecondary} />
    ) : Icon ? (
      <Icon
        cursor="pointer"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          copy()
        }}
      />
    ) : (
      <CopyIcon
        cursor="pointer"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          copy()
        }}
        color={colors.textTertiary}
      />
    )
  ) : (
    <Button
      {...buttonProps}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        copy()
      }}
    >
      {children ?? (copied ? 'COPIED' : 'COPY')}
    </Button>
  )
}
