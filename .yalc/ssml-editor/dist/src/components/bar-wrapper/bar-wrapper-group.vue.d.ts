import type { PropType as __PropType } from 'vue';
type DividerColor = 'green' | 'cyan' | 'orange' | 'purple' | 'yellow';
declare const _sfc_main: import("vue").DefineComponent<{
    divider: {
        type: __PropType<DividerColor>;
        required: true;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    divider: {
        type: __PropType<DividerColor>;
        required: true;
        default: string;
    };
}>>, {
    divider: DividerColor;
}, {}>;
export default _sfc_main;