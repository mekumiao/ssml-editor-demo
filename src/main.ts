import { createApp } from "vue"
import App from "./App.vue"

import "element-plus/dist/index.css"
import "@wangeditor/editor/dist/css/style.css"
import "ssml-editor/dist/style.css"

import EditorConfig from "./config"
import { Boot } from "@wangeditor/editor"
import { default as SSMLEditorView, EditorCoreModule } from "ssml-editor"

Boot.registerModule(EditorCoreModule)

const app = createApp(App)

app.use(SSMLEditorView, EditorConfig)

app.mount("#app")
