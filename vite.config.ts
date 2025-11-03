// vite.config.ts
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// CAMBIA ESTO POR EL NOMBRE EXACTO DE TU REPO
const REPO_NAME = 'Catalogo'  // ← EJEMPLO: si tu repo es "mi-tienda-vue", pon 'mi-tienda-vue'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  base: `/${REPO_NAME}/`  // NECESARIO PARA GITHUB PAGES
})