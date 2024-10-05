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
    page: 'max-w-392 mx-auto px-4 md:px-6 lg:px-8',
  'page-wide': 'max-w-452 mx-auto px-4 md:px-6',
  'page-tight': 'max-w-300 mx-auto px-4 md:px-6 lg:px-8',
  'page-tighter': 'max-w-4xl mx-auto px-4 md:px-6 lg:px-8',
  'page-full': 'max-w-full',
  },
})