import { createSignal, For, JSX, createEffect, Show } from 'solid-js';
import { customElement } from 'solid-element';

import { TAG_PREFIX } from './config';

import Radio from './Radio';
import Button from './Button';

import styles from './RadioGroup.css?inline';

Radio();
Button();

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

export function RadioButton(props: RadioGroupProps, { element }: any): JSX.Element {
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
            <ar-layout-row class="radio-group" gap="0">
                <For each={props.options}>
                    {(option) => {
                        // console.log(option.label);
                        if (props.type === 'button') {
                            return (
                                <ar-button
                                    status={value() === option.value ? 'primary' : 'info'}
                                    onClick={() => handleClick(option.value)}
                                >
                                    {option.label}
                                    <Show when={option.props?.icon}>
                                        <ar-icon size="1.2em" name={option.props?.icon}></ar-icon>
                                    </Show>
                                </ar-button>
                            );
                        }
                        return <ar-radio value={option.value}>{option.label}</ar-radio>;
                    }}
                </For>
            </ar-layout-row>
        </>
    );
}
export default () => {
    customElement(
        `${TAG_PREFIX}-radio-button`,
        {
            defaultValue: '',
            options: [],
            value: '',
            type: 'radio',
            onChange: (value: string) => {
                console.log(value);
            },
        },
        RadioButton,
    );
};
