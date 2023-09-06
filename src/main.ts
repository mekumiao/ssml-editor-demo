import { createApp } from 'vue'
import App from './App.vue'

import '@mekumiao/ssml-editor/dist/style.css'

import EditorConfig from './config'
import SSMLEditor from '@mekumiao/ssml-editor'

const app = createApp(App)
app.use(SSMLEditor, EditorConfig)
app.mount('#app')
