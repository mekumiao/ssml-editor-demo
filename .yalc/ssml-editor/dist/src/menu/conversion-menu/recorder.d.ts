export declare class Recorder {
    private mediaRecorder;
    constructor();
    open(): Promise<Blob>;
    stop(): void;
}
