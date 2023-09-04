import { type Position } from '@vueuse/core';
declare function setPosition(opt: Position): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    visible: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    initialValue: {
        type: import("vue").PropType<Position>;
    };
}, {
    setPosition: typeof setPosition;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:visible': (value: boolean) => void;
    close: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    initialValue: {
        type: import("vue").PropType<Position>;
    };
}>> & {
    onClose?: (() => any) | undefined;
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
