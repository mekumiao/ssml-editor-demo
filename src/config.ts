import { speaker, english } from "./api"
import { ElMessage } from "element-plus"
import { type SSMLEditorConfig } from "ssml-editor"

export default {
  handleError: (error) => ElMessage.warning({ message: error, grouping: true }),
  fetchSpeaker: speaker,
  fetchEnglish: english,
} as SSMLEditorConfig
