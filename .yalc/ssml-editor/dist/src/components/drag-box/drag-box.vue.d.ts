import type { PropType as __PropType } from 'vue';
import { type Position } from '@vueuse/core';
declare const _sfc_main: import("vue").DefineComponent<{
    visible: {
        type: __PropType<boolean>;
        required: true;
    };
    position: {
        type: __PropType<Position>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "update:position")[], "update:visible" | "update:position", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: __PropType<boolean>;
        required: true;
    };
    position: {
        type: __PropType<Position>;
        required: true;
    };
}>> & {
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    "onUpdate:position"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _sfc_main;
