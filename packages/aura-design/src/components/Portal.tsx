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
            height: 100%;
            background: rgba(255, 255, 255, 0.95);
        }
        #iframe {
            width: inherit;
            height: inherit;
            border: none;
        }
    `;
    onMount(() => {
        const iframe = element.shadowRoot.getElementById('iframe');
        iframe.onload = ()=> {
            // console.log('iframe load loaded')
            element.dispatchEvent(new CustomEvent('load', { bubbles: true }));
        };
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
