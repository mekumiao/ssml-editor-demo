import { createApp } from 'vue'
import App from './App.vue'

import 'ssml-editor/dist/style.css'

import EditorConfig from './config'
import SSMLEditor from 'ssml-editor'

const app = createApp(App)
app.use(SSMLEditor, EditorConfig)
app.mount('#app')
