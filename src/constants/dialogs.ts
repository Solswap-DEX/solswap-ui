import { TagsOf, UnionOf, ofType, unionize } from 'unionize'

type SharedDialogProps = { setIsOpen: (open: boolean) => void }
export type DialogProps<T> = T & SharedDialogProps

export type ThirdPartyWarningDialogProps = {
  url: string
}

export type VestingEditDialogProps = {
  remainingAmount: number
  save: () => void
}

export const DialogTypes = unionize(
  {
    ThirdPartyWarning: ofType<ThirdPartyWarningDialogProps>(),
    VestingEdit: ofType<VestingEditDialogProps>()
  },
  { tag: 'type' as const, value: 'props' as const }
)
export type DialogType = UnionOf<typeof DialogTypes>
export type DialogTypesTypes = TagsOf<typeof DialogTypes>
