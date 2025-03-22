import { createEffect, onCleanup, onMount, createMemo } from 'solid-js';
import { customElement } from 'solid-element';
import { ComponentOptions } from 'component-register';
import { TAG_PREFIX } from './config';
import styles from './Icon.css?inline';

export type Props = {
    name: string;
    size?: string;
    color?: string;
};

export const Icon = (props: Props, { element }: ComponentOptions) => {
    let symbolAppended = false;

    const appendSymbol = () => {
        if (symbolAppended) return;

        const symbol = document.body.querySelector(`symbol#icon-${props.name}`)?.cloneNode(true);
        if (symbol) {
            element.shadowRoot?.appendChild(symbol);
            symbolAppended = true;
        } else {
            console.log('icon symbol not found');
        }
    };

    onMount(() => {
        appendSymbol();
    });

    createEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeName === 'svg') {
                        const flag = Array.from(node.childNodes).some((child) => {
                            const childNode = child as HTMLElement;
                            return childNode.id === `icon-${props.name}`;
                        });
                        if (flag) {
                            appendSymbol();
                            observer.disconnect();
                        }
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });

        onCleanup(() => observer.disconnect());
    });

    const svgClass = createMemo(() => `icon icon-${props.name}`);

    return (
        <>
            <style>{styles}</style>
            <svg
                class={svgClass()}
                width={props.size}
                height={props.size}
                fill={props.color}
                aria-hidden="true"
            >
                <use href={`#icon-${props.name}`}></use>
            </svg>
        </>
    );
};

export default () => {
    customElement(`${TAG_PREFIX}-icon`, { name: 'date', size: '1em', color: 'currentColor' }, Icon);
};
