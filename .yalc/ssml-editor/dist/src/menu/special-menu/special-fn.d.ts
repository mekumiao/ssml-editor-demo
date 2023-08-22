import { type IDomEditor } from '@wangeditor/editor';
import BaseFn from '../base-fn';
import type { LabelValue } from '../../model';
import type { Special } from '../../core/special';
export declare class SpecialFn extends BaseFn {
    protected readonly key: string;
    constructor(editor: IDomEditor);
    static handleClose(editor: IDomEditor, item: Special): void;
    private static handlePlay;
    isDisabled(): boolean;
    exec(opt: LabelValue): void;
}
