export declare class FileSelector {
    private readonly id;
    private readonly accept;
    private dom;
    private isdestroy;
    private resolve;
    private reject;
    constructor(id: string, accept: string);
    private createInputElement;
    private change;
    private cancel;
    open(): Promise<File>;
    destroy(): void;
}
