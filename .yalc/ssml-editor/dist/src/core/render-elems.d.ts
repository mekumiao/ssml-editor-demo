import { type VNode } from 'snabbdom';
import { SlateElement, type IDomEditor } from '@wangeditor/editor';
import type { SSMLElementType } from './custom-types';
export declare const renderElems: {
    type: SSMLElementType;
    renderElem: (elem: SlateElement, children: VNode[] | null, editor: IDomEditor) => VNode;
}[];
export {};
