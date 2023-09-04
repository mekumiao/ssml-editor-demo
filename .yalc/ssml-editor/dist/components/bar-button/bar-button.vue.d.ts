import { type IDomEditor } from '@wangeditor/editor';
declare const _default: import("vue").DefineComponent<{
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    text: {
        type: import("vue").PropType<string>;
        required: true;
    };
    icon: {
        type: import("vue").PropType<string>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (editor: IDomEditor) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    text: {
        type: import("vue").PropType<string>;
        required: true;
    };
    icon: {
        type: import("vue").PropType<string>;
        required: true;
    };
}>> & {
    onClick?: ((editor: IDomEditor) => any) | undefined;
}, {
    disabled: boolean;
}, {}>;
export default _default;
