import { createSignal, onMount } from 'solid-js';
import { customElement } from 'solid-element';

import { TAG_PREFIX } from './config';

import { css } from '../utils';

interface Props {
    trigger?: 'hover' | 'click';
    placement?: 'top' | 'bottom';
}

export const Popover = (props: Props, { element }: any) => {
    const styles = css`
        :host {
            display: flex;
        }
        .root {
            display: inline-block;
            position: relative;
        }
        .popover {
            position: absolute;
            top: ${props.placement === 'bottom' ? '100%' : '-100%'};
            left: 50%;
            transform: translateX(-50%);
            padding: 6px 10px;
            border-radius: 5px;
            opacity: 0;
            visibility: hidden;
            font-size: 14px;
            transition: all 0.3s ease;
            background-color: var(--ar-color-bg-2);
        }
        .popover.show {
            opacity: 1;
            visibility: visible;
            top: ${props.placement === 'bottom' ? 'calc(100% + 10px)' : 'calc(-100% - 10px)'};
        }
    `;
    const [show, setShow] = createSignal(false);
    onMount(() => {
        if (props.trigger === 'hover') {
            element.shadowRoot.addEventListener('mouseover', () => {
                setShow(true);
            });
            element.shadowRoot.addEventListener('mouseout', () => {
                setShow(false);
            });
        } else if (props.trigger === 'click') {
            element.shadowRoot.addEventListener('click', (e: Event) => {
                const el = e.target as HTMLDivElement;
                if (el.matches('[slot=reference]')) {
                    setShow(!show());
                }
            });
        }
    });
    return (
        <>
            <style>{styles}</style>
            <div class="root">
                <slot name="reference"></slot>
                <div class={`popover ${show() ? 'show' : ''}`}>
                    <slot></slot>
                </div>
            </div>
        </>
    );
};
export default () => {
    customElement(`${TAG_PREFIX}-popover`, { trigger: 'click', placement: 'bottom' }, Popover);
};
