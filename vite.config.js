import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 设置打包路径
  build: {
    minify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: () => 'vendor', // 强制把所有 JS 打包成一个文件
        entryFileNames: 'vendor.js',
        chunkFileNames: 'vendor.js',
        assetFileNames: 'vendor[extname]', // 让 CSS 也保持 main.css
      }
    }
  }
})
