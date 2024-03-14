import { customElement } from 'solid-element';

import { TAG_PREFIX } from '../config';

import { css } from '../../utils';

type Props = {
    width: string;
    count: string | number;
    gap: string;
};
export const Masonry = (props: Props) => {
    const styles = css`
        .root {
            column-width: ${props.width};
            column-count: ${props.count};
            column-gap: ${props.gap};
        }
        ::slotted(*) {
            break-inside: avoid;
            margin-bottom: ${props.gap};
        }
    `;
    return (
        <>
            <style>{styles}</style>
            <div class="root">
                <slot></slot>
            </div>
        </>
    );
};

export default () => {
    customElement(
        `${TAG_PREFIX}-layout-masonry`,
        { width: '20rem', count: 'auto', gap: '10px' },
        Masonry,
    );
};
