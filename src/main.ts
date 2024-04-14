import { createApp } from 'vue'
import App from './App.vue'

import 'element-plus/dist/index.css'
import '@mekumiao/ssml-editor/dist/style.css'

import SSMLEditor from '@mekumiao/ssml-editor'

const app = createApp(App)
app.use(SSMLEditor)
app.mount('#app')
