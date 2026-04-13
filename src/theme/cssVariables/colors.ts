export const darkColors: Record<keyof typeof colors, string> = {
  // app main bg color — SolSwap Cybernetic Teal/Emerald Identity
  primary: '#00E5A0',
  secondary: '#00BCD4',
  secondary10: 'rgba(0, 188, 212, 0.1)',

  // component color — Deep space dark with slight teal tint
  backgroundDark: '#0A0F1A',
  backgroundDark50: '#0A0F1A80',
  backgroundMedium: '#101829',
  backgroundLight: '#182236',
  backgroundLight50: '#18223688',
  backgroundLight30: '#1822364d',
  backgroundTransparent12: 'rgba(0, 229, 160, 0.12)',
  backgroundTransparent07: 'rgba(0, 229, 160, 0.07)',
  backgroundTransparent10: 'rgba(0, 229, 160, 0.1)',

  // text
  textPrimary: '#E8F0F2',
  textSecondary: '#B0E0E6',
  textTertiary: '#00E5A0',
  textRevertPrimary: '#0A0F1A',

  textLink: '#00E5A0',

  /** muted text */
  textQuaternary: '#5B7A8A',
  /** inverted text */
  textQuinary: '#0A0F1A',
  /** muted transparent */
  textSenary: 'rgba(91, 122, 138, 0.5)',
  /** accent text */
  textSeptenary: '#00E5A0',
  /** highlight purple */
  textPurple: '#6C63FF',
  /** highlight pink */
  textPink: '#FF6B9D',

  textLaunchpadLink: '#00E5A0',

  // button — Emerald gradient identity
  buttonPrimary: '#00E5A0',
  buttonPrimary__01: '#00E5A0',
  buttonPrimary__02: '#00BCD4',
  buttonSolidText: '#0A0F1A',
  buttonSecondary: '#00BCD4',

  // switch
  switchOn: '#00E5A0',
  switchOff: '#101829',

  // select
  selectActive: '#00E5A0',
  selectActiveSecondary: '#6C63FF',
  selectInactive: 'rgba(16, 24, 41, 0.5)',

  // chart — Vibrant multi-color palette
  chart01: '#00E5A0',
  chart02: '#6C63FF',
  chart03: '#00BCD4',
  chart04: '#FF6B9D',
  chart05: '#FF9F43',
  chart06: '#FECA57',
  chart07: '#5F27CD',
  chart08: '#00E5A0',
  chart09: 'rgba(108, 99, 255, 0.2)',

  // Icon
  iconBg: '#101829',
  iconEmptyStroke: '#0A0F1A',

  // success/warning/error/info
  semanticSuccess: '#00E5A0',
  semanticError: '#FF6B9D',
  semanticWarning: '#FECA57',
  semanticNeutral: '#5B7A8A',
  semanticFocus: '#00BCD4',
  semanticFocusShadow: 'rgba(0, 188, 212, 0.2)',

  // Tab
  tabFolderTabListBg: 'var(--background-medium)',

  // Step
  stepActiveBg: 'var(--background-light)',
  stepHoofBg: 'var(--primary)',

  // +1% is priceFloatingUp; -1% is priceFloatingDown
  priceFloatingUp: '#00E5A0',
  priceFloatingDown: '#FF6B9D',
  priceFloatingFlat: '#5B7A8A',

  // tooltip
  tooltipBg: '#0D1520',

  popoverBg: '#0D1520',

  // scrollbar
  scrollbarThumb: 'rgba(0, 229, 160, 0.2)',

  // badge
  badgePurple: 'rgba(108, 99, 255, 0.5)',
  badgeBlue: 'rgba(0, 188, 212, 0.5)',

  // divider
  dividerBg: '#1E2D42',

  // input
  inputMask: '#0A0F1A66',

  // customize — SolSwap unique identity
  backgroundApp: '#0A0F1A',
  solidButtonBg: 'linear-gradient(135deg, #00E5A0 0%, #00BCD4 100%)',
  outlineButtonBg: 'rgba(0, 229, 160, 0.1)',
  filledProgressBg: '#00E5A0',
  transparentContainerBg: '#101829',
  cardStackBg: '#182236',
  modalContainerBg: 'rgba(10, 15, 26, 0.95)',
  infoButtonBg: 'rgba(0, 229, 160, 0.1)',
  warnButtonBg: '#FECA5733',
  warnButtonLightBg: '#FECA571A',
  buttonBg01: '#182236',
  lightPurple: '#00BCD4',
  background01: '#0A0F1A',
  background02: '#101829',
  background03: '#FF6B9D1A',
  cardBorder01: '#1E2D42',
  text01: '#E8F0F2',
  text02: '#E8F0F2',
  text03: '#5B7A8A',
  /** brand gradient — SolSwap signature emerald-to-cyan */
  brandGradient: 'linear-gradient(135deg, #00E5A0 0%, #00BCD4 100%)',
  dividerDashGradient: 'repeating-linear-gradient(to right, #1E2D42 0 5px, transparent 5px 10px)',

  tokenAvatarBg: '#0D1520',

  panelCardShadow: '0px 4px 24px rgba(0, 229, 160, 0.08)',
  panelCardBorder: '1px solid #1E2D42',

  positive: '#00E5A0',
  negative: '#FF6B9D'
}

