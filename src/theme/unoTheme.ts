
import { Theme } from '@unocss/preset-mini';
import { colors as themeColors } from './colors'

const colors = { ...themeColors }
// prevents `text-body` from being generated
// devs should ensure to use `type-body-1` or `type-body-2`
// @ts-ignore - Sometimes we have to do this??
delete colors.body

export const unoTheme: Theme = {
  colors,
  boxShadow: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
    md: '0 3px 12px rgba(0, 0, 0, 0.08)',
    lg: '0 10px 20px rgba(0, 0, 0, 0.1)',
  },
  lineHeight: {
    cozy: '1.08',
    tighter: '1.15',
  },
  letterSpacing: {
    'ultra-wide': '.12em',
    'mega-wide': '.335em',
  },
  fontFamily: {
    gilroy: '"Gilroy", sans-serif', // Provide the font family as a string, not an array
    area: '"Area Normal", sans-serif',  // Same for other fonts
  },
}
