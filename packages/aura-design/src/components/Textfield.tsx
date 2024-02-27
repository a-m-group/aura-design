import { customElement } from 'solid-element';

import { TAG_PREFIX } from './config';

import styles from './Textfield.css?inline';

interface TextfieldProps {
    value: string;
    placeholder?: string;
    type: string;
}

export const Textfield = (props: TextfieldProps, { element }: any) => {
    const handleChange = (event: Event) => {
        const target = event.target as HTMLInputElement;
        const customEvent = new CustomEvent('change', {
            detail: {
                value: target.value,
            },
        });
        element.dispatchEvent(customEvent);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            if (event.target) {
                const target = event.target as HTMLTextAreaElement;
                const customEvent = new CustomEvent('enter', {
                    detail: {
                        value: target.value,
                    },
                });
                element.dispatchEvent(customEvent);
            }
        }
    };
    return (
        <>
            <style>{styles}</style>
            <slot name="prefix"></slot>
            <input
                class="textarea"
                value={props.value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder={props.placeholder}
                type={props.type}
            />
            <slot name="suffix"></slot>
        </>
    );
};

export default () => {
    customElement(
        `${TAG_PREFIX}-textfield`,
        {
            value: '',
            placeholder: '',
            type: 'text',
        },
        Textfield,
    );
};
