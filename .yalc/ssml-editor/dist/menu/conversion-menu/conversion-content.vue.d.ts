import type { LabelValue } from '../../model';
declare const _default: import("vue").DefineComponent<{
    text: {
        type: import("vue").PropType<string>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    submit: (value: LabelValue) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: import("vue").PropType<string>;
        required: true;
    };
}>> & {
    onSubmit?: ((value: LabelValue) => any) | undefined;
}, {}, {}>;
export default _default;
