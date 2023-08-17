import { type IDomEditor } from '@wangeditor/editor';
export declare class ContinuousFn {
    getValue(editor: IDomEditor): string;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor): void;
}
declare const _default: import("vue").DefineComponent<{}, () => JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "error"[], "error", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    onError?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
