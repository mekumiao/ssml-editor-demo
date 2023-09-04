import { type IDomEditor } from '@wangeditor/editor';
import BaseFn from '../base-fn';
export declare class ContinuousFn extends BaseFn {
    constructor(editor: IDomEditor);
    isDisabled(): boolean;
    exec(): void;
}
