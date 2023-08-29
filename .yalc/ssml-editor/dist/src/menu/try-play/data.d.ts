import type { LabelValue } from '../../model';
export interface AnchorAvatarData extends LabelValue {
    src?: string;
    isFree?: boolean;
}
export interface StyleAvatarData extends LabelValue {
    src?: string;
}
export declare function formatPitch(v: number): string;
export declare function formatRate(v: number): string;
