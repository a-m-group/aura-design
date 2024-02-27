import type { Component } from 'solid-js';
import { customElement } from 'solid-element';

import { TAG_PREFIX } from './config';

import { css } from '../utils';

export const PlaceHolder: Component = () => {
    const styles = css`
        :host {
            display: block;
            background: var(--gray-3);
        }
        .place-holder {
            height: inherit;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            box-sizing: border-box;
        }
    `;
    return (
        <>
            <style>{styles}</style>
            <div class="place-holder">
                <slot></slot>
            </div>
        </>
    );
};

export default () => {
    customElement(`${TAG_PREFIX}-place-holder`, PlaceHolder);
};
