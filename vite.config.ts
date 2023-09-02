import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { Plugin as importToCDN, autoComplete } from 'vite-plugin-cdn-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    importToCDN({
      modules: [
        autoComplete('vue'),
        {
          name: '@wangeditor/editor',
          var: 'wangEditor',
          path: 'https://unpkg.com/@wangeditor/editor@latest/dist/index.js',
        },
        {
          name: 'element-plus',
          var: 'ElementPlus',
          path: 'https://cdn.jsdelivr.net/npm/element-plus',
          css: 'https://cdn.jsdelivr.net/npm/element-plus/dist/index.css',
        },
        {
          name: '@element-plus/icons-vue',
          var: 'ElementPlusIconsVue',
          path: 'https://cdn.jsdelivr.net/npm/@element-plus/icons-vue',
        },
      ],
    }),
  ],
  server: {
    port: 8077,
  },
})
