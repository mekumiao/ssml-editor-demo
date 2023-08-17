import type { SlateElement } from '@wangeditor/editor';
declare function paragraph(elem: SlateElement, childrenHtml: string): string;
export declare const elemToHtmls: {
    type: string;
    elemToHtml: typeof paragraph;
}[];
export {};
