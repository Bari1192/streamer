import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'


export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)), // Hozzáadva
      '@card': fileURLToPath(new URL('./src/components/cards', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./src/components/layouts', import.meta.url)),
      '@sections': fileURLToPath(new URL('./src/components/sections', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@router': fileURLToPath(new URL('./src/router', import.meta.url))
    }
  }
})