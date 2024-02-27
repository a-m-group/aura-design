import type { Component } from 'solid-js';
import { customElement } from 'solid-element';

import { TAG_PREFIX } from '../config';
import { css } from '../../utils';

export interface Props {
    gap: string;
    cols: string | number;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    min: string | number;
}

export const Grid: Component<Props> = (props) => {
    const styles = css`
        .grid-layout {
            --cols: ${props.cols};
            display: grid;
            grid-gap: ${props.gap};
            grid-template-columns: repeat(var(--cols), minmax(${props.min}, 1fr));
        }
        @media screen and (max-width: 320px) {
            .grid-layout {
                --cols: ${props.xs || props.cols};
            }
        }
        @media screen and (min-width: 480px) {
            .grid-layout {
                --cols: ${props.sm || props.cols};
            }
        }
        @media screen and (min-width: 768px) {
            .grid-layout {
                --cols: ${props.md || props.cols};
            }
        }
        @media screen and (min-width: 1280px) {
            .grid-layout {
                --cols: ${props.lg || props.cols};
            }
        }
        @media screen and (min-width: 1920px) {
            .grid-layout {
                --cols: ${props.xl || props.cols};
            }
        }
    `;
    return (
        <>
            <style>{styles}</style>
            <div class="grid-layout">
                <slot></slot>
            </div>
        </>
    );
};

export default () => {
    customElement(
        `${TAG_PREFIX}-layout-grid`,
        {
            gap: '1rem',
            cols: 'auto-fit',
            xs: undefined,
            sm: undefined,
            md: undefined,
            lg: undefined,
            xl: undefined,
            min: '0',
        },
        Grid,
    );
};
