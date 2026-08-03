import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Base path MUST match your GitHub Pages repo name exactly: /ahmed_portfolio/
// This is what fixes the blank white page on GitHub Pages project sites.
export default defineConfig({
  plugins: [react()],
  base: '/ahmed_portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
        },
      },
    },
  },
})
