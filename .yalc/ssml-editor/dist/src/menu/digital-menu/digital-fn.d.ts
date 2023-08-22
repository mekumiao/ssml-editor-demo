import { type IDomEditor } from '@wangeditor/editor';
import BaseFn from '../base-fn';
import type { LabelValue } from '../../model';
export declare class DigitalFn extends BaseFn {
    protected key: string;
    constructor(editor: IDomEditor);
    isDisabled(): boolean;
    exec(opt: LabelValue): void;
}
