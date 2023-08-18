import { type IDomEditor, SlateElement } from '@wangeditor/editor';
import type { NodeEntry } from 'slate';
import type { SSMLBaseElement, SSMLElementType } from '../core/custom-types';
export declare function bindClose<T extends SlateElement>(editor: IDomEditor, type: SSMLElementType, domId: string, callback: (node: NodeEntry<T>) => void): void;
export declare function findByDomId<T extends SlateElement>(editor: IDomEditor, type: SSMLElementType, domId: string): NodeEntry<T> | null;
export declare function unpackVoid<T extends SSMLBaseElement>(editor: IDomEditor, current: NodeEntry<T>, getter: (elem: T) => string): void;
