import { useDraggable } from '@vueuse/core';
import { type Ref } from 'vue';
type UseDraggableReturnType = ReturnType<typeof useDraggable>;
export declare function withLimitView(box: Ref<HTMLElement | undefined>, result: UseDraggableReturnType): {
    style: import("vue").ComputedRef<string>;
};
export {};
