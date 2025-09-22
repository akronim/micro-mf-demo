import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { federation } from '@module-federation/vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    mode !== 'test' && federation({
      name: 'hostApp',
      manifest: true,
      remotes: {
        'product-catalog': {
          type: 'module',
          name: 'product-catalog',
          entry: 'http://localhost:5001/remoteEntry.js',
          shareScope: "default"
        }
      },
      shared: {
        vue: {
          singleton: true
        },
        'vue-router': {
          singleton: true
        }
      }
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    target: 'esnext',
    emptyOutDir: true,
    minify: false,
    modulePreload: false,
    cssCodeSplit: false
  }
}))
