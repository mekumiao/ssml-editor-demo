import { type IDomEditor } from '@wangeditor/editor';
import BaseFn from '../base-fn';
import type { Continuous } from '../../core/continuous';
export declare class ContinuousFn extends BaseFn {
    protected readonly key: string;
    constructor(editor: IDomEditor);
    static handleClose(editor: IDomEditor, item: Continuous): void;
    isDisabled(): boolean;
    exec(): void;
}
