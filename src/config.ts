import type { PartialSSMLEditorConfig } from '@mekumiao/ssml-editor'
import { english, bgm, special, scene, style, tag, speaker, star } from './api'
import { upload, transfer, conversionSpeaker, play } from './api'
import { fetchRecentUsage, deleteRecentUsage, recordRecentUsage } from './api'
import { ElMessage } from 'element-plus'

export default <PartialSSMLEditorConfig>{
  effects: { grayscale: false, zoom: true },
  // 错误处理
  handleError: (error) => ElMessage.warning({ message: error, grouping: true }),
  // 音标菜单请求音标用
  english: { fetchData: english },
  // 配乐菜单 搜索,切换选项卡时请求数据用
  bgm: { fetchData: bgm, fetchScene: scene, fetchStyle: style },
  // 音效菜单 搜索,切换选项卡时请求数据用
  special: { fetchData: special, fetchScene: scene, fetchStyle: style },
  // 试听面板 数据结构和其他配置(支持自定义配音师类别,性别,等数据)
  tryPlay: { featchTag: tag, fetchData: speaker, fetchStar: star, play: play },
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
  // 多人配音
  management: {
    // 获取最近使用接口
    fetchRecentUsage: fetchRecentUsage,
    // 删除或清空最近使用接口
    deleteRecentUsage: deleteRecentUsage,
    // 记录最近使用接口
    recordRecentUsage: recordRecentUsage,
  },
}
