import { createSignal, For } from 'solid-js';
import { customElement } from 'solid-element';

import { TAG_PREFIX } from './config';

import { css } from '../utils';

interface Option {
    label: string;
    value: string;
}
interface Props {
    options?: Option[];
    value?: string;
    direction?: 'row' | 'column';
}

export const RadioGroup = (props: Props, { element }: any) => {
    const styles = css`
        :host {
            display: inline-block;
        }

        .root {
            display: flex;
            flex-direction: ${props.direction};
            align-items: center;
            gap: 16px;
            font-size: var(--font-size);
            color: var(--text-color);
        }

        .radio-button {
            display: inline-flex;
            align-items: center;
            position: relative;
            cursor: pointer;
        }

        .radio-button__input {
            position: absolute;
            opacity: 0;
            width: 0;
            height: 0;
        }

        .radio-button__label {
            display: inline-flex;
            align-items: center;
            gap: var(--gap);
            position: relative;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .radio-button__custom {
            width: var(--radio-size);
            height: var(--radio-size);
            border-radius: 50%;
            border: 2px solid var(--bg-2);
            transition: all 0.3s ease;
        }

        .radio-button__input:checked + .radio-button__label .radio-button__custom {
            background-color: var(--primary-color);
            border-color: transparent;
            transform: scale(0.9);
        }

        .radio-button__input:checked + .radio-button__label {
            color: var(--primary-color);
        }

        .radio-button__label:hover .radio-button__custom {
            transform: scale(1);
            border-color: var(--primary-color);
        }
    `;
    const [value, setValue] = createSignal(props.value || '');

    const handleClick = (value: string) => {
        setValue(value);
        const customEvent = new CustomEvent('change', {
            detail: {
                value,
            },
            bubbles: true,
        });
        element.dispatchEvent(customEvent);
    };
    return (
        <>
            <style>{styles}</style>
            <div class="root">
                <For each={props.options}>
                    {(option) => (
                        <div class="radio-button" onClick={() => handleClick(option.value)}>
                            <input
                                name="radio-group"
                                class="radio-button__input"
                                type="radio"
                                value={option.value}
                                checked={value() === option.value}
                            />
                            <div class="radio-button__label">
                                <span class="radio-button__custom"></span>
                                {option.label}
                            </div>
                        </div>
                    )}
                </For>
            </div>
        </>
    );
};
export default () => {
    customElement(
        `${TAG_PREFIX}-radio-group`,
        {
            options: [
                {
                    label: 'Option1',
                    value: '1',
                },
                {
                    label: 'Option2',
                    value: '2',
                },
                {
                    label: 'Option3',
                    value: '3',
                },
            ],
            value: '',
            direction: 'row',
        },
        RadioGroup,
    );
};
