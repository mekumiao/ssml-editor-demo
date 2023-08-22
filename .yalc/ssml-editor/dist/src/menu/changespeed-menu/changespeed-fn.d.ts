import { type IDomEditor } from '@wangeditor/editor';
import BaseFn from '../base-fn';
import type { LabelValue } from '../../model';
import type { Changespeed } from '../../core/changespeed';
export declare class ChangespeedFn extends BaseFn {
    protected readonly key: string;
    constructor(editor: IDomEditor);
    static handleClose(editor: IDomEditor, item: Changespeed): void;
    isDisabled(): boolean;
    exec(opt: LabelValue): void;
}
