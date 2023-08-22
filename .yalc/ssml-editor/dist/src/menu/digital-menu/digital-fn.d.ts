import { type IDomEditor } from '@wangeditor/editor';
import BaseFn from '../base-fn';
import type { LabelValue } from '../../model';
import type { Digital } from '../../core/digital';
export declare class DigitalFn extends BaseFn {
    protected readonly key: string;
    constructor(editor: IDomEditor);
    static handleClose(editor: IDomEditor, item: Digital): void;
    isDisabled(): boolean;
    exec(opt: LabelValue): void;
}
