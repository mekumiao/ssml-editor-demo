import { type IDomEditor } from '@wangeditor/editor';
import BaseFn from '../base-fn';
import type { LabelValue } from '../../model';
import type { English } from '../../core/english';
export declare class EnglishFn extends BaseFn {
    protected readonly key: string;
    constructor(editor: IDomEditor);
    static handleClose(editor: IDomEditor, item: English): void;
    getValue(): string;
    isDisabled(): boolean;
    exec(opt: LabelValue): void;
}
