import { SlateNode, type SlateDescendant } from '@wangeditor/editor';
import type { MsttsBackgroundaudio } from './mstts-backgroundaudio';
import type { Speak } from './speak';
import type { Voice } from './voice';
export declare function serializeMsttsBackgroundaudio(node: MsttsBackgroundaudio): string;
export declare function serializeVoice(node: Voice, children: string): string;
export declare function serializeSpeak(node: Speak, children: string): string;
export declare function serializeNode(node: SlateNode): string;
export declare function serializeToSSML(children: SlateDescendant[]): string;
