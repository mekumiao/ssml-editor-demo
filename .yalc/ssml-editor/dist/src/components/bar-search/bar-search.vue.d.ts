import type { PropType as __PropType } from 'vue';
type MenuKey = 'first' | 'second' | 'last';
type MenuItemLabel = {
    [k in MenuKey]: string;
};
declare const _sfc_main: import("vue").DefineComponent<{
    menuItemLabel: {
        type: __PropType<MenuItemLabel>;
        required: true;
    };
    scenes: {
        type: __PropType<LabelValue[]>;
        required: true;
    };
    styles: {
        type: __PropType<LabelValue[]>;
        required: true;
    };
    dataList: {
        type: __PropType<LabelValue[] | undefined>;
        required: false;
    };
    fetch: {
        type: __PropType<(filter: {
            search: string;
            menuKey: MenuKey;
            scene: string;
            style: string;
        }) => Promise<{
            value: string;
            label: string;
        }[]>>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "submit"[], "submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    menuItemLabel: {
        type: __PropType<MenuItemLabel>;
        required: true;
    };
    scenes: {
        type: __PropType<LabelValue[]>;
        required: true;
    };
    styles: {
        type: __PropType<LabelValue[]>;
        required: true;
    };
    dataList: {
        type: __PropType<LabelValue[] | undefined>;
        required: false;
    };
    fetch: {
        type: __PropType<(filter: {
            search: string;
            menuKey: MenuKey;
            scene: string;
            style: string;
        }) => Promise<{
            value: string;
            label: string;
        }[]>>;
        required: true;
    };
}>> & {
    onSubmit?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _sfc_main;
