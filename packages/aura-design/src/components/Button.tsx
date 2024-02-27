import { Show } from 'solid-js';
import { customElement } from 'solid-element';

import { TAG_PREFIX } from './config';

import styles from './Button.css?inline';

interface ButtonProps {
    type?: 'default' | 'outline' | 'text';
    status?: 'primary' | 'info' | 'warning' | 'danger' | 'success';
    shape?: 'default' | 'circle' | 'round';
    loading?: boolean | null;
}

export const Button = (props: ButtonProps) => {
    return (
        <>
            <style>{styles}</style>
            <Show
                when={props.shape === 'circle'}
                fallback={
                    <>
                        <button class={`${props.status} ${props.type} ${props.shape}`}>
                            <Show when={props.loading} fallback={<slot name="prefix"></slot>}>
                                <ar-icon name="loading" spin></ar-icon>
                            </Show>
                            <slot></slot>
                            <slot name="suffix"></slot>
                        </button>
                    </>
                }
            >
                <button class={`${props.status} ${props.type} ${props.shape}`}>
                    <Show when={props.loading} fallback={<slot></slot>}>
                        <ar-icon name="loading" spin></ar-icon>
                    </Show>
                </button>
            </Show>
        </>
    );
};

export default () => {
    customElement(
        `${TAG_PREFIX}-button`,
        { type: 'default', status: 'primary', shape: 'default', loading: false },
        Button,
    );
};
