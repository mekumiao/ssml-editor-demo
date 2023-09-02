export declare class AudioPlayer {
    private audio;
    private readonly isPlaying;
    constructor();
    load(audioSource: string): void;
    play(): void;
    pause(): void;
    togglePlayPause(): void;
    get playState(): import("vue").ComputedRef<"playing" | "paused">;
}
export default AudioPlayer;
