export declare const readList: readonly [{
    readonly label: "重音";
    readonly value: "z";
}, {
    readonly label: "拖音";
    readonly value: "t";
}, {
    readonly label: "重音+拖音";
    readonly value: "z+t";
}];
export declare const readValueMap: {
    z: {
        pitch: string;
        rate: undefined;
    };
    t: {
        pitch: undefined;
        rate: string;
    };
    'z+t': {
        pitch: string;
        rate: string;
    };
};
export type ReadLabelValue = {
    value: (typeof readList)[number]['value'];
    label: string;
};
