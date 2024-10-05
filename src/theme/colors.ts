const mainColors = {
  cambridge: '#81B29A',
  deft: '#3D405B',
  champagne: '#ECD7C8',
  cinnabar: '#DE5B3E',
  slate: '#5F797B',
  melon: '#E8AB91',
  sunset: '#F2CC8F',
  eggshell: '#F4F1DE',
  grey100: '#F8F7FA',
  grey200: '#ECECEF',
  grey300: '#DEE2E6',
  grey400: '#CED4DA',
  grey500: '#C5C6CD',
  grey600: '#B6B3BC',
  grey700: '#999BA6',
  grey800: '#616972',
  grey900: '#353535',
  red: '#FF3B30',
  orange: '#FF9F0A',
  mint: '#00C7BE',
  crimson: '#A43821',
  night: '#25262E',
  } as const

const allGreys = {
  grey100: '#F7F7FC',
  grey200: '#EFF0F6',
  grey300: '#E4E5EE',
  grey400: '#DADCE2',
  grey500: '#C7C7CC',
  grey600: '#B0B1B7',
  grey700: '#8B8C95',
  grey800: '#636366',
  grey900: '#35343C',
} as const

const greys = {
  100: '#F7F7FC',
  200: '#EFF0F6',
  300: '#E4E5EE',
  400: '#DADCE2',
  500: '#C7C7CC',
  600: '#B0B1B7',
  700: '#8B8C95',
  800: '#636366',
  900: '#35343C',
} as const

const colors = {
  ...mainColors,
  ...allGreys,
  grey: { ...greys },
  body: 'rgba(70, 70, 72, 1)',
  white: '#FFFFFF',
  light: 'rgba(240, 240, 240, 1)',
  textDisabled: 'rgba(139, 140, 149, 1)',
  disabled: 'rgba(0, 0, 0, 0.12)',
  warmGrey: '#F9F7F7',
  black: '#000000',
} as const

export { colors }