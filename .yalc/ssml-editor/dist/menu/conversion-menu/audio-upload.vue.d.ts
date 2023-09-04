import type { LabelValue } from '../../model';
declare function openInputFile(): Promise<boolean>;
declare const _default: import("vue").DefineComponent<{}, {
    openInputFile: typeof openInputFile;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    submit: (value: LabelValue) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    onSubmit?: ((value: LabelValue) => any) | undefined;
}, {}, {}>;
export default _default;
