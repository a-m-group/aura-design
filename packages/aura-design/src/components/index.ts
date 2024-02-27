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
