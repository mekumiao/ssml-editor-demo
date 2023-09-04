import type { LabelValue } from './label-value';
export interface Speaker {
    id: string;
    name: string;
    displayName: string;
    category: string;
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
    topFlag: string;
    category: string;
    gender: string;
    tag: string;
}
export declare function defaultFilterSpeaker(): FilterSpeaker;
