import { type IDomEditor } from '@wangeditor/editor';
import BaseFn from '../base-fn';
import type { LabelValue } from '../../model';
import type { Mute } from '../../core/mute';
export declare class MuteFn extends BaseFn {
    protected readonly key: string;
    constructor(editor: IDomEditor);
    static handleClose(editor: IDomEditor, item: Mute): void;
    isDisabled(): boolean;
    exec(opt: LabelValue): void;
}
