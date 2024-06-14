import { createSignal, onMount, onCleanup } from 'solid-js';
import { customElement } from 'solid-element';

import { TAG_PREFIX } from './config';
import { css } from '../utils';

interface Props {
    left: number;
    top: number;
}

export const FloatWrapper = (props: Props, { element }: any) => {
    const [left, setLeft] = createSignal(props.left);
    const [top, setTop] = createSignal(props.top);

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
        window.addEventListener('mouseup', handleDragEnd);
        window.addEventListener('touchstart', handleDragStart);
        window.addEventListener('touchmove', handleDragMove);
        window.addEventListener('touchend', handleDragEnd);
    };

    const handleDragMove = (e: MouseEvent | TouchEvent) => {
        if (isDragging) {
            if (e instanceof MouseEvent) {
                setLeft(e.clientX - posX);
                setTop(e.clientY - posY);
            } else if (e instanceof TouchEvent) {
                const touch = e.touches[0];
                setLeft(touch.clientX - posX);
                setTop(touch.clientY - posY);
            }
        }
    };

    const handleDragEnd = () => {
        isDragging = false;
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
                class="root"
                style={{
                    left: left() + 'px',
                    top: top() + 'px',
                }}
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
    customElement(`${TAG_PREFIX}-float-wrapper`, { left: 0, top: 0 }, FloatWrapper);
};
