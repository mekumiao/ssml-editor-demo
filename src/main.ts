import { createApp } from "vue"
import App from "./App.vue"

import "element-plus/dist/index.css"
import "@wangeditor/editor/dist/css/style.css"
import "ssml-editor/dist/style.css"

import { Boot } from "@wangeditor/editor"
import { SSMLModule, EditorMenuPlugin } from "ssml-editor"

Boot.registerModule(SSMLModule)

const app = createApp(App)

app.use(EditorMenuPlugin)

app.mount("#app")
