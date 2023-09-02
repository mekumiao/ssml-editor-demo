import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { Plugin as importToCDN } from 'vite-plugin-cdn-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    importToCDN({
      modules: [
        {
          name: 'vue',
          var: 'Vue',
          path: 'https://cdn.staticfile.org/vue/3.3.4/vue.global.prod.min.js',
        },
        {
          name: '@wangeditor/editor',
          var: 'wangEditor',
          path: 'https://cdn.staticfile.org/wangeditor5/5.1.23/index.min.js',
        },
        {
          name: 'element-plus',
          var: 'ElementPlus',
          path: 'https://cdn.staticfile.org/element-plus/2.3.12/index.full.min.js',
          css: 'https://cdn.staticfile.org/element-plus/2.3.12/index.min.css',
        },
        {
          name: '@element-plus/icons-vue',
          var: 'ElementPlusIconsVue',
          path: 'https://cdn.staticfile.org/element-plus-icons-vue/2.1.0/global.iife.min.js',
        },
      ],
    }),
  ],
  server: {
    port: 8077,
  },
})
