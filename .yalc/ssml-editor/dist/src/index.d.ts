import type { App } from 'vue';
import { SpeakerMenu, ContinuousMenu, ReadMenu, DigitalMenu, AliasMenu, EnglishMenu, ChangespeedMenu, RhythmMenu } from './menu';
export { default as SSMLModule, type IdText } from './core';
export declare const EditorMenuPlugin: {
    install: (app: App) => void;
};
export { SpeakerMenu, ContinuousMenu, ReadMenu, DigitalMenu, AliasMenu, EnglishMenu, ChangespeedMenu, RhythmMenu };
