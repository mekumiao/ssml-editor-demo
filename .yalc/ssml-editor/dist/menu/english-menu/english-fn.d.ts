import { type IDomEditor } from '@wangeditor/editor';
import BaseFn from '../base-fn';
import type { LabelValue } from '../../model';
export declare class EnglishFn extends BaseFn {
    constructor(editor: IDomEditor);
    getValue(): string;
    isDisabled(): boolean;
    exec(opt: LabelValue): void;
}
