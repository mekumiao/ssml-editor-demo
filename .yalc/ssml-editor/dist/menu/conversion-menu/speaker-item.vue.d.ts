declare const _default: import("vue").DefineComponent<{
    label: {
        type: import("vue").PropType<string>;
        required: true;
    };
    value: {
        type: import("vue").PropType<string>;
    };
    avatar: {
        type: import("vue").PropType<string>;
    };
    activated: {
        type: import("vue").PropType<boolean>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (value: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: import("vue").PropType<string>;
        required: true;
    };
    value: {
        type: import("vue").PropType<string>;
    };
    avatar: {
        type: import("vue").PropType<string>;
    };
    activated: {
        type: import("vue").PropType<boolean>;
    };
}>> & {
    onClick?: ((value: string) => any) | undefined;
}, {}, {}>;
export default _default;
