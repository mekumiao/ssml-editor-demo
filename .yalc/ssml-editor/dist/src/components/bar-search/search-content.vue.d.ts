import type { PropType as __PropType } from 'vue';
type MenuKey = 'first' | 'second' | 'last';
type Options = {
    value: string;
    label: string;
};
type MenuItemLabel = {
    [k in MenuKey]: string;
};
declare const _sfc_main: import("vue").DefineComponent<{
    menuItemLabel: {
        type: __PropType<MenuItemLabel>;
        required: true;
    };
    scenes: {
        type: __PropType<Options[]>;
        required: true;
    };
    styles: {
        type: __PropType<Options[]>;
        required: true;
    };
    dataList: {
        type: __PropType<Options[]>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("submit" | "fetch")[], "submit" | "fetch", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    menuItemLabel: {
        type: __PropType<MenuItemLabel>;
        required: true;
    };
    scenes: {
        type: __PropType<Options[]>;
        required: true;
    };
    styles: {
        type: __PropType<Options[]>;
        required: true;
    };
    dataList: {
        type: __PropType<Options[]>;
        required: true;
    };
}>> & {
    onSubmit?: ((...args: any[]) => any) | undefined;
    onFetch?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _sfc_main;
