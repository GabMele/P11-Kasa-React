import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

// Resolve __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Use @ for src imports
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        //additionalData: `@import "@/styles/variables.scss";`, // Optional: Global SCSS variables
      },
    },
  },
})

