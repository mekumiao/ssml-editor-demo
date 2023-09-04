import type { LabelValue } from '../../model';
declare function scrollIntoViewTheItem(): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<string>;
        required: true;
    };
    dataList: {
        type: import("vue").PropType<LabelValue[]>;
        required: true;
    };
}, {
    scrollIntoViewTheItem: typeof scrollIntoViewTheItem;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<string>;
        required: true;
    };
    dataList: {
        type: import("vue").PropType<LabelValue[]>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}, {}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
