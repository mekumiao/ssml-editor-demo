import BaseFn from '../base-fn';
import type { LabelValue } from '../../model';
export declare class MuteFn extends BaseFn {
    protected key: string;
    isDisabled(): boolean;
    exec(opt: LabelValue): void;
}
