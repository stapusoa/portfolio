import { defineConfig } from 'unocss'

export default defineConfig({
  // Add any UnoCSS presets or customizations
  theme: {
    colors: {
      primary: '#1E90FF',
      secondary: '#FF6347',
    },
  },
  shortcuts: {
    'btn': 'px-4 py-2 rounded bg-primary text-white hover:bg-primary-700',
  },
})