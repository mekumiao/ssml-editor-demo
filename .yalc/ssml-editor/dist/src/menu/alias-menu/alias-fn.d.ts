import { type IDomEditor } from '@wangeditor/editor';
import BaseFn from '../base-fn';
import type { LabelValue } from '../../model';
import type { Alias } from '../../core/alias';
export declare class AliasFn extends BaseFn {
    protected readonly key: string;
    constructor(editor: IDomEditor);
    static handleClose(editor: IDomEditor, item: Alias): void;
    isDisabled(): boolean;
    exec(opt: LabelValue): void;
}
