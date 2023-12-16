import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: '3000',
  },
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: resolve(__dirname, './src/components'),
      },
      {
        find: '@imageCardsMedium',
        replacement: resolve(__dirname, './src/imagesCards'),
      },
      {
        find: '@assets',
        replacement: resolve(__dirname, './src/assets'),
      },
      {
        find: '@images',
        replacement: resolve(__dirname, './src/images'),
      },
      {
        find: '@pages',
        replacement: resolve(__dirname, './src/pages'),
      },
      {
        find: '@services',
        replacement: resolve(__dirname, './src/supabaseConn'),
      },
    ],
  },
  build: {
    base: '/21240/starwars/',
  },
})
