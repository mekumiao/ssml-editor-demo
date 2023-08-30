export declare class Recorder {
    private mediaRecorder;
    constructor();
    get state(): RecordingState | undefined;
    start(): Promise<Blob>;
    stop(): void;
}
