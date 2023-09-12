<script setup lang="ts">
import { EditorView } from '@mekumiao/ssml-editor'
import type { IDomEditor } from '@wangeditor/editor'

function handleCreated(editor: IDomEditor) {
  const html = readHtml()
  html && editor.setHtml(html)
  setTimeout(() => {
    editor.focus(true)
  }, 500)
}

function handleChange(editor: IDomEditor) {
  const html = editor.getHtml()
  saveHtml(html)
}

function saveHtml(html: string) {
  window.localStorage.setItem('html', html)
}

function readHtml() {
  return window.localStorage.getItem('html')
}
</script>

<template>
  <EditorView @created="handleCreated" @change="handleChange"></EditorView>
</template>

<style scoped></style>
