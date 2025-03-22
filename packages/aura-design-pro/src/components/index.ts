import * as CustomElements from './main';
import { defineCustomElements as defineCustomElementsBase } from '@aura-group/aura-design/src/components';
export { setupFontSymbol } from '@aura-group/aura-design/src/components';
export * from './main';
export const defineCustomElements = (elements: Record<string, () => void> = CustomElements) => {
    defineCustomElementsBase();
    for (const key in elements) {
        const element = elements[key];
        element();
    }
};
