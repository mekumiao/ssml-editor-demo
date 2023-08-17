import { type VNode } from 'snabbdom';
import { SlateElement } from '@wangeditor/editor';
declare function renderW(elem: SlateElement, children: VNode[] | null): VNode;
export declare const renderElems: {
    type: string;
    renderElem: typeof renderW;
}[];
export {};
