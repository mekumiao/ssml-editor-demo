<script setup lang="ts">
import { EditorView, EditorHeader, exportRaw } from '@mekumiao/ssml-editor'
import config from './config'
import type { IDomEditor } from '@wangeditor/editor'
import { ElButton, ElMessage } from 'element-plus'
import dayjs from 'dayjs'

const siteDomain = 'https://ssml.sdaxia.top'
let siteHtml: string = ''

function handleCreated(editor: IDomEditor) {
  window.editor = editor
}

async function handleExportHtml() {
  try {
    const ssml_html = window.editor.getHtml()
    const html = await renderHtml(ssml_html)
    const fileName = `html-${dayjs().format('YYYY-MM-DDTHH:mm:ss')}.html`
    exportRaw(fileName, html)
  } catch (error) {
    if (error instanceof Error) {
      ElMessage.error({ message: `导出文件失败! ${error.message}` })
    } else {
      console.error(error)
    }
  }
}

async function renderHtml(html: string) {
  if (!siteHtml) {
    const response = await fetch(siteDomain)
    if (response.status !== 200) {
      throw new Error(`获取网页源代码失败，状态码：${response.status}`)
    }
    siteHtml = await response.text()
  }
  const scriptElement = document.createElement('script')
  scriptElement.textContent = `window.html = \`${html}\``

  const parser = new DOMParser()
  const doc = parser.parseFromString(siteHtml, 'text/html')

  const scriptElem = doc.querySelector('script[src^="/assets/index-"]')
  scriptElem?.setAttribute('src', `${siteDomain}${scriptElem.getAttribute('src')}`)

  const linkElem = doc.querySelector('link[href^="/assets/index-"]')
  linkElem?.setAttribute('href', `${siteDomain}${linkElem.getAttribute('href')}`)

  const headElement = doc.querySelector('head')
  scriptElem && headElement?.insertBefore(scriptElement, scriptElem)

  return doc.documentElement.innerHTML
}
</script>

<template>
  <EditorView @created="handleCreated" :config="config">
    <template #header>
      <EditorHeader>
        <template #menus>
          <ElButton @click="handleExportHtml">导出文件(.html)</ElButton>
        </template>
      </EditorHeader>
    </template>
  </EditorView>
</template>

<style>
body {
  padding: 0px;
  margin: 0px;
}
</style>
