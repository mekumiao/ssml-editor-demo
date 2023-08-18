import { type IDomEditor } from '@wangeditor/editor';
import type { IdText } from '../core/custom-types';
export declare class DigitalFn {
    getValue(editor: IDomEditor): string | null;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, idtext: IdText): void;
}
declare const _default: import("vue").DefineComponent<{}, () => JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "error"[], "error", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    onError?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
