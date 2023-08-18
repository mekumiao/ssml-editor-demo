import { type PropType } from 'vue';
export type MenuKey = 'first' | 'second' | 'last';
export type Options = {
    value: string;
    label: string;
};
declare const _default: import("vue").DefineComponent<{
    fetch: {
        type: PropType<(filter: {
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
    scenes: {
        type: PropType<Options[]>;
        required: true;
    };
    styles: {
        type: PropType<Options[]>;
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "error"[], "error", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    fetch: {
        type: PropType<(filter: {
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
    scenes: {
        type: PropType<Options[]>;
        required: true;
    };
    styles: {
        type: PropType<Options[]>;
        required: true;
    };
}>> & {
    onError?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
