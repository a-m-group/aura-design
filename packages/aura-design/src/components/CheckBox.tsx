import { onMount, createSignal } from 'solid-js';
import { customElement } from 'solid-element';

import { TAG_PREFIX } from './config';

import { css } from '../utils';

export interface Props {
    value: boolean;
}

export const CheckBox = (props: Props, { element }: any) => {
    const styles = css`
        :host {
            display: inline-block;
        }

        .container input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }

        .container {
            display: flex;
            align-items: center;
            gap: 6px;
            position: relative;
            cursor: pointer;
            user-select: none;
        }

        /* Create a custom checkbox */
        .checkmark {
            position: relative;
            top: 0;
            left: 0;
            height: var(--checkbox-size);
            width: var(--checkbox-size);
            background-color: var(--bg-2);
            transition: all 0.3s;
            border-radius: 5px;
        }

        /* When the checkbox is checked, add a blue background */
        .container input:checked ~ .checkmark {
            background-color: var(--primary-color);
            animation: pop 0.5s;
            animation-direction: alternate;
        }

        /* Create the checkmark/indicator (hidden when not checked) */
        .checkmark:after {
            content: '';
            position: absolute;
            display: none;
        }

        /* Show the checkmark when checked */
        .container input:checked ~ .checkmark:after {
            display: block;
        }

        /* Style the checkmark/indicator */
        .container .checkmark:after {
            left: 50%;
            top: 50%;
            width: 0.25em;
            height: 0.5em;
            border: solid white;
            border-width: 0 0.15em 0.15em 0;
            transform: translate(-50%, -60%) rotate(45deg);
        }

        @keyframes pop {
            0% {
                transform: scale(1);
            }

            50% {
                transform: scale(0.9);
            }

            100% {
                transform: scale(1);
            }
        }
    `;
    const [value, setValue] = createSignal(props.value);
    const handleChange = () => {
        setValue(!value());
        const customEvent = new CustomEvent('change', {
            detail: {
                value: value(),
            },
            bubbles: true,
        });
        element.dispatchEvent(customEvent);
    };
    return (
        <>
            <style>{styles}</style>
            <label class="container">
                <input type="checkbox" onChange={handleChange} />
                <div class="checkmark"></div>
                <slot></slot>
            </label>
        </>
    );
};

export default () => {
    customElement(`${TAG_PREFIX}-checkbox`, { value: false }, CheckBox);
};
