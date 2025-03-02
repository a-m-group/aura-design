import { createSignal, onMount } from 'solid-js';
import { customElement } from 'solid-element';

import { TAG_PREFIX } from './config';

export interface TypewriterProps {
    text: string;
    speed?: number;
    cursor?: string;
}

export const Typewriter = (props: TypewriterProps) => {
    const [displayText, setDisplayText] = createSignal('');
    const [index, setIndex] = createSignal(0);
    const [isTyping, setIsTyping] = createSignal(true);

    const { text, speed = 100, cursor = '|' } = props;

    onMount(() => {
        const interval = setInterval(() => {
            setDisplayText(text.substr(0, index()));
            setIndex(index() + 1);
            if (index() > text.length) {
                setIsTyping(false);
                clearInterval(interval);
            }
        }, speed);
    });

    return (
        <>
            <span>{displayText()}</span>
            {isTyping() && <span>{cursor}</span>}
        </>
    );
};

export default () => {
    customElement(`${TAG_PREFIX}-typewriter`, { text: '', speed: 100, cursor: '|' }, Typewriter);
};
