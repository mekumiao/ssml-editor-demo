import { type Speaker } from '../model';
export declare const useTryPlayStore: import("pinia").StoreDefinition<"--editor-try-play", import("pinia")._UnwrapAll<Pick<{
    speaker: import("vue").ComputedRef<{
        id: string;
        avatar: string;
        isFree: boolean;
        isStar: boolean;
        isSupper24K: boolean;
        roles: {
            label: string;
            value: string;
            avatar?: string | undefined;
            emoji?: string | undefined;
        }[];
        styles: {
            label: string;
            value: string;
            avatar?: string | undefined;
            emoji?: string | undefined;
        }[];
        label: string;
        value: string;
    }>;
    setSpeaker: (value: Speaker) => void;
}, never>>, Pick<{
    speaker: import("vue").ComputedRef<{
        id: string;
        avatar: string;
        isFree: boolean;
        isStar: boolean;
        isSupper24K: boolean;
        roles: {
            label: string;
            value: string;
            avatar?: string | undefined;
            emoji?: string | undefined;
        }[];
        styles: {
            label: string;
            value: string;
            avatar?: string | undefined;
            emoji?: string | undefined;
        }[];
        label: string;
        value: string;
    }>;
    setSpeaker: (value: Speaker) => void;
}, "speaker">, Pick<{
    speaker: import("vue").ComputedRef<{
        id: string;
        avatar: string;
        isFree: boolean;
        isStar: boolean;
        isSupper24K: boolean;
        roles: {
            label: string;
            value: string;
            avatar?: string | undefined;
            emoji?: string | undefined;
        }[];
        styles: {
            label: string;
            value: string;
            avatar?: string | undefined;
            emoji?: string | undefined;
        }[];
        label: string;
        value: string;
    }>;
    setSpeaker: (value: Speaker) => void;
}, "setSpeaker">>;
