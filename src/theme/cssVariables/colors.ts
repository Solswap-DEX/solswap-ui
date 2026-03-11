export const darkColors: Record<keyof typeof colors, string> = {
  // app main bg color
  primary: '#00D1CF',
  secondary: '#7B61FF',
  secondary10: 'rgba(123, 97, 255, 0.1)',

  // component color
  backgroundDark: '#0C0D14',
  backgroundDark50: '#0C0D1480',
  backgroundMedium: '#13141F',
  backgroundLight: '#1A1B2E',
  backgroundLight50: '#1A1B2E88',
  backgroundLight30: '#1A1B2E4d',
  backgroundTransparent12: 'rgba(0, 209, 207, 0.12)',
  backgroundTransparent07: 'rgba(0, 209, 207, 0.07)',
  backgroundTransparent10: 'rgba(0, 209, 207, 0.1)',

  // text
  textPrimary: '#FFFFFF',
  textSecondary: '#8B8FA8',
  textTertiary: '#8B8FA880',
  textRevertPrimary: '#0C0D14',

  textLink: '#00D1CF',

  /** 🤔 what's this */
  textQuaternary: '#8B8FA8',
  /** 🤔 what's this */
  textQuinary: '#1A1B2E',
  /** 🤔 what's this */
  textSenary: 'rgba(139, 143, 168, 0.5)',
  /** 🤔 what's this */
  textSeptenary: '#00D1CF',
  /** 🤔 what's this */
  textPurple: '#7B61FF',
  /** 🤔 what's this */
  textPink: '#FF4D6A',

  textLaunchpadLink: '#00D1CF',

  // button
  buttonPrimary: '#00D1CF',
  buttonPrimary__01: '#00D1CF',
  buttonPrimary__02: '#00E8E6',
  buttonSolidText: '#0C0D14',
  buttonSecondary: '#7B61FF',

  // switch
  switchOn: '#00D1CF',
  switchOff: '#1A1B2E',

  // select
  selectActive: '#00D1CF',
  selectActiveSecondary: '#7B61FF',
  selectInactive: 'rgba(26, 27, 46, 0.5)',

  // chart
  chart01: '#00D1CF',
  chart02: '#7B61FF',
  chart03: '#00C896',
  chart04: '#FF4D6A',
  chart05: '#FF7043',
  chart06: '#FED33A',
  chart07: '#4F53F3',
  chart08: '#00D1CF',
  chart09: 'rgba(123, 97, 255, 0.2)',

  // Icon
  iconBg: '#1A1B2E',
  iconEmptyStroke: '#0C0D14',

  // success/warning/error/info
  semanticSuccess: '#00C896',
  semanticError: '#FF4D6A',
  semanticWarning: '#FED33A',
  semanticNeutral: '#8B8FA8',
  semanticFocus: '#00D1CF',
  semanticFocusShadow: 'rgba(0, 209, 207, 0.2)',

  // Tab
  tabFolderTabListBg: 'var(--background-medium)',

  // Step
  stepActiveBg: 'var(--background-light)',
  stepHoofBg: 'var(--primary)',

  // +1% is priceFloatingUp; -1% is priceFloatingDown
  priceFloatingUp: '#00C896',
  priceFloatingDown: '#FF4D6A',
  priceFloatingFlat: '#888888',

  // tooltip (this color is not in figma ui color system,but in figma ui page)
  tooltipBg: '#13141F',

  popoverBg: '#13141F',

  //customize (by V3 frontend coder)
  scrollbarThumb: 'rgba(0, 209, 207, 0.2)',

  // badge
  badgePurple: 'rgba(123, 97, 255, 0.5)',
  badgeBlue: 'rgba(0, 209, 207, 0.5)',

  // divider
  dividerBg: '#2A2B3D',

  // input
  inputMask: '#0C0D1466',

  // customize (by V3 frontend coder)
  backgroundApp: '#0C0D14',
  solidButtonBg: 'linear-gradient(270deg, #00D1CF 0%, #00B4B2 100%)',
  outlineButtonBg: 'rgba(0, 209, 207, 0.1)',
  filledProgressBg: '#00D1CF',
  transparentContainerBg: '#13141F',
  cardStackBg: '#1A1B2E',
  modalContainerBg: 'rgba(12, 13, 20, 0.9)',
  infoButtonBg: 'rgba(0, 209, 207, 0.1)',
  warnButtonBg: '#FED33A33',
  warnButtonLightBg: '#FED33A1A',
  buttonBg01: '#1A1B2E',
  lightPurple: '#7B61FF',
  background01: '#0C0D14',
  background02: '#13141F',
  background03: '#FF4D6A1A',
  cardBorder01: '#2A2B3D',
  text01: '#FFFFFF',
  text02: '#FFFFFF',
  text03: '#8B8FA8',
  /** it's designer's variable name in Figma */
  brandGradient: 'linear-gradient(135deg, #00D1CF 0%, #7B61FF 100%)',
  dividerDashGradient: 'repeating-linear-gradient(to right, #2A2B3D 0 5px, transparent 5px 10px)',

  tokenAvatarBg: '#13141F',

  panelCardShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
  panelCardBorder: '1px solid #2A2B3D',

  positive: '#00C896',
  negative: '#FF4D6A'
}

