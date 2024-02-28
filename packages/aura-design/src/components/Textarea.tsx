import { createSignal, onMount } from 'solid-js';
import { customElement } from 'solid-element';

import { TAG_PREFIX } from './config';

import styles from './Textarea.css?inline';

interface TextareaProps {
    value: string;
    height: string;
    placeholder?: string;
}

export const Textarea = (props: TextareaProps, { element }: any) => {
    const [textareaRef, setTextareaRef] = createSignal<HTMLTextAreaElement>();
    const [height, setHeight] = createSignal(props.height);

    onMount(() => {
        setTimeout(() => {
            const scrollHeight = textareaRef()?.scrollHeight;
            if (scrollHeight) {
                setHeight(`${scrollHeight}px`);
            }
        }, 0);
    });

    const handleInput = (event: Event) => {
        const target = event.target as HTMLTextAreaElement;
        setHeight(props.height);
        setHeight(`${target.scrollHeight}px`);
    };

    const handleChange = (event: Event) => {
        const target = event.target as HTMLTextAreaElement;
        const customEvent = new CustomEvent('change', {
            detail: {
                value: target.value,
            },
            bubbles: true,
        });
        element.dispatchEvent(customEvent);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
        if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
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
            <textarea
                class="textarea"
                ref={setTextareaRef}
                value={props.value}
                onInput={handleInput}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                style={{ height: height() }}
                placeholder={props.placeholder}
            />
            <slot name="suffix"></slot>
        </>
    );
};

export default () => {
    customElement(
        `${TAG_PREFIX}-textarea`,
        {
            value: '',
            placeholder: '',
            height: '32px',
        },
        Textarea,
    );
};