export const lightColors: Partial<typeof darkColors> = {
  // app main bg color
  primary: '#00C98A',
  secondary: '#0097A7',
  secondary10: 'rgba(0, 151, 167, 0.1)',

  // component color
  backgroundDark: '#E8F5F0',
  backgroundDark50: '#E8F5F080',
  backgroundMedium: '#E8F5F0',
  backgroundLight: '#F0FAF7',
  backgroundLight50: '#F0FAF788',
  backgroundLight30: '#F0FAF74d',
  backgroundTransparent12: 'rgba(0, 201, 138, 0.12)',
  backgroundTransparent07: 'rgba(0, 201, 138, 0.07)',
  backgroundTransparent10: 'rgba(0, 201, 138, 0.1)',

  // text
  textPrimary: '#0A1628',
  textSecondary: '#0A6B52',
  textTertiary: '#0A6B5299',
  textRevertPrimary: '#F0FAF7',

  textLink: '#00966B',

  /** muted */
  textQuaternary: '#A0C4B8',
  /** inverted */
  textQuinary: '#F0FAF7',
  /** muted transparent */
  textSenary: 'rgba(160, 196, 184, 0.5)',
  /** accent */
  textSeptenary: '#00966B',
  /** highlight purple */
  textPurple: '#6C63FF',
  /** highlight pink */
  textPink: '#FF6B9D',

  textLaunchpadLink: '#6C63FF',

  // button
  buttonPrimary: '#0097A7',
  buttonPrimary__01: '#0097A7',
  buttonPrimary__02: '#6C63FF',
  buttonSolidText: '#F0FAF7',
  buttonSecondary: '#00BFA5',

  // switch
  switchOn: '#6C63FF',
  switchOff: '#6C63FF80',

  // select
  selectActive: '#6C63FF',
  selectActiveSecondary: '#6C63FF',
  selectInactive: '#A0C4B8ef',

  // chart
  chart01: '#00C98A',
  chart02: '#00BFA5',
  chart03: '#6C63FF',
  chart04: '#2979FF',
  chart05: '#FF9F43',
  chart06: '#FECA57',
  chart07: '#5F27CD',
  chart08: '#00966B',
  chart09: '#6C63FF33',

  // Icon
  iconBg: '#6C63FF',
  iconEmptyStroke: '#F0FAF7',

  // success/warning/error/info
  semanticSuccess: '#00BFA5',
  semanticError: '#FF6B9D',
  semanticWarning: '#E6A800',
  semanticNeutral: '#A0C4B8',
  semanticFocus: '#6C63FF',
  semanticFocusShadow: '#6C63FF33',

  // Tab
  tabFolderTabListBg: 'var(--background-dark)',

  // Step
  stepActiveBg: 'var(--background-dark-opacity)',
  stepHoofBg: 'var(--secondary)',

  // +1% is priceFloatingUp; -1% is priceFloatingDown
  priceFloatingUp: '#00966B',
  priceFloatingDown: '#FF6B9D',
  priceFloatingFlat: '#888888',

  // tooltip
  tooltipBg: '#fff',

  popoverBg: '#fff',

  // scrollbar
  scrollbarThumb: 'rgba(160, 196, 184, 0.5)',

  // badge
  badgePurple: 'rgba(108, 99, 255, 0.5)',
  badgeBlue: 'rgba(0, 151, 167, 0.5)',

  // divider
  dividerBg: 'rgba(160, 196, 184, 0.3)',

  // input
  inputMask: '#fff3',

  // customize
  backgroundApp: '#fff',

  solidButtonBg: 'linear-gradient(135deg, #0097A7 2.63%, #6C63FF 95.31%)',
  outlineButtonBg: 'linear-gradient(270deg, #6C63FF1a 0%, #0097A71a 100%)',
  filledProgressBg: 'linear-gradient(270deg, #6C63FF 0%, #0097A7 100%)',
  transparentContainerBg: '#F0FAF7',
  cardStackBg: 'linear-gradient(90deg, #E8F5F0 0%, #F0E8FF 100%)',
  modalContainerBg: '#A0C4B812',
  infoButtonBg: '#A0C4B833',
  warnButtonBg: '#FECA5733',
  warnButtonLightBg: '#FECA571A',
  buttonBg01: '#A0C4B81F',
  lightPurple: '#0A6B52',
  background01: '#E8F5F0',
  background02: '#A0C4B833',
  background03: '#FF6B9D1A',
  cardBorder01: '#6C63FF80',
  text01: '#FECA57',
  text02: '#000',
  text03: '#0A6B52',
  /** brand gradient */
  brandGradient: 'linear-gradient(244deg, #6C63FF 8.17%, #00BFA5 101.65%)',
  dividerDashGradient: 'repeating-linear-gradient(to right, currentColor 0 5px, transparent 5px 10px)',

  tokenAvatarBg: 'linear-gradient(127deg, rgba(160, 196, 184, 0.20) 28.69%, rgba(160, 196, 184, 0.00) 100%) #fffe',

  panelCardShadow: 'none',
  panelCardBorder: '1px solid rgba(160, 196, 184, 0.50)',

  positive: '#00BFA5',
  negative: '#FF6B9D'
}
/**
 * note: it is not colors value, but colors css variable
 * color info may change in run-time by setting page, so use runtime css variable
 */
