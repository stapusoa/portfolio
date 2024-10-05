import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';

export default defineConfig({
  plugins: [react(), UnoCSS()],
  server: {
    fs: {
      // Serve index.html for any route that doesn't exist (SPA fallback)
      allow: ['../'] // Allow serving from the root folder
    }
  }
});