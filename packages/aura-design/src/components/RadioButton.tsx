import { createSignal, For } from 'solid-js';
import { customElement } from 'solid-element';

import { TAG_PREFIX } from './config';

interface Props {
    direction?: 'horizontal' | 'vertical';
    animationDuration?: number;
}

const RadioButton = (props: Props) => {
    const [expanded, setExpanded] = createSignal(false);
    const [height, setHeight] = createSignal<number | null>(null);
    const [width, setWidth] = createSignal<number | null>(null);

    const handleClick = () => {
        setExpanded(!expanded());
    };

    const handleRef = (el: HTMLDivElement | null) => {
        if (el) {
            console.log(el.offsetHeight);
            setHeight(el.offsetHeight);
            setWidth(el.offsetWidth);
        }
    };
    const style = {
        overflow: 'hidden',
        transition: `all ${props.animationDuration || 300}ms ease-in-out`,
        height: expanded() ? `${height()}px` : 'auto',
        width: expanded() ? `${width()}px` : 'auto',
        display: 'flex',
    };

    return (
        <div
            style={{
                ...style,
                'flex-direction': props.direction === 'vertical' ? 'column' : 'row',
            }}
            ref={handleRef}
        >
            <ar-button onClick={handleClick}>More</ar-button>
            {expanded() && (
                <For each={[1, 2, 3]}>{(item) => <ar-button>Item {item}</ar-button>}</For>
            )}
        </div>
    );
};

export default () => {
    customElement(
        `${TAG_PREFIX}-radio-button`,
        {
            direction: 'vertical',
            animationDuration: 300,
        },
        RadioButton,
    );
};
