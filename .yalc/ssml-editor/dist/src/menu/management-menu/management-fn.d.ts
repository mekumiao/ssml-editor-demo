import { type IDomEditor } from '@wangeditor/editor';
import BaseFn from '../base-fn';
import type { ContentData, SubmitData } from './data';
export declare class ManagementFn extends BaseFn {
    constructor(editor: IDomEditor);
    isDisabled(): boolean;
    contentData: ContentData | undefined;
    exec(opt: SubmitData): void;
}
