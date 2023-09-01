import axios from 'axios'
import '../mock'
import type { FilterBarSearch } from 'ssml-editor'
import type { FilterSpeaker, LabelValue, Speaker } from 'ssml-editor'
import type { CancellationToken, AudioInfo } from 'ssml-editor'

export async function pinyin(word: string): Promise<LabelValue[]> {
  const resp = await axios.get('/pinyin', { params: { word } })
  return resp.data
}

export async function english(word: string): Promise<LabelValue[]> {
  const resp = await axios.get('/english', { params: { word } })
  return resp.data
}

export async function bgm(filter: FilterBarSearch): Promise<LabelValue[]> {
  const resp = await axios.get('/bgm', { params: { ...filter } })
  return resp.data
}

export async function special(filter: FilterBarSearch): Promise<LabelValue[]> {
  const resp = await axios.get('/special', { params: { ...filter } })
  return resp.data
}

export async function scene(): Promise<LabelValue[]> {
  const resp = await axios.get('/scene')
  return resp.data
}

export async function style(): Promise<LabelValue[]> {
  const resp = await axios.get('/style')
  return resp.data
}

export async function tag(): Promise<LabelValue[]> {
  const resp = await axios.get('/tag')
  return resp.data
}

export async function speaker(filter: FilterSpeaker): Promise<Speaker[]> {
  const resp = await axios.get('/speaker', { params: { ...filter } })
  return resp.data
}

export async function star(speaker: string, star: boolean): Promise<boolean> {
  const resp = await axios.get('/star', { params: { speaker, star } })
  return resp.data
}

export async function upload(file: File | Blob, token: CancellationToken): Promise<AudioInfo> {
  const source = axios.CancelToken.source()
  const formData = new FormData()
  formData.append('file', file)
  const resp = await axios.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    cancelToken: source.token,
    onUploadProgress: () => {
      token.isCancellationRequested() && source.cancel()
    },
  })
  return resp.data
}

export async function transfer(opt: { audioId: string; speakerId: string }): Promise<AudioInfo> {
  const resp = await axios.put('/transfer', { params: { ...opt } })
  return resp.data
}

export async function conversionSpeaker(): Promise<Speaker[]> {
  const resp = await axios.get('/conversionSpeaker')
  return resp.data
}
