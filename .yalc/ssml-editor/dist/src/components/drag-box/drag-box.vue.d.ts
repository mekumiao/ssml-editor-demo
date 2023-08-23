import type { PropType as __PropType } from 'vue';
import { type Position } from '@vueuse/core';
declare const _sfc_main: import("vue").DefineComponent<{
    visible: {
        type: __PropType<boolean>;
        required: true;
    };
    initialValue: {
        type: __PropType<Position | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "update:visible")[], "close" | "update:visible", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: __PropType<boolean>;
        required: true;
    };
    initialValue: {
        type: __PropType<Position | undefined>;
        required: false;
    };
}>> & {
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _sfc_main;
