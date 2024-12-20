import { createSignal, createEffect } from 'solid-js';
import { customElement } from 'solid-element';

import { TAG_PREFIX } from './config';

import { css } from '../utils';

type SegmentedProps = {
    size: string;
    options: string[];
    value: string;
    block?: boolean;
    rounded?: boolean;
    activeColor?: string;
    textColor?: string;
};

export const Segmented = (props: SegmentedProps, { element }: any) => {
    const styles = css`
        :host {
            display: ${props.block ? 'flex' : 'inline-flex'};
        }
        .root {
            display: inline-flex;
            align-items: center;
            background: var(--ar-color-info-2);
            box-sizing: border-box;
            padding: 2px;
            width: 100%;
        }
        .button {
            color: var(--ar-color-text-2);
            flex: 1;
            display: grid;
            place-items: center;
            cursor: pointer;
            box-sizing: border-box;
            transition: background 0.3s ease-in;
            white-space: nowrap;
        }
        .button:hover:not(.active) {
            color: var(--ar-color-text-1);
        }
        .default {
            height: 32px;
            font-size: 14px;
            border-radius: ${props.rounded ? '20px' : '4px'};
        }
        .default .button {
            height: 28px;
            padding: 0 24px;
            border-radius: ${props.rounded ? '20px' : '4px'};
        }
        .small {
            height: 24px;
            font-size: 12px;
            border-radius: ${props.rounded ? '20px' : '2px'};
        }
        .small .button {
            height: 20px;
            padding: 0 16px;
            border-radius: ${props.rounded ? '20px' : '2px'};
        }
        .large {
            height: 40px;
            font-size: 16px;
            border-radius: ${props.rounded ? '20px' : '4px'};
        }
        .large .button {
            height: 36px;
            padding: 0 32px;
            border-radius: ${props.rounded ? '20px' : '4px'};
        }
        .active {
            color: ${props.textColor ? props.textColor : 'var(--ar-color-text-1)'};
            background: ${props.activeColor ? props.activeColor : 'var(--ar-color-bg-1)'};
        }
    `;
    const [value, setValue] = createSignal('');
    createEffect(() => {
        setValue(props.value);
    });
    const handleClick = (option: string) => {
        setValue(option);
        element.setAttribute('value', option);
        element.dispatchEvent(new Event('input', { bubbles: true }));
        element.dispatchEvent(new Event('change', { bubbles: true }));
    };
    return (
        <>
            <style>{styles}</style>
            <div class={`root ${props.size}`}>
                {props.options?.map((option) => (
                    <div
                        class={`button ${option === value() ? 'active' : ''}`}
                        onClick={() => handleClick(option)}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </>
    );
};

export default () => {
    customElement(
        `${TAG_PREFIX}-segmented`,
        {
            size: 'default',
            value: '',
            options: ['option1', 'option2', 'option3'],
            block: false,
            rounded: false,
            activeColor: '',
            textColor: '',
        },
        Segmented,
    );
};
