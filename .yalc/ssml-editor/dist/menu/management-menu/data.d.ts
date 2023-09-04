import type { LabelValue } from '../../model';
export declare const speed: () => {
    value: string;
    label: string;
}[];
export declare const pitch: () => {
    value: string;
    label: string;
}[];
export declare function formatPitch(v: number): string;
export declare function formatRate(v: number): string;
export interface ContentData {
    category: string;
    name: string;
    role: string;
    style: string;
    speed: string;
    pitch: string;
}
export declare function defaultContentData(): ContentData;
export type SubmitData = ContentData & LabelValue;
export interface RecentUsageSpeaker extends ContentData {
    id: string;
    label: string;
}
export declare function defaultRecentUsageSpeaker(): RecentUsageSpeaker;
