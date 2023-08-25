import type { PropType as __PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    visible: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    trigger: {
        type: __PropType<"click" | "hover" | "focus" | "contextmenu">;
        required: true;
    };
    hideAfter: {
        type: __PropType<number | undefined>;
        required: false;
    };
    width: {
        type: __PropType<number | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:visible"[], "update:visible", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    trigger: {
        type: __PropType<"click" | "hover" | "focus" | "contextmenu">;
        required: true;
    };
    hideAfter: {
        type: __PropType<number | undefined>;
        required: false;
    };
    width: {
        type: __PropType<number | undefined>;
        required: false;
    };
}>> & {
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _sfc_main;
