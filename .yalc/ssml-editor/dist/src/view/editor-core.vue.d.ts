import type { PropType as __PropType } from 'vue';
import { type IEditorConfig } from '@wangeditor/editor';
declare const _sfc_main: import("vue").DefineComponent<{
    editorConfig: {
        type: __PropType<IEditorConfig>;
        required: true;
    };
    defaultHtml: {
        type: __PropType<string>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("created" | "change")[], "created" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    editorConfig: {
        type: __PropType<IEditorConfig>;
        required: true;
    };
    defaultHtml: {
        type: __PropType<string>;
        required: true;
    };
}>> & {
    onCreated?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _sfc_main;
