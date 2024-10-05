import type { Theme } from '@unocss/preset-mini'
import { defineConfig, presetUno } from 'unocss'
import { unoShortcuts, unoTheme } from './src/theme'

export default defineConfig({
  content: {
    pipeline: {
      include: ['./**/*.{js,jsx,ts,tsx}'],
    },
  },
  presets: [presetUno()],
  shortcuts: [unoShortcuts],
  theme: unoTheme as Theme,
})

