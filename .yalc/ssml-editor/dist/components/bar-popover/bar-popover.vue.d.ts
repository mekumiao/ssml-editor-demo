declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    visible: {
        type: import("vue").PropType<boolean>;
    };
    trigger: {
        type: import("vue").PropType<"hover" | "click" | "focus" | "contextmenu">;
        required: true;
    };
    hideAfter: {
        type: import("vue").PropType<number>;
    };
    width: {
        type: import("vue").PropType<number>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:visible': (value: boolean) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: import("vue").PropType<boolean>;
    };
    trigger: {
        type: import("vue").PropType<"hover" | "click" | "focus" | "contextmenu">;
        required: true;
    };
    hideAfter: {
        type: import("vue").PropType<number>;
    };
    width: {
        type: import("vue").PropType<number>;
    };
}>> & {
    "onUpdate:visible"?: ((value: boolean) => any) | undefined;
}, {}, {}>, {
    reference?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
