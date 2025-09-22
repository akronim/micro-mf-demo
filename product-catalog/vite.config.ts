import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { federation } from '@module-federation/vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    mode !== 'test' && federation({
      name: 'productCatalog',
      manifest: true,
      filename: 'remoteEntry.js',
      exposes: {
        './ProductList': './src/components/ProductList.vue',
        './ProductDetail': './src/components/ProductDetail.vue'
      },
      shared: {
        vue: {
          singleton: true
        },
        'vue-router': {
          singleton: true
        },
      },
    }),
    cssInjectedByJsPlugin({
      jsAssetsFilterFunction: (outputChunk) => outputChunk.fileName === 'remoteEntry.js'
    })
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