import { type Speaker } from '../model';
import AudioPlayer from '../menu/conversion-menu/audio-player';
export declare const useTryPlayStore: import("pinia").StoreDefinition<"--editor-try-play", import("pinia")._UnwrapAll<Pick<{
    speaker: import("vue").ComputedRef<{
        id: string;
        name: string;
        displayName: string;
        category: string;
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
    }>;
    setSpeaker: (value: Speaker) => void;
    audioPlayer: import("vue").ComputedRef<AudioPlayer>;
}, never>>, Pick<{
    speaker: import("vue").ComputedRef<{
        id: string;
        name: string;
        displayName: string;
        category: string;
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
    }>;
    setSpeaker: (value: Speaker) => void;
    audioPlayer: import("vue").ComputedRef<AudioPlayer>;
}, "speaker" | "audioPlayer">, Pick<{
    speaker: import("vue").ComputedRef<{
        id: string;
        name: string;
        displayName: string;
        category: string;
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
    }>;
    setSpeaker: (value: Speaker) => void;
    audioPlayer: import("vue").ComputedRef<AudioPlayer>;
}, "setSpeaker">>;
