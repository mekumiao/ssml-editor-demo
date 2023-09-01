import type { FilterSpeaker, LabelValue } from '../model';
import type { IEditorConfig } from '@wangeditor/editor';
import type { FilterBarSearch } from '../components/bar-search';
import type { Speaker } from '../model';
import { type AudioInfo } from '../menu/conversion-menu/data';
import type { CancellationToken } from '../utils';
type FetahFunction = (word: string) => Promise<LabelValue[]>;
type FilterFetahFunction = (filter: FilterBarSearch) => Promise<LabelValue[]>;
type FilterSpeakerFetahFunction = (filter: FilterSpeaker) => Promise<Speaker[]>;
export type GlobalEditorConfig = ReturnType<typeof createGlobalEditorConfig>;
export interface SSMLEditorConfig {
    editorConfig?: IEditorConfig;
    handleError: (error: string, detail?: any) => void;
    pinyin: {
        fetchData: FetahFunction;
    };
    english: {
        fetchData: FetahFunction;
    };
    bgm: {
        menus?: LabelValue[];
        fetchScene: () => Promise<LabelValue[]>;
        fetchStyle: () => Promise<LabelValue[]>;
        fetchData: FilterFetahFunction;
    };
    special: {
        menus?: LabelValue[];
        fetchScene: () => Promise<LabelValue[]>;
        fetchStyle: () => Promise<LabelValue[]>;
        fetchData: FilterFetahFunction;
    };
    tryPlay: {
        gender?: LabelValue[];
        topFlag?: LabelValue[];
        category?: LabelValue[];
        fetchData: FilterSpeakerFetahFunction;
        featchTag: () => Promise<LabelValue[]>;
        fetchStar: (speaker: string, star: boolean) => Promise<boolean>;
    };
    conversion: {
        timeoutMilliseconds: number;
        audioUpload: (file: File | Blob, token: CancellationToken) => Promise<AudioInfo>;
        transfer: (opt: {
            audioId: string;
            speakerId: string;
        }) => Promise<AudioInfo>;
        fetchSpeaker: () => Promise<Speaker[]>;
    };
}
export declare function createGlobalEditorConfig(config?: SSMLEditorConfig): {
    editorConfig: IEditorConfig | {
        maxLength: number;
        placeholder: string;
    };
    handleError: (error: string, detail?: any) => void;
    pinyin: {
        fetchData: FetahFunction;
    };
    english: {
        fetchData: FetahFunction;
    };
    bgm: Required<{
        menus?: LabelValue[] | undefined;
        fetchScene: () => Promise<LabelValue[]>;
        fetchStyle: () => Promise<LabelValue[]>;
        fetchData: FilterFetahFunction;
    }>;
    special: Required<{
        menus?: LabelValue[] | undefined;
        fetchScene: () => Promise<LabelValue[]>;
        fetchStyle: () => Promise<LabelValue[]>;
        fetchData: FilterFetahFunction;
    }>;
    tryPlay: Required<{
        gender?: LabelValue[] | undefined;
        topFlag?: LabelValue[] | undefined;
        category?: LabelValue[] | undefined;
        fetchData: FilterSpeakerFetahFunction;
        featchTag: () => Promise<LabelValue[]>;
        fetchStar: (speaker: string, star: boolean) => Promise<boolean>;
    }>;
    conversion: {
        timeoutMilliseconds: number;
        audioUpload: (file: File | Blob, token: CancellationToken) => Promise<AudioInfo>;
        transfer: (opt: {
            audioId: string;
            speakerId: string;
        }) => Promise<AudioInfo>;
        fetchSpeaker: () => Promise<Speaker[]>;
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
        fetchSpeaker: () => Promise<Speaker[]>;
    };
};
export {};
