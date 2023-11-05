<script setup lang="ts">
import { EditorView } from '@mekumiao/ssml-editor'
import config from './config'
import type { IDomEditor } from '@wangeditor/editor'

function handleCreated(editor: IDomEditor) {
  window.editor = editor
}
</script>

<template>
  <EditorView @created="handleCreated" :config="config"></EditorView>
</template>

<style>
body {
  padding: 0px;
  margin: 0px;
}
</style>
