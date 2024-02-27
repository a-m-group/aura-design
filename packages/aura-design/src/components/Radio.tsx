import { JSX } from 'solid-js';

import { customElement } from 'solid-element';

import { TAG_PREFIX } from './config';

interface RadioProps {
    value: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (value: string) => void;
}

export function Radio(props: RadioProps): JSX.Element {
    function handleChange() {
        if (props.onChange && !props.disabled) {
            props.onChange(props.value);
        }
    }

    return (
        <label>
            <input
                type="radio"
                value={props.value}
                checked={props.checked}
                disabled={props.disabled}
                onChange={handleChange}
            />
            <slot></slot>
        </label>
    );
}
export default () => {
    customElement(
        `${TAG_PREFIX}-radio`,
        {
            value: '',
            checked: false,
            disabled: false,
            onChange: (value: string) => {
                console.log(value);
            },
        },
        Radio,
    );
};
