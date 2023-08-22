import { type IDomEditor } from '@wangeditor/editor';
import BaseFn from '../base-fn';
import type { LabelValue } from '../../model';
import type { Read } from '../../core/read';
export declare class ReadFn extends BaseFn {
    protected readonly key: string;
    constructor(editor: IDomEditor);
    static handleClose(editor: IDomEditor, item: Read): void;
    isDisabled(): boolean;
    exec(opt: LabelValue): void;
}
