import type { App } from 'vue';
import { BarButton, BarInput } from './components';
import { SpeakerMenu, ContinuousMenu, ReadMenu, DigitalMenu, AliasMenu, EnglishMenu, ChangespeedMenu, RhythmMenu, SpecialMenu, MuteMenu } from './menu';
export { default as SSMLModule, type IdText } from './core';
export declare const EditorMenuPlugin: {
    install: (app: App) => void;
};
export { BarButton, BarInput, SpeakerMenu, ContinuousMenu, ReadMenu, DigitalMenu, AliasMenu, EnglishMenu, ChangespeedMenu, RhythmMenu, SpecialMenu, MuteMenu };
