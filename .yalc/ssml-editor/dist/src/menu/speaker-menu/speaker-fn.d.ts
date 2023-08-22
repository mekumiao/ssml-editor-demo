import { type IDomEditor } from '@wangeditor/editor';
import BaseFn from '../base-fn';
import type { LabelValue } from '../../model';
import type { Speaker } from '../../core/speaker';
export declare class SpeakerFn extends BaseFn {
    protected readonly key: string;
    constructor(editor: IDomEditor);
    static handleClose(editor: IDomEditor, value: Speaker): void;
    getValue(): string;
    isDisabled(): boolean;
    exec(opt: LabelValue): void;
}
