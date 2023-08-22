import { type IDomEditor } from '@wangeditor/editor';
import type { LabelValue } from '../model';
export default abstract class BaseFn {
    private oldSelection;
    protected readonly editor: IDomEditor;
    protected abstract readonly key: string;
    constructor(editor: IDomEditor);
    protected genDomID(): string;
    protected selection(): import("slate").BaseRange | null;
    protected getValue(): string;
    record(): void;
    restore(): void;
    isDisabled(): boolean;
    abstract exec(opt: LabelValue): void;
}
