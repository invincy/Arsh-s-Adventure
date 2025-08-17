import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

export default defineConfig({
  base: '/Arsh-s-Adventure/',
  plugins: [react(), svgr()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  }
})
