import { type IDomEditor } from '@wangeditor/editor';
import type { LabelValue } from '../model';
export default abstract class BaseFn {
    protected readonly editor: IDomEditor;
    constructor(editor: IDomEditor);
    protected getValue(): string;
    isDisabled(): boolean;
    abstract exec(opt: LabelValue): void;
}
