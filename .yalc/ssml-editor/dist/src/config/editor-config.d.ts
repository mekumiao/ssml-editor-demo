import type { FilterSpeaker, LabelValue } from '../model';
import type { IEditorConfig } from '@wangeditor/editor';
import type { FilterBarSearch } from '../components/bar-search';
import type { Speaker } from '../model';
type FetahFunction = (word: string) => Promise<LabelValue[]>;
type FilterFetahFunction = (filter: FilterBarSearch) => Promise<LabelValue[]>;
type FilterSpeakerFetahFunction = (filter: FilterSpeaker) => Promise<Speaker[]>;
export type GlobalEditorConfig = ReturnType<typeof createGlobalEditorConfig>;
export interface SSMLEditorConfig {
    editorConfig?: IEditorConfig;
    handleError: (error: string) => void;
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
        category?: LabelValue[];
        flags?: LabelValue[];
        fetchData: FilterSpeakerFetahFunction;
        featchTag: () => Promise<LabelValue[]>;
        fetchFlag: (flag: string) => Promise<Speaker[]>;
        fetchStar: (speaker: string, star: boolean) => Promise<boolean>;
    };
}
export declare function createGlobalEditorConfig(config?: SSMLEditorConfig): {
    editorConfig: IEditorConfig | {
        maxLength: number;
        placeholder: string;
    };
    handleError: (error: string) => void;
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
        category?: LabelValue[] | undefined;
        flags?: LabelValue[] | undefined;
        fetchData: FilterSpeakerFetahFunction;
        featchTag: () => Promise<LabelValue[]>;
        fetchFlag: (flag: string) => Promise<Speaker[]>;
        fetchStar: (speaker: string, star: boolean) => Promise<boolean>;
    }>;
};
export {};
