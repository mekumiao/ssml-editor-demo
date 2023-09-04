declare function focus(): void;
declare const _default: import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<string>;
    };
}, {
    focus: typeof focus;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    submit: (value: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<string>;
    };
}>> & {
    onSubmit?: ((value: string) => any) | undefined;
}, {}, {}>;
export default _default;
