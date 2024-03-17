import { onMount } from 'solid-js';
import { customElement } from 'solid-element';

import { TAG_PREFIX } from './config';

import { css } from '../utils';

type Props = {
    content?: string;
    src?: string;
};
export const Portal = ({ content, src }: Props, { element }: any) => {
    const styles = css`
        :host {
            display: block;
            width: 100%;
            background: var(--bg-1);
        }
        #iframe {
            width: inherit;
            height: inherit;
            border: none;
        }
    `;
    onMount(() => {
        const iframe = element.shadowRoot.getElementById('iframe');
        if (content) {
            iframe.contentDocument.write(content);
            element.removeAttribute('content');
        }
    });
    return (
        <>
            <style>{styles}</style>
            <iframe src={src} id="iframe"></iframe>
        </>
    );
};

export default () => {
    customElement(`${TAG_PREFIX}-portal`, { src: '', content: '' }, Portal);
};
