import { customElement } from 'solid-element';

import { TAG_PREFIX } from './config';

import { css } from '../utils';

export interface Props {
    gap: string;
    direction: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    wrap: 'nowrap' | 'wrap' | ' wrap-reverse';
    items: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
    justify:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'space-evenly';
}

export const FlexBox = (props: Props) => {
    const styles = css`
        :host {
            display: flex;
            width: 100%;
            gap: ${props.gap};
            flex-direction: ${props.direction};
            flex-wrap: ${props.wrap};
            align-items: ${props.items};
            justify-content: ${props.justify};
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
        `${TAG_PREFIX}-flex-box`,
        { gap: '1rem', direction: 'row', wrap: 'wrap', items: 'stretch', justify: 'flex-start' },
        FlexBox,
    );
};
