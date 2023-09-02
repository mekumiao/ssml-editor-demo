import type { CancellationToken } from '../../utils';
export declare class Recorder {
    private mediaRecorder;
    private readonly isRecording;
    constructor();
    get recorderState(): import("vue").ComputedRef<"paused" | "recording">;
    start(token: CancellationToken): Promise<Blob>;
    stop(): void;
}
