import type { PropType as __PropType } from 'vue';
import type { LabelValue } from '../../model';
import type { FilterBarSearch } from './data';
declare const _sfc_main: import("vue").DefineComponent<{
    menus: {
        type: __PropType<LabelValue[]>;
        required: true;
    };
    fetchScene: {
        type: __PropType<() => Promise<LabelValue[]>>;
        required: true;
    };
    fetchStyle: {
        type: __PropType<() => Promise<LabelValue[]>>;
        required: true;
    };
    fetchData: {
        type: __PropType<(filter: FilterBarSearch) => Promise<LabelValue[]>>;
        required: true;
    };
    sceneList: {
        type: __PropType<LabelValue[] | undefined>;
        required: false;
    };
    styleList: {
        type: __PropType<LabelValue[] | undefined>;
        required: false;
    };
    dataList: {
        type: __PropType<LabelValue[] | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "submit"[], "submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    menus: {
        type: __PropType<LabelValue[]>;
        required: true;
    };
    fetchScene: {
        type: __PropType<() => Promise<LabelValue[]>>;
        required: true;
    };
    fetchStyle: {
        type: __PropType<() => Promise<LabelValue[]>>;
        required: true;
    };
    fetchData: {
        type: __PropType<(filter: FilterBarSearch) => Promise<LabelValue[]>>;
        required: true;
    };
    sceneList: {
        type: __PropType<LabelValue[] | undefined>;
        required: false;
    };
    styleList: {
        type: __PropType<LabelValue[] | undefined>;
        required: false;
    };
    dataList: {
        type: __PropType<LabelValue[] | undefined>;
        required: false;
    };
}>> & {
    onSubmit?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _sfc_main;
