import type { LabelValue } from './label-value';
export interface Speaker extends LabelValue {
    avatar: string;
    isFree: boolean;
    isStar: boolean;
    isSupper24K: boolean;
    roles: (LabelValue & {
        avatar?: string;
        emoji?: string;
    })[];
    styles: (LabelValue & {
        avatar?: string;
        emoji?: string;
    })[];
}
export declare function defaultSpeaker(): Speaker;
export interface FilterSpeaker {
    word: string;
    category: string;
    gender: string;
    tag: string;
}
export declare function defaultFilterSpeaker(): FilterSpeaker;
