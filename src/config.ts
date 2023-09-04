import type { SSMLEditorConfig } from 'ssml-editor'
import { pinyin, english, bgm, special, scene, style, tag, speaker, star } from './api'
import { upload, transfer, conversionSpeaker } from './api'
import { ElMessage } from 'element-plus'

export default <SSMLEditorConfig>{
  // 错误处理
  handleError: (error) => ElMessage.warning({ message: error, grouping: true }),
  // 多音字菜单请求字拼音用
  pinyin: { fetchData: pinyin },
  // 音标菜单请求音标用
  english: { fetchData: english },
  // 配乐菜单 搜索,切换选项卡时请求数据用
  bgm: { fetchData: bgm, fetchScene: scene, fetchStyle: style },
  // 音效菜单 搜索,切换选项卡时请求数据用
  special: { fetchData: special, fetchScene: scene, fetchStyle: style },
  // 试听面板 数据结构和其他配置(支持自定义配音师类别,性别,等数据)
  tryPlay: { featchTag: tag, fetchData: speaker, fetchStar: star },
  // 局部变音
  conversion: {
    // 文件上传超时时间
    timeoutMilliseconds: 20000,
    // 上传音频文件
    audioUpload: upload,
    // 将上传的音频文件转换为指定配音师音色的接口
    transfer: transfer,
    // 请求支持 transfer 接口的配音师列表数据
    fetchSpeaker: conversionSpeaker,
  },
}
