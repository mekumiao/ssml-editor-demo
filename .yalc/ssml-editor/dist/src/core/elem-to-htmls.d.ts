import type { SlateElement } from '@wangeditor/editor';
import type { SSMLElementType } from './custom-types';
export declare const elemToHtmls: {
    type: SSMLElementType;
    elemToHtml: (elem: SlateElement, childrenHtml: string) => string;
}[];
export {};
