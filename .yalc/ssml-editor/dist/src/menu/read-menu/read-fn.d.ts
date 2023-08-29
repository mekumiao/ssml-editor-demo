import { type IDomEditor } from '@wangeditor/editor';
import BaseFn from '../base-fn';
import { type ReadLabelValue } from './data';
export declare class ReadFn extends BaseFn {
    constructor(editor: IDomEditor);
    isDisabled(): boolean;
    exec(opt: ReadLabelValue): void;
}
