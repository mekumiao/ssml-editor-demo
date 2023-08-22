import { type VNode } from 'snabbdom';
import type { SSMLBaseElement } from './base';
export declare const userSelectNo: {
    style: {
        userSelect: string;
    };
    contentEditable: boolean;
};
export declare function createVoid(args: SSMLBaseElement & {
    plain: string;
}, onclose: VoidFunction): VNode;
export declare function createWithChildren(args: SSMLBaseElement, children: VNode[] | null, onclose: VoidFunction): VNode;
export declare function createSingle(args: SSMLBaseElement, onclose: VoidFunction): VNode;
export declare function createSingleWithPlay(args: SSMLBaseElement, on?: {
    close: VoidFunction;
    play: VoidFunction;
}): VNode;
