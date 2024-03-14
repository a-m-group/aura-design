import { customElement } from 'solid-element';

import { TAG_PREFIX } from './config';

import { css } from '../utils';

export interface Props {
    order?: number;
    flex?: string | number;
    self?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}

export const FlexItem = (props: Props) => {
    const styles = css`
        :host {
            order: ${props.order};
            flex: ${props.flex};
            align-self: ${props.self};
        }
    `;
    return (
        <>
            <style>{styles}</style>
            <slot></slot>
        </>
    );
};

export default () => {
    customElement(
        `${TAG_PREFIX}-flex-item`,
        { order: 0, flex: '0 1 auto', self: 'auto' },
        FlexItem,
    );
};
