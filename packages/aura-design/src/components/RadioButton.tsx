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

export const RadioButton = (props: Props, { element }: any) => {
    const styles = css`
        :host {
            display: inline-block;
            font-size: var(--ar-size-font);
        }

        :focus {
            outline: 0;
        }

        .root {
            display: flex;
            flex-direction: ${props.direction};
            flex-wrap: nowrap;
            justify-content: center;
        }

        .root input[type='radio'] {
            clip: rect(0 0 0 0);
            clip-path: inset(100%);
            height: 1px;
            overflow: hidden;
            position: absolute;
            white-space: nowrap;
            width: 1px;
        }

        .root input[type='radio']:checked + span {
            box-shadow: 0 0 0 1px var(--ar-color-primary);
            background: var(--ar-color-primary-gradient);
            z-index: 1;
            color: var(--ar-color-white);
        }

        .label span {
            display: flex;
            height: var(--ar-size-m);
            align-items: center;
            cursor: pointer;
            background-color: var(--ar-color-bg-1);
            padding: 0 0.75em;
            position: relative;
            box-shadow: 0 0 0 1px var(--ar-color-border);
            color: var(--ar-color-text);
            text-align: center;
            transition: background-color 0.5s ease;
        }

        .label:first-child span {
            border-radius: var(--ar-size-3) 0 0 var(--ar-size-3);
        }

        .label:last-child span {
            border-radius: 0 var(--ar-size-3) var(--ar-size-3) 0;
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
                        <div class="label" onClick={() => handleClick(option.value)}>
                            <input
                                type="radio"
                                name="radio"
                                value={option.value}
                                checked={value() === option.value}
                            />
                            <span>{option.label}</span>
                        </div>
                    )}
                </For>
            </div>
        </>
    );
};
export default () => {
    customElement(
        `${TAG_PREFIX}-radio-button`,
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
        RadioButton,
    );
};
