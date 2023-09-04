import type { LabelValue } from '../../model';
import type { FilterBarSearch } from './data';
declare const _default: import("vue").DefineComponent<{
    menus: {
        type: import("vue").PropType<LabelValue[]>;
        required: true;
    };
    fetchScene: {
        type: import("vue").PropType<() => Promise<LabelValue[]>>;
        required: true;
    };
    fetchStyle: {
        type: import("vue").PropType<() => Promise<LabelValue[]>>;
        required: true;
    };
    fetchData: {
        type: import("vue").PropType<(filter: FilterBarSearch) => Promise<LabelValue[]>>;
        required: true;
    };
    sceneList: {
        type: import("vue").PropType<LabelValue[]>;
    };
    styleList: {
        type: import("vue").PropType<LabelValue[]>;
    };
    dataList: {
        type: import("vue").PropType<LabelValue[]>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    submit: (value: LabelValue) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    menus: {
        type: import("vue").PropType<LabelValue[]>;
        required: true;
    };
    fetchScene: {
        type: import("vue").PropType<() => Promise<LabelValue[]>>;
        required: true;
    };
    fetchStyle: {
        type: import("vue").PropType<() => Promise<LabelValue[]>>;
        required: true;
    };
    fetchData: {
        type: import("vue").PropType<(filter: FilterBarSearch) => Promise<LabelValue[]>>;
        required: true;
    };
    sceneList: {
        type: import("vue").PropType<LabelValue[]>;
    };
    styleList: {
        type: import("vue").PropType<LabelValue[]>;
    };
    dataList: {
        type: import("vue").PropType<LabelValue[]>;
    };
}>> & {
    onSubmit?: ((value: LabelValue) => any) | undefined;
}, {}, {}>;
export default _default;
