import { type IDomEditor } from '@wangeditor/editor';
import BaseFn from '../base-fn';
import type { LabelValue } from '../../model';
import type { Rhythm } from '../../core/rhythm';
export declare class RhythmFn extends BaseFn {
    protected readonly key: string;
    constructor(editor: IDomEditor);
    static handleClose(editor: IDomEditor, item: Rhythm): void;
    isDisabled(): boolean;
    exec(opt: LabelValue): void;
}
