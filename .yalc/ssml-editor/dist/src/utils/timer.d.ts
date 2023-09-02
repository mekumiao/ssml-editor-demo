export declare class Timer {
    private timeoutSeconds;
    private isStop;
    private readonly count;
    private timeoutId;
    constructor(timeoutSeconds?: number);
    private clearTimeout;
    get state(): import("vue").ComputedRef<number>;
    start(timeoutSeconds?: number): void;
    stop(): void;
}
