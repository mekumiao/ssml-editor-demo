import { type IDomEditor } from '@wangeditor/editor';
import type { IdText } from '../core/custom-types';
export declare class ReadFn {
    getValue(editor: IDomEditor): string | null;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, idtext: IdText): void;
}
declare const _default: import("vue").DefineComponent<Readonly<{
    popover?: any;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "error"[], "error", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
    popover?: any;
}>>> & {
    onError?: ((...args: any[]) => any) | undefined;
}, {
    readonly popover?: any;
}, {}>;
export default _default;
