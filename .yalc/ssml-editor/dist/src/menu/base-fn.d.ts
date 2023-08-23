import { type IDomEditor } from '@wangeditor/editor';
import type { LabelValue } from '../model';
export default abstract class BaseFn {
    protected readonly editor: IDomEditor;
    protected abstract readonly key: string;
    constructor(editor: IDomEditor);
    protected genDomID(): string;
    protected selection(): import("slate").BaseRange | null;
    protected getValue(): string;
    record(): void;
    unrecord(): void;
    reselect(): void;
    isDisabled(): boolean;
    abstract exec(opt: LabelValue): void;
}
