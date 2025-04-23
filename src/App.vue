<script setup lang="ts">
import type { IDomEditor } from '@wangeditor/editor'
import { EditorView } from '@mekumiao/ssml-editor'
import config from './config'

function handleCreated(editor: IDomEditor) {
  window.editor = editor
}
</script>

<template>
  <EditorView @created="handleCreated" :config="config" />
</template>

<style>
body {
  padding: 0px;
  margin: 0px;
}
</style>
