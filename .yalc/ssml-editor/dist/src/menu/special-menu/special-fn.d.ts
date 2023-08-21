import { type IDomEditor } from '@wangeditor/editor';
export default class SpecialFn {
    private readonly editor;
    private oldSelection?;
    constructor(editor: IDomEditor);
    recordSelection(): void;
    private getSelection;
    getValue(): string | null;
    isDisabled(): boolean;
    exec(opt: LabelValue): void;
}