export const colors = {
  // app main bg color
  primary: 'var(--primary)',
  secondary: 'var(--secondary)',
  secondary10: 'var(--secondary10)',

  // component color
  backgroundDark: 'var(--background-dark)',
  backgroundDark50: 'var(--background-dark50)',
  backgroundMedium: 'var(--background-medium)',
  backgroundLight: 'var(--background-light)',
  backgroundLight50: 'var(--background-light50)',
  backgroundLight30: 'var(--background-light30)',
  backgroundTransparent12: 'var(--background-transparent12)',
  backgroundTransparent07: 'var(--background-transparent07)',
  backgroundTransparent10: 'var(--background-transparent10)',

  // text
  /** white */
  textPrimary: 'var(--text-primary)',
  /** #abc4ff */
  textSecondary: 'var(--text-secondary)',
  /** #abc4ff80 */
  textTertiary: 'var(--text-tertiary)',
  textRevertPrimary: 'var(--text-revert-primary)',

  textLink: 'var(--text-link)',

  /** 🤔 what's this */
  textQuaternary: 'var(--text-quaternary)',
  /** 🤔 what's this */
  textQuinary: 'var(--text-quinary)',
  /** 🤔 what's this */
  textSenary: 'var(--text-senary)',
  /** 🤔 what's this */
  textSeptenary: 'var(--text-septenary)',
  /** 🤔 what's this */
  textPurple: 'var(--text-purple)',
  /** 🤔 what's this */
  textPink: 'var(--text-pink)',

  textLaunchpadLink: 'var(--text-launchpad-link)',

  // button
  buttonPrimary: 'var(--button-primary)',
  buttonPrimary__01: 'var(--button-primary__01)',
  buttonPrimary__02: 'var(--button-primary__02)',
  buttonSolidText: 'var(--button-solid-text)',
  buttonSecondary: 'var(--button-secondary)',

  // switch
  switchOn: 'var(--switch-on)',
  switchOff: 'var(--switch-off)',
  selectActive: 'var(--select-active)',
  selectActiveSecondary: 'var(--select-active-secondary)',
  selectInactive: 'var(--select-inactive)',

  // chart
  chart01: 'var(--chart01)',
  chart02: 'var(--chart02)',
  chart03: 'var(--chart03)',
  chart04: 'var(--chart04)',
  chart05: 'var(--chart05)',
  chart06: 'var(--chart06)',
  chart07: 'var(--chart07)',
  chart08: 'var(--chart08)',
  chart09: 'var(--chart09)',

  // Icon
  iconBg: 'var(--icon-bg)',
  iconEmptyStroke: 'var(--icon-empty-stroke)',

  // success/warning/error/info
  semanticSuccess: 'var(--semantic-success)',
  semanticError: 'var(--semantic-error)',
  semanticWarning: 'var(--semantic-warning)',
  semanticNeutral: 'var(--semantic-neutral)',
  semanticFocus: 'var(--semantic-focus)',
  semanticFocusShadow: 'var(--semantic-focus-shadow)',

  // Tab
  tabFolderTabListBg: 'var(--tab-folder-tab-list-bg)',

  // Step
  stepActiveBg: 'var(--step-active-bg)',
  stepHoofBg: 'var(--step-hoof-bg)',

  // +1% is priceFloatingUp; -1% is priceFloatingDown
  priceFloatingUp: 'var(--price-floating-up)',
  priceFloatingDown: 'var(--price-floating-down)',
  priceFloatingFlat: 'var(--price-floating-flat)',

  // tooltip (this color is not in figma ui color system,but in figma ui page)
  tooltipBg: 'var(--tooltip-bg)',

  popoverBg: 'var(--popover-bg)',

  //customize component theme (by V3 frontend coder)
  scrollbarThumb: 'var(--scrollbar-thumb)',

  // badge
  badgePurple: 'var(--badge-purple)',
  badgeBlue: 'var(--badge-blue)',

  // divider
  dividerBg: 'var(--divider-bg)',

  // input
  inputMask: 'var(--input-mask)',

  // customize (by V3 frontend coder)
  backgroundApp: 'var(--background-app)',
  solidButtonBg: 'var(--solid-button-bg)',
  outlineButtonBg: 'var(--outline-button-bg)',
  filledProgressBg: 'var(--filled-progress-bg)',
  transparentContainerBg: 'var(--transparent-container-bg)',
  cardStackBg: 'var(--card-stack-bg)',
  modalContainerBg: 'var(--modal-container-bg)',
  infoButtonBg: 'var(--info-button-bg)',
  warnButtonBg: 'var(--warn-button-bg)',
  warnButtonLightBg: 'var(--warn-button-light-bg)',
  buttonBg01: 'var(--button-bg-01)',
  lightPurple: 'var(--divider-bg-light-purple)',
  background01: 'var(--background-01)',
  background02: 'var(--background-02)',
  background03: 'var(--background-03)',
  cardBorder01: 'var(--card-border-01)',
  text01: 'var(--text-01)',
  text02: 'var(--text-02)',
  text03: 'var(--text-03)',
  /** it's designer's variable name in Figma */
  brandGradient: 'var(--brand-gradient)',
  dividerDashGradient: 'var(--divider-dash-gradient)',

  tokenAvatarBg: 'var(--token-avatar-bg)',

  panelCardShadow: 'var(--panel-card-shadow)',
  panelCardBorder: 'var(--panel-card-border)',

  positive: 'var(--positive)',
  negative: 'var(--negative)'
}
