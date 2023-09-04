import type { FilterSpeaker } from '../../model';
declare const _default: import("vue").DefineComponent<{
    filter: {
        type: import("vue").PropType<FilterSpeaker>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:filter': (value: FilterSpeaker) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    filter: {
        type: import("vue").PropType<FilterSpeaker>;
        required: true;
    };
}>> & {
    "onUpdate:filter"?: ((value: FilterSpeaker) => any) | undefined;
}, {}, {}>;
export default _default;
