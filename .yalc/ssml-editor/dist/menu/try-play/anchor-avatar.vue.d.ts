import type { AnchorAvatarData } from './data';
declare const _default: import("vue").DefineComponent<{
    activate: {
        type: import("vue").PropType<boolean>;
    };
    data: {
        type: import("vue").PropType<AnchorAvatarData>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (value: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    activate: {
        type: import("vue").PropType<boolean>;
    };
    data: {
        type: import("vue").PropType<AnchorAvatarData>;
    };
}>> & {
    onClick?: ((value: string) => any) | undefined;
}, {}, {}>;
export default _default;
