/* @refresh reload */
/**
 * Don't forget the line above for HMR!
 *
 * Note: for some reason HMR breaks if you change .stories file,
 * however reloading the page fixes this issue
 */

/** Autogenerated by Storybook */
import { withActions } from '@storybook/addon-actions/decorator';
import theme from './theme';
import prettier from 'prettier/standalone';
import prettierHTML from 'prettier/parser-html';

import { defineCustomElements, registerIcon, Icon } from '@aura-group/aura-design/src/components';
import { defineCustomElements as defineCustomElementsPro } from '@aura-group/aura-design-pro/src/components';

registerIcon('/iconfont.svg');
defineCustomElements();
// defineCustomElements({
//   Icon
// })
defineCustomElementsPro();

import { render } from 'solid-js/web';

let disposeStory;

// solidjs render
// export const decorators = [
//   (Story) => {
//     disposeStory?.();
//     const solidRoot = document.createElement("div");
//     disposeStory = render(Story, solidRoot);
//     return solidRoot;
//   },
// ];

export const decorators = [withActions];

export const parameters = {
    docs: {
        theme,
        source: {
            transform: (input) =>
                prettier.format(input, {
                    htmlWhitespaceSensitivity: 'ignore',
                    parser: 'html',
                    plugins: [prettierHTML],
                }),
        },
    },
    actions: {
        handles: ['change', 'enter', 'browser'],
    },
    // actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
