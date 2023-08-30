import type { IDomEditor } from '@wangeditor/editor';
import { type GlobalEditorConfig } from '../config';
export declare const useEditorStore: import("pinia").StoreDefinition<"--editor-config", import("pinia")._UnwrapAll<Pick<{
    editor: import("vue").ComputedRef<IDomEditor | undefined>;
    globalEditConfig: import("vue").ComputedRef<{
        editorConfig: import("@wangeditor/editor").IEditorConfig | {
            maxLength: number;
            placeholder: string;
        };
        handleError: (error: string, detail?: any) => void;
        pinyin: {
            fetchData: (word: string) => Promise<import("..").LabelValue[]>;
        };
        english: {
            fetchData: (word: string) => Promise<import("..").LabelValue[]>;
        };
        bgm: Required<{
            menus?: import("..").LabelValue[] | undefined;
            fetchScene: () => Promise<import("..").LabelValue[]>;
            fetchStyle: () => Promise<import("..").LabelValue[]>;
            fetchData: (filter: import("..").FilterBarSearch) => Promise<import("..").LabelValue[]>;
        }>;
        special: Required<{
            menus?: import("..").LabelValue[] | undefined;
            fetchScene: () => Promise<import("..").LabelValue[]>;
            fetchStyle: () => Promise<import("..").LabelValue[]>;
            fetchData: (filter: import("..").FilterBarSearch) => Promise<import("..").LabelValue[]>;
        }>;
        tryPlay: Required<{
            gender?: import("..").LabelValue[] | undefined;
            category?: import("..").LabelValue[] | undefined;
            flags?: import("..").LabelValue[] | undefined;
            fetchData: (filter: import("..").FilterSpeaker) => Promise<import("..").Speaker[]>;
            featchTag: () => Promise<import("..").LabelValue[]>;
            fetchFlag: (flag: string) => Promise<import("..").Speaker[]>;
            fetchStar: (speaker: string, star: boolean) => Promise<boolean>;
        }>;
        conversion: {
            timeoutMilliseconds: number;
            audioUpload: (file: File | Blob, token: import("..").CancellationToken) => Promise<import("..").AudioInfo>;
            transfer: (opt: {
                audioId: string;
                speakerId: string;
            }) => Promise<import("..").AudioInfo>;
            fetchSpeaker: () => Promise<import("..").Speaker[]>;
        } | {
            timeoutMilliseconds: number;
            audioUpload: () => {
                id: string;
                src: string;
            };
            transfer: () => {
                id: string;
                src: string;
            };
            fetchSpeaker: () => Promise<import("..").Speaker[]>;
        };
    }>;
    setEditor: (editor: IDomEditor) => void;
    setGlobalEditConfig: (globalConfig?: GlobalEditorConfig) => void;
}, never>>, Pick<{
    editor: import("vue").ComputedRef<IDomEditor | undefined>;
    globalEditConfig: import("vue").ComputedRef<{
        editorConfig: import("@wangeditor/editor").IEditorConfig | {
            maxLength: number;
            placeholder: string;
        };
        handleError: (error: string, detail?: any) => void;
        pinyin: {
            fetchData: (word: string) => Promise<import("..").LabelValue[]>;
        };
        english: {
            fetchData: (word: string) => Promise<import("..").LabelValue[]>;
        };
        bgm: Required<{
            menus?: import("..").LabelValue[] | undefined;
            fetchScene: () => Promise<import("..").LabelValue[]>;
            fetchStyle: () => Promise<import("..").LabelValue[]>;
            fetchData: (filter: import("..").FilterBarSearch) => Promise<import("..").LabelValue[]>;
        }>;
        special: Required<{
            menus?: import("..").LabelValue[] | undefined;
            fetchScene: () => Promise<import("..").LabelValue[]>;
            fetchStyle: () => Promise<import("..").LabelValue[]>;
            fetchData: (filter: import("..").FilterBarSearch) => Promise<import("..").LabelValue[]>;
        }>;
        tryPlay: Required<{
            gender?: import("..").LabelValue[] | undefined;
            category?: import("..").LabelValue[] | undefined;
            flags?: import("..").LabelValue[] | undefined;
            fetchData: (filter: import("..").FilterSpeaker) => Promise<import("..").Speaker[]>;
            featchTag: () => Promise<import("..").LabelValue[]>;
            fetchFlag: (flag: string) => Promise<import("..").Speaker[]>;
            fetchStar: (speaker: string, star: boolean) => Promise<boolean>;
        }>;
        conversion: {
            timeoutMilliseconds: number;
            audioUpload: (file: File | Blob, token: import("..").CancellationToken) => Promise<import("..").AudioInfo>;
            transfer: (opt: {
                audioId: string;
                speakerId: string;
            }) => Promise<import("..").AudioInfo>;
            fetchSpeaker: () => Promise<import("..").Speaker[]>;
        } | {
            timeoutMilliseconds: number;
            audioUpload: () => {
                id: string;
                src: string;
            };
            transfer: () => {
                id: string;
                src: string;
            };
            fetchSpeaker: () => Promise<import("..").Speaker[]>;
        };
    }>;
    setEditor: (editor: IDomEditor) => void;
    setGlobalEditConfig: (globalConfig?: GlobalEditorConfig) => void;
}, "editor" | "globalEditConfig">, Pick<{
    editor: import("vue").ComputedRef<IDomEditor | undefined>;
    globalEditConfig: import("vue").ComputedRef<{
        editorConfig: import("@wangeditor/editor").IEditorConfig | {
            maxLength: number;
            placeholder: string;
        };
        handleError: (error: string, detail?: any) => void;
        pinyin: {
            fetchData: (word: string) => Promise<import("..").LabelValue[]>;
        };
        english: {
            fetchData: (word: string) => Promise<import("..").LabelValue[]>;
        };
        bgm: Required<{
            menus?: import("..").LabelValue[] | undefined;
            fetchScene: () => Promise<import("..").LabelValue[]>;
            fetchStyle: () => Promise<import("..").LabelValue[]>;
            fetchData: (filter: import("..").FilterBarSearch) => Promise<import("..").LabelValue[]>;
        }>;
        special: Required<{
            menus?: import("..").LabelValue[] | undefined;
            fetchScene: () => Promise<import("..").LabelValue[]>;
            fetchStyle: () => Promise<import("..").LabelValue[]>;
            fetchData: (filter: import("..").FilterBarSearch) => Promise<import("..").LabelValue[]>;
        }>;
        tryPlay: Required<{
            gender?: import("..").LabelValue[] | undefined;
            category?: import("..").LabelValue[] | undefined;
            flags?: import("..").LabelValue[] | undefined;
            fetchData: (filter: import("..").FilterSpeaker) => Promise<import("..").Speaker[]>;
            featchTag: () => Promise<import("..").LabelValue[]>;
            fetchFlag: (flag: string) => Promise<import("..").Speaker[]>;
            fetchStar: (speaker: string, star: boolean) => Promise<boolean>;
        }>;
        conversion: {
            timeoutMilliseconds: number;
            audioUpload: (file: File | Blob, token: import("..").CancellationToken) => Promise<import("..").AudioInfo>;
            transfer: (opt: {
                audioId: string;
                speakerId: string;
            }) => Promise<import("..").AudioInfo>;
            fetchSpeaker: () => Promise<import("..").Speaker[]>;
        } | {
            timeoutMilliseconds: number;
            audioUpload: () => {
                id: string;
                src: string;
            };
            transfer: () => {
                id: string;
                src: string;
            };
            fetchSpeaker: () => Promise<import("..").Speaker[]>;
        };
    }>;
    setEditor: (editor: IDomEditor) => void;
    setGlobalEditConfig: (globalConfig?: GlobalEditorConfig) => void;
}, "setEditor" | "setGlobalEditConfig">>;
