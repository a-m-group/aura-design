import type { Component } from 'solid-js';
import { customElement } from 'solid-element';

import { TAG_PREFIX } from '../config';

import styles from './Holy.css?inline';

export const Counter: Component = () => {
    return (
        <>
            <style>{styles}</style>
            <slot name="header"></slot>
            <slot name="left-sider"></slot>
            <slot name="content"></slot>
            <slot name="right-sider"></slot>
            <slot name="footer"></slot>
        </>
    );
};

export default () => {
    customElement(`${TAG_PREFIX}-layout-holy`, Counter);
};
