declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    activate: {
        type: import("vue").PropType<boolean>;
    };
    value: {
        type: import("vue").PropType<string>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (value: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    activate: {
        type: import("vue").PropType<boolean>;
    };
    value: {
        type: import("vue").PropType<string>;
    };
}>> & {
    onClick?: ((value: string) => any) | undefined;
}, {}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
