import type { Plugin } from 'vue';
import { EditorView } from './view';
import type { FilterBarSearch } from './components/bar-search';
import type { AudioInfo } from './menu/conversion-menu/data';
export * from './constant';
export * from './model';
export * from './config';
export * from './utils';
export * from './serialize';
declare const _default: Plugin;
export default _default;
export { EditorView };
export type { FilterBarSearch, AudioInfo };