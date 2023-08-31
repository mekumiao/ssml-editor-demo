export declare class AudioPlayer {
    private audio;
    isPlaying: import("vue").Ref<boolean>;
    constructor();
    load(audioSource: string): void;
    play(): void;
    pause(): void;
    togglePlayPause(): void;
    get playState(): import("vue").ComputedRef<"playing" | "paused">;
}
export default AudioPlayer;
