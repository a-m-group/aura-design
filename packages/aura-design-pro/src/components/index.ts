import * as CustomElements from './main';
export * from './main';
export const defineCustomElements = (elements: Record<string, () => void> = CustomElements) => {
    for (const key in elements) {
        const element = elements[key];
        element();
    }
};
