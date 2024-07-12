import { For } from 'solid-js';
import { customElement } from 'solid-element';

import { TAG_PREFIX } from './config';
import DanceNumber from './DanceNumber';

import { css } from '../utils';

DanceNumber();
export interface Props {
    count: number | string;
    size: number;
    type: 'default' | 'card';
}

export const DanceCount = (props: Props) => {
    const styles = css`
        :host {
            display: inline-flex;
            --dance-count-bg: var(--ar-color-primary);
            --dance-count-height: 82px;
            --dance-count-width: 65px;
        }
        .card {
            display: inline-flex;
            height: var(--dance-count-height);
            width: var(--dance-count-width);
            justify-content: center;
            align-items: center;
            background: var(--dance-count-bg);
            border-radius: 10px;
            margin-right: 5px;
            font-size: ${props.size}px;
            color: var(--ar-color-white);
        }
    `;
    const numbers = `${props.count}`.split('').map((char) => (char === ',' ? ',' : parseInt(char)));
    return (
        <>
            <style>{styles}</style>
            <For each={numbers}>
                {(number) =>
                    number === ',' ? (
                        <span>,</span>
                    ) : (
                        <div class={props.type === 'card' ? 'card' : ''}>
                            <ar-dance-number size={props.size} number={number}></ar-dance-number>
                        </div>
                    )
                }
            </For>
        </>
    );
};

export default () => {
    customElement(`${TAG_PREFIX}-dance-count`, { count: 0, size: 12, type: 'default' }, DanceCount);
};
