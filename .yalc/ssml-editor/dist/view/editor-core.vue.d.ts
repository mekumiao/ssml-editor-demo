import { type IDomEditor } from '@wangeditor/editor';
declare const _default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    created: (editor: IDomEditor) => void;
    change: (editor: IDomEditor) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    onChange?: ((editor: IDomEditor) => any) | undefined;
    onCreated?: ((editor: IDomEditor) => any) | undefined;
}, {}, {}>;
export default _default;
