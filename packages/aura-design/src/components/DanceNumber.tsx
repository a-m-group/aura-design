import { onMount } from 'solid-js';
import { customElement } from 'solid-element';

import { TAG_PREFIX } from './config';

import { css } from '../utils';

export interface Props {
    number: number;
    size: number;
}

export const DanceNumber = (props: Props, { element }: any) => {
    const styles = css`
        :host {
            display: inline-block;
        }
        .box {
            height: ${props.size + 2}px;
            line-height: ${props.size + 2}px;
            position: relative;
            overflow: hidden;
        }
        .nums-chip {
            transition: transform 1.5s;
            transform: translate(0, -50%);
            overflow: hidden;
        }
        .number {
            font-size: ${props.size}px;
            line-height: ${props.size + 2}px;
        }
    `;
    onMount(() => {
        setTimeout(() => {
            const counter = element.shadowRoot.querySelector('.nums-chip');
            counter.style.transform = `translate(0, -${props.number * 10}%)`;
        }, 10);
    });
    return (
        <>
            <style>{styles}</style>
            <div class="box">
                <div class="nums-chip">
                    <div class="number">0</div>
                    <div class="number">1</div>
                    <div class="number">2</div>
                    <div class="number">3</div>
                    <div class="number">4</div>
                    <div class="number">5</div>
                    <div class="number">6</div>
                    <div class="number">7</div>
                    <div class="number">8</div>
                    <div class="number">9</div>
                </div>
            </div>
        </>
    );
};

export default () => {
    customElement(`${TAG_PREFIX}-dance-number`, { number: 0, size: 12 }, DanceNumber);
};
