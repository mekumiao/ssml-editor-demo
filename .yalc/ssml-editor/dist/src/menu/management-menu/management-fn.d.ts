import { type IDomEditor } from '@wangeditor/editor';
import BaseFn from '../base-fn';
import type { SubmitData } from './data';
export declare class ManagementFn extends BaseFn {
    constructor(editor: IDomEditor);
    isDisabled(): boolean;
    exec(opt: SubmitData): void;
}
