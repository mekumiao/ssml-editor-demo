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
export interface SubmitData extends LabelValue {
    role: string;
    style: string;
    speed: string;
    pitch: string;
}
