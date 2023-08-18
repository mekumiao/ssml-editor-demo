import { type IDomEditor } from '@wangeditor/editor';
import type { NodeEntry } from 'slate';
import type { SSMLBaseElement } from '../core/custom-types';
export type BindButtonType = 'close' | 'play';
export declare function bind<T extends SSMLBaseElement>(editor: IDomEditor, btnType: BindButtonType, type: T['type'], domId: string, callback: (node: NodeEntry<T>) => void): void;
export declare function bindClose<T extends SSMLBaseElement>(editor: IDomEditor, type: T['type'], domId: string, callback: (node: NodeEntry<T>) => void): void;
export declare function bindPlay<T extends SSMLBaseElement>(editor: IDomEditor, type: T['type'], domId: string, callback: (node: NodeEntry<T>) => void): void;
export declare function findByDomId<T extends SSMLBaseElement>(editor: IDomEditor, type: T['type'], domId: string): NodeEntry<T> | null;
export declare function unpackVoid<T extends SSMLBaseElement>(editor: IDomEditor, current: NodeEntry<T>, getter: (elem: T) => string): void;
