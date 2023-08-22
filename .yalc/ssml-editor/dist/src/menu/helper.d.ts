import { type IDomEditor } from '@wangeditor/editor';
import type { NodeEntry } from 'slate';
import type { SSMLBaseElement } from '../core/base';
export declare function findByDomId<T extends SSMLBaseElement>(editor: IDomEditor, type: T['type'], domId: string): NodeEntry<T> | null;
export declare function unpackVoid<T extends SSMLBaseElement>(editor: IDomEditor, current: NodeEntry<T>, getter: (elem: T) => string): void;
