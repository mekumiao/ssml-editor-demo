export declare class CancellationTokenSource {
    private timeoutMilliseconds;
    private cancelled;
    private timeoutId;
    constructor(timeoutMilliseconds: number);
    get token(): CancellationToken;
    cancel(): void;
    private clearTimeout;
    startTimeout(): void;
}
export interface CancellationToken {
    isCancellationRequested: () => boolean;
}
