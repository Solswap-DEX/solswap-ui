import { memo } from 'react'
import { DialogTypes } from '@/constants/dialogs'
import { useDialogsStore } from '@/store/useDialogsStore'
import { ThirdPartyWarningDialog } from '@/components/Dialogs/ThirdPartyWarningDialog'
import { VestingEditDialog } from '@/components/Dialogs/VestingDialogs/VestingEditDialog'

export const DialogManager = memo(() => {
  const openDialog = useDialogsStore((s) => s.openDialog)
  const closeDialog = useDialogsStore((s) => s.closeDialog)
  const activeDialog = useDialogsStore((state) => state.activeDialog)
  if (!activeDialog) return null

  const modalProps = {
    setIsOpen: (isOpen: boolean) => {
      isOpen ? openDialog(activeDialog) : closeDialog()
    }
  }

  return DialogTypes.match(activeDialog, {
    ThirdPartyWarning: (args) => <ThirdPartyWarningDialog {...args} {...modalProps} />,
    VestingEdit: (args) => <VestingEditDialog {...args} {...modalProps} />,
    default: () => null
  })
})
