import { type IDomEditor } from '@wangeditor/editor';
import BaseFn from '../base-fn';
import type { LabelValue } from '../../model';
export declare class EnglishEn extends BaseFn {
    protected key: string;
    constructor(editor: IDomEditor);
    getValue(): string;
    isDisabled(): boolean;
    exec(opt: LabelValue): void;
}
