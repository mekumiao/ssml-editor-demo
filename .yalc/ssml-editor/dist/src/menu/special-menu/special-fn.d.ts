import { type IDomEditor } from '@wangeditor/editor';
import BaseFn from '../base-fn';
import type { LabelValue } from '../../model';
export declare class SpecialFn extends BaseFn {
    constructor(editor: IDomEditor);
    restoreSelection(): void;
    isDisabled(): boolean;
    exec(opt: LabelValue): void;
}
