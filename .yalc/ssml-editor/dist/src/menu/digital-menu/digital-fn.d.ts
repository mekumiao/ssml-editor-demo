import { type IDomEditor } from '@wangeditor/editor';
import BaseFn from '../base-fn';
import type { LabelValue } from '../../model';
export declare class DigitalFn extends BaseFn {
    constructor(editor: IDomEditor);
    isDisabled(): boolean;
    exec(opt: LabelValue): void;
}