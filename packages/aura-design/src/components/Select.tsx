import { createSignal, createEffect, createMemo, For, Show } from 'solid-js';
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
    multiple?: boolean;
    placement?: 'top' | 'bottom';
}

export const Select = (props: Props, { element }: any) => {
    const styles = css`
        :host {
            align-items: center;
            background-color: var(--ar-color-info-2);
            border-radius: var(--ar-size-3);
            box-sizing: border-box;
            display: inline-flex;
            gap: var(--ar-size-6);
            height: var(--ar-size-m);
            width: 100%;
        }

        .root {
            width: 100%;
            position: relative;
        }

        .label-chip {
            padding: 0 10px;
        }

        .root select {
            display: none;
        }

        .root > div {
            position: relative;
            z-index: 2;
        }

        .root > ul {
            margin: 0;
            padding: 0;
            list-style: none;
            z-index: 10;
            position: absolute;
            top: ${props.placement === 'bottom' ? '100%' : 0};
            bottom: ${props.placement === 'top' ? '100%' : 0};
            left: 0;
            right: 0;
            visibility: hidden;
            opacity: 0;
            transform: translate(0, 0) scale(0.8);
            transform-origin: 0 0;
            filter: drop-shadow(0 12px 20px rgba(22, 42, 90, 0.08));
            transition: all 0.4s ease, transform 0.4s cubic-bezier(0.87, -0.41, 0.19, 1.44),
                filter 0.3s ease 0.2s;
        }

        .root > ul li {
            color: var(--ar-color-text);
            background: #fff;
            padding: 6px 12px;
            cursor: pointer;
            overflow: hidden;
            position: relative;
        }

        .root > ul li:first-child {
            border-radius: var(--ar-size-3) var(--ar-size-3) 0 0;
        }

        .root > ul li:last-child {
            border-radius: 0 0 var(--ar-size-3) var(--ar-size-3);
        }

        .root > ul li:hover {
            background: var(--ar-color-primary);
            color: var(--ar-color-white);
        }

        .root.open > ul {
            transform: translate(0, ${props.placement === 'bottom' ? '12px' : '-12px'}) scale(1);
            opacity: 1;
            visibility: visible;
            filter: drop-shadow(0 16px 24px rgba(22, 42, 90, 0.16));
        }
    `;
    const [open, setOpen] = createSignal(false);
    const [value, setValue] = createSignal(props.value || '');
    const selected = createMemo(
        () => props.options?.filter((item) => item.value === value()) || [],
    );
    const handleClick = () => {
        setOpen(!open());
    };
    const handleChange = (option: Option) => {
        setValue(option.value);
        const customEvent = new CustomEvent('change', {
            detail: {
                value: option.value,
            },
            bubbles: true,
        });
        element.dispatchEvent(customEvent);
    };
    return (
        <>
            <style>{styles}</style>
            <div class={`root ${open() ? 'open' : ''}`} onClick={handleClick}>
                <div>
                    <Show when={selected().length > 0} fallback={<ar-textfield></ar-textfield>}>
                        <For each={selected()}>
                            {(item) => (
                                <div class="label-chip">
                                    <span>{item.label}</span>
                                </div>
                            )}
                        </For>
                    </Show>
                    <select multiple={props.multiple}>
                        <For each={props.options}>
                            {(option) => (
                                <option selected={value() === option.value}>{option.label}</option>
                            )}
                        </For>
                    </select>
                </div>
                <div class="arrow"></div>
                <ul>
                    <For each={props.options}>
                        {(option) => <li onClick={() => handleChange(option)}>{option.label}</li>}
                    </For>
                </ul>
            </div>
        </>
    );
};
export default () => {
    customElement(
        `${TAG_PREFIX}-select`,
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
            placement: 'bottom',
        },
        Select,
    );
};
