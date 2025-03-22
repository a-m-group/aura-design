import * as CustomElements from './main';
import '../theme/main.css';
import '../theme/light.css';
import '../theme/dark.css';

export * from './main';
export { setupFontSymbol } from '../utils';
export const defineCustomElements = (elements: Record<string, () => void> = CustomElements) => {
    // setupFontSymbol();
    for (const key in elements) {
        const element = elements[key];
        element();
    }
};

export const originalArrayToString = Array.prototype.toString;
// array prop to string
export const dangerouslyArrayToString = () => {
    Array.prototype.toString = function () {
        try {
            return JSON.stringify(this);
        } catch (error) {
            console.error('Error converting array to JSON string:', error);
            return '[]';
        }
    };
};
