import type { IDomEditor } from '@wangeditor/editor';
export declare function saveChildren(children: any): void;
export declare function readChildren(): any[] | undefined;
export declare function recoreSelection(editor: IDomEditor): void;
export declare function unrecordSelection(): void;
export declare function getSelectionByRecord(): import("slate").BaseRange | null;
