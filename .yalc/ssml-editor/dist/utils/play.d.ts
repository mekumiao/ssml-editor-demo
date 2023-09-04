export declare class AudioPlayer {
    private audio;
    private src;
    constructor();
    private removeAudioElement;
    play(src: string): void;
    stop(src?: string): void;
}
declare const audioPlayer: AudioPlayer;
export { audioPlayer };
