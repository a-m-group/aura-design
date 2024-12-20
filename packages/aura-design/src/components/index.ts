import * as CustomElements from './main';
import '../theme/main.css';
import '../theme/light.css';
import '../theme/dark.css';
export * from './main';
export const defineCustomElements = (elements: Record<string, any> = CustomElements) => {
    for (const key in elements) {
        const element = elements[key];
        element();
    }
};
export { registerIcon } from './Icon';

export const originalArrayToString = Array.prototype.toString;
// array prop to string
export const dangerouslyArrayToString = ()=> {
    Array.prototype.toString = function() {
        try {
            return JSON.stringify(this);
        } catch (error) {
            console.error("Error converting array to JSON string:", error);
            return '[]';
        }
    };
}

