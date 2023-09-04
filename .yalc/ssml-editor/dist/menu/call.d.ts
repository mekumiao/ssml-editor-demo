import { type IDomEditor } from '@wangeditor/editor';
import type { NodeEntry } from 'slate';
import type { SSMLBaseElement } from '../core/base';
export declare function call<T extends SSMLBaseElement>(editor: IDomEditor, type: T['type'], domId: string, callback: (node: NodeEntry<T>) => void): void | null;