export const lightColors: Partial<typeof darkColors> = {
  // app main bg color
  primary: '#abc4ff',
  secondary: '#4F53F3',
  secondary10: 'rgba(34, 209, 248, 0.1)',

  // component color
  backgroundDark: '#EDEDFF',
  backgroundDark50: '#EDEDFF80',
  backgroundMedium: '#EDEDFF',
  backgroundLight: '#F5F8FF',
  backgroundLight50: '#F5F8FF88',
  backgroundLight30: '#F5F8FF4d',
  backgroundTransparent12: 'rgba(171, 196, 255, 0.12)',
  backgroundTransparent07: 'rgba(171, 196, 255, 0.07)',
  backgroundTransparent10: 'rgba(171, 196, 255, 0.1)',

  // text
  textPrimary: '#0B1022',
  textSecondary: '#474ABB',
  textTertiary: '#474ABB99',
  textRevertPrimary: '#ECF5FF',

  textLink: '#22D1F8',

  /** 🤔 what's this */
  textQuaternary: '#C4D6FF',
  /** 🤔 what's this */
  textQuinary: '#ECF5FF',
  /** 🤔 what's this */
  textSenary: 'rgba(196, 214, 255, 0.5)',
  /** 🤔 what's this */
  textSeptenary: '#22D1F8',
  /** 🤔 what's this */
  textPurple: '#8C6EEF',
  /** 🤔 what's this */
  textPink: '#FF4EA3',

  textLaunchpadLink: '#8C6EEF',

  // button
  buttonPrimary: '#4F53F3',
  buttonPrimary__01: '#4F53F3',
  buttonPrimary__02: '#8C6EEF',
  buttonSolidText: '#ECF5FF',
  buttonSecondary: '#39D0D8',

  // switch
  switchOn: '#8C6EEF',
  switchOff: '#8C6EEF80',

  // select
  selectActive: '#8C6EEF',
  selectActiveSecondary: '#8C6EEF',
  selectInactive: '#abc4ffef',

  // chart
  chart01: '#abc4ff',
  chart02: '#39D0D8',
  chart03: '#8C6EEF',
  chart04: '#2B6AFF',
  chart05: '#FF7043',
  chart06: '#FED33A',
  chart07: '#4F53F3',
  chart08: '#22D1F8',
  chart09: '#8C6EEF33',

  // Icon
  iconBg: '#8C6EEF',
  iconEmptyStroke: '#ECF5FF',

  // success/warning/error/info
  semanticSuccess: '#39D0D8',
  semanticError: '#FF4EA3',
  semanticWarning: '#B89900',
  semanticNeutral: '#ABC4FF',
  semanticFocus: '#A259FF',
  semanticFocusShadow: '#A259FF33',

  // Tab
  tabFolderTabListBg: 'var(--background-dark)',

  // Step
  stepActiveBg: 'var(--background-dark-opacity)',
  stepHoofBg: 'var(--secondary)',

  // +1% is priceFloatingUp; -1% is priceFloatingDown
  priceFloatingUp: '#22D1F8',
  priceFloatingDown: '#FF4EA3',
  priceFloatingFlat: '#888888',

  // tooltip (this color is not in figma ui color system,but in figma ui page)
  tooltipBg: '#fff',

  popoverBg: '#fff',

  //customize (by V3 frontend coder)
  scrollbarThumb: 'rgba(196, 214, 255, 0.5)',

  // badge
  badgePurple: 'rgba(140, 110, 239, 0.5)',
  badgeBlue: 'rgba(34, 209, 248, 0.5)',

  // divider
  dividerBg: 'rgba(171, 196, 255, 0.3)',

  // input
  inputMask: '#fff3',

  // customize (by V3 frontend coder)
  backgroundApp: '#fff',

  solidButtonBg: 'linear-gradient(272deg, #4F53F3 2.63%, #8C6EEF 95.31%)',
  outlineButtonBg: 'linear-gradient(270deg, #8C6EEF1a 0%, #4F53F31a 100%)',
  filledProgressBg: 'linear-gradient(270deg, #8C6EEF 0%, #4F53F3 100%)',
  transparentContainerBg: '#F5F8FF',
  cardStackBg: 'linear-gradient(90deg, #EEF7FF 0%, #FBEDFF 100%)',
  modalContainerBg: '#ABC4FF12',
  infoButtonBg: '#ABC4FF33',
  warnButtonBg: '#FED33A33',
  warnButtonLightBg: '#FED33A1A',
  buttonBg01: '#ABC4FF1F',
  lightPurple: '#474ABB',
  background01: '#EDEDFF',
  background02: '#ABC4FF33',
  background03: '#FF4EA31A',
  cardBorder01: '#8C6EEF80',
  text01: '#D6CC56',
  text02: '#000',
  text03: '#474ABB',
  /** it's designer's variable name in Figma */
  brandGradient: 'linear-gradient(244deg, #7748FC 8.17%, #39D0D8 101.65%)',
  dividerDashGradient: 'repeating-linear-gradient(to right, currentColor 0 5px, transparent 5px 10px)',

  tokenAvatarBg: 'linear-gradient(127deg, rgba(171, 196, 255, 0.20) 28.69%, rgba(171, 196, 255, 0.00) 100%) #fffe',

  panelCardShadow: 'none',
  panelCardBorder: '1px solid rgba(171, 196, 255, 0.50)',

  positive: '#4CDCC1',
  negative: '#FF4272'
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
