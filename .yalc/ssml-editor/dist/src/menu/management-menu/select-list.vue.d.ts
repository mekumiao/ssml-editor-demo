import type { PropType as __PropType } from 'vue';
import type { LabelValue } from '../../model';
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: __PropType<string>;
        required: true;
    };
    dataList: {
        type: __PropType<LabelValue[]>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: __PropType<string>;
        required: true;
    };
    dataList: {
        type: __PropType<LabelValue[]>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _sfc_main;
