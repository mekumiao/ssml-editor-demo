import { type Ref } from 'vue';
export declare function withLimitView(box: Ref<HTMLElement | undefined>, position: Ref<{
    x: number;
    y: number;
}>): {
    style: import("vue").ComputedRef<string>;
};
