import { createSignal, onMount, onCleanup } from 'solid-js';
import { customElement } from 'solid-element';

import { TAG_PREFIX } from './config';
import { css } from '../utils';

interface Props {
    left: string | null;
    top: string | null;
    right: string | null;
    bottom: string | null;
}

export const FloatWrapper = (props: Props, { element }: any) => {
    const [left, setLeft] = createSignal(0);
    const [top, setTop] = createSignal(0);
    const [moved, setMoved] = createSignal(false);
    const [rootRef, setRootRef] = createSignal<HTMLDivElement>();

    const styles = css`
        .root {
            position: fixed;
            user-select: none;
            height: auto;
            border-radius: 50%;
            filter: drop-shadow(rgba(0, 0, 0, 0.06) 0px 1px 6px)
                drop-shadow(rgba(0, 0, 0, 0.16) 0px 2px 32px);
        }
    `;

    let posX = 0;
    let posY = 0;
    let isDragging = false;

    onMount(() => {
        const rect = rootRef()?.getBoundingClientRect();
        console.log(rect);
        setLeft(rect?.x || 0);
        setTop(rect?.y || 0);
        element.shadowRoot.addEventListener('mousedown', handleDragStart);
        element.shadowRoot.addEventListener('mousemove', handleDragMove);
    });

    const handleDragStart = (e: MouseEvent | TouchEvent) => {
        if (e instanceof MouseEvent) {
            isDragging = true;
            posX = e.clientX - left();
            posY = e.clientY - top();
            console.log(posX);
        } else if (e instanceof TouchEvent) {
            const touch = e.touches[0];
            isDragging = true;
            posX = touch.clientX - left();
            posY = touch.clientY - top();
        }
        const customEvent = new CustomEvent('dragstart', {
            detail: {
                value: true,
            },
            bubbles: true,
        });
        element.dispatchEvent(customEvent);
        window.addEventListener('mouseup', handleDragEnd);
        window.addEventListener('touchstart', handleDragStart);
        window.addEventListener('touchmove', handleDragMove);
        window.addEventListener('touchend', handleDragEnd);
    };

    const handleDragMove = (e: MouseEvent | TouchEvent) => {
        if (isDragging) {
            // const rect = rootRef()?.getBoundingClientRect();
            // const startX = rect?.x || 0;
            // const startY = rect?.y || 0;
            if (e instanceof MouseEvent) {
                console.log(e.clientX - posX);
                setLeft(e.clientX - posX);
                setTop(e.clientY - posY);
            } else if (e instanceof TouchEvent) {
                const touch = e.touches[0];
                setLeft(touch.clientX - posX);
                setTop(touch.clientY - posY);
            }
            setMoved(true);
        }
    };

    const handleDragEnd = () => {
        isDragging = false;
        const customEvent = new CustomEvent('dragend', {
            detail: {
                value: false,
            },
            bubbles: true,
        });
        element.dispatchEvent(customEvent);
        window.removeEventListener('mouseup', handleDragEnd);
        window.removeEventListener('touchstart', handleDragStart);
        window.removeEventListener('touchmove', handleDragMove);
        window.removeEventListener('touchend', handleDragEnd);
    };

    onCleanup(() => {
        element.shadowRoot.removeEventListener('mousedown', handleDragStart);
        element.shadowRoot.removeEventListener('mousemove', handleDragMove);
        window.removeEventListener('mouseup', handleDragEnd);
        window.removeEventListener('touchstart', handleDragStart);
        window.removeEventListener('touchmove', handleDragMove);
        window.removeEventListener('touchend', handleDragEnd);
    });
    return (
        <>
            <style>{styles}</style>
            <div
                ref={setRootRef}
                class="root"
                style={
                    moved()
                        ? {
                              transform: `translate(${left()}px, ${top()}px)`,
                          }
                        : {
                              left: props.left ? `${props.left}` : 'auto',
                              top: props.top ? `${props.top}` : 'auto',
                              right: props.right ? `${props.right}` : 'auto',
                              bottom: props.bottom ? `${props.bottom}` : 'auto',
                          }
                }
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
            >
                <slot></slot>
            </div>
        </>
    );
};

export default () => {
    customElement(
        `${TAG_PREFIX}-float-wrapper`,
        { left: null, top: null, right: null, bottom: null },
        FloatWrapper,
    );
};
