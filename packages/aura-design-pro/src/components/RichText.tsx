import { onMount } from 'solid-js';
import MarkdownIt from 'markdown-it';
import MarkdownItHighlight from 'markdown-it-highlightjs';
import MarkdownItContainer from 'markdown-it-container';
import { customElement } from 'solid-element';

import { TAG_PREFIX } from './config';
import markdownWrapper from '../utils/markdownWrapper';
import { copyToClipboard } from '../utils/copyToClipboard';
import styles from './RichText.css?inline';

const md = MarkdownIt({
    linkify: true,
    breaks: true,
})
    .use(MarkdownItHighlight, {
        inline: true,
    })
    .use(markdownWrapper)
    .use(MarkdownItContainer, 'custom-ui', {
        validate: (params: string) => {
            return params.trim().match(/^custom-ui\s+(.*)$/);
        },
        render: (tokens: any, idx: number) => {
            const m = tokens[idx].info.trim().match(/^custom-ui\s+(.*)$/);
            if (tokens[idx].nesting === 1) {
                // opening tag
                return '<div>' + m[1] + '\n';
            } else {
                // closing tag
                return '</div>\n';
            }
        },
    });

export type Props = {
    theme: string;
    text: string;
};

export const RichText = (props: Props, { element }: any) => {
    const timeoutIdMap: Map<HTMLElement, NodeJS.Timeout> = new Map();
    onMount(() => {
        element.shadowRoot.addEventListener('click', (e: Event) => {
            const el = e.target as HTMLElement;
            if (el.matches('.copy')) {
                const parent = element.shadowRoot.querySelector('.title-chip');
                const sibling = parent.nextElementSibling as HTMLPreElement | null;
                if (!parent || !sibling) {
                    return;
                }
                const text = sibling.innerText;
                copyToClipboard(text.trim()).then(() => {
                    el.innerText = 'Copied';
                    clearTimeout(timeoutIdMap.get(el));
                    const timeoutId = setTimeout(() => {
                        el.innerText = 'Copy';
                        el.blur();
                        timeoutIdMap.delete(el);
                    }, 1000);
                    timeoutIdMap.set(el, timeoutId);
                });
            }
            if (el.matches('.browser')) {
                const parent = element.shadowRoot.querySelector('.title-chip');
                const sibling = parent.nextElementSibling as HTMLPreElement | null;
                if (!parent || !sibling) {
                    return;
                }
                const text = sibling.innerText;
                const customEvent = new CustomEvent('browser', {
                    detail: {
                        value: text,
                    },
                    bubbles: true,
                });
                element.dispatchEvent(customEvent);
            }
        });
    });
    return (
        <>
            <link
                href={`https://cdn.jsdelivr.net/npm/highlight.js@11.7.0/styles/atom-one-${props.theme}.min.css`}
                rel="stylesheet"
            ></link>
            <style>{styles}</style>
            <div innerHTML={md.render(props.text)}></div>
        </>
    );
};

export default () => {
    customElement(`${TAG_PREFIX}-rich-text`, { theme: 'light', text: '' }, RichText);
};
