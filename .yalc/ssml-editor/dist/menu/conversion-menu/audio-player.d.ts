export declare class AudioPlayer {
    private audio;
    private readonly isPlaying;
    private readonly isLoading;
    private loadResolve;
    private loadReject;
    constructor();
    load(audioSource: string): Promise<void>;
    play(): void;
    pause(): void;
    togglePlayPause(): void;
    get playState(): import("vue").ComputedRef<"playing" | "paused">;
    get loadState(): import("vue").ComputedRef<"loading" | "complete">;
}
export default AudioPlayer;
