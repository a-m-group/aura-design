import { createSignal, For, JSX, createEffect, Show } from 'solid-js';
import { customElement } from 'solid-element';

import { TAG_PREFIX } from './config';

import { css } from '../utils';

interface RadioOption {
    label: string;
    value: string;
    props?: {
        icon: string;
    };
}
interface RadioGroupProps {
    defaultValue?: string;
    options: RadioOption[];
    value?: string;
    onChange?: (value: string) => void;
    type: 'radio' | 'button';
}

export function RadioGroup(props: RadioGroupProps, { element }: any): JSX.Element {
    const styles = css`
        .radio-buttons-container {
            display: flex;
            align-items: center;
            gap: 24px;
        }

        .radio-button {
            display: inline-block;
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
            display: inline-block;
            padding-left: 30px;
            margin-bottom: 10px;
            position: relative;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .radio-button__custom {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 2px solid #555;
            transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .radio-button__input:checked + .radio-button__label .radio-button__custom {
            transform: translateY(-50%) scale(0.9);
            border: 5px solid #4c8bf5;
            color: #4c8bf5;
        }

        .radio-button__input:checked + .radio-button__label {
            color: #4c8bf5;
        }

        .radio-button__label:hover .radio-button__custom {
            transform: translateY(-50%) scale(1.2);
            border-color: #4c8bf5;
            box-shadow: 0 0 10px #4c8bf580;
        }
    `;
    const [value, setValue] = createSignal(props.defaultValue || '');

    createEffect(() => {
        const customEvent = new CustomEvent('change', {
            detail: {
                value: value(),
            },
        });
        element.dispatchEvent(customEvent);
    });
    const handleClick = (value: string) => {
        setValue(value);
    };
    return (
        <>
            <style>{styles}</style>
            <div class="radio-buttons-container">
                <div class="radio-button">
                    <input
                        name="radio-group"
                        id="radio2"
                        class="radio-button__input"
                        type="radio"
                    />
                    <label for="radio2" class="radio-button__label">
                        <span class="radio-button__custom"></span>
                        Next
                    </label>
                </div>
                <div class="radio-button">
                    <input
                        name="radio-group"
                        id="radio1"
                        class="radio-button__input"
                        type="radio"
                    />
                    <label for="radio1" class="radio-button__label">
                        <span class="radio-button__custom"></span>
                        Svelte
                    </label>
                </div>
                <div class="radio-button">
                    <input
                        name="radio-group"
                        id="radio3"
                        class="radio-button__input"
                        type="radio"
                    />
                    <label for="radio3" class="radio-button__label">
                        <span class="radio-button__custom"></span>
                        Remix
                    </label>
                </div>
            </div>
        </>
    );
}
export default () => {
    customElement(
        `${TAG_PREFIX}-radio-group`,
        {
            defaultValue: '',
            options: [],
            value: '',
            type: 'radio',
            onChange: (value: string) => {
                console.log(value);
            },
        },
        RadioGroup,
    );
};
