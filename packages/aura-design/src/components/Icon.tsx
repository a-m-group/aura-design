import { customElement } from 'solid-element';
import { TAG_PREFIX } from './config';
// import iconfont from '../assets/iconfont.svg';
import styles from './Icon.css?inline';

export type Props = {
    name: string;
    size?: string;
    color?: string;
};

let __href = '';
export const registerIcon = (href: string) => {
    __href = href;
};
export const Icon = (props: Props) => {
    const svgClass = `icon icon-${props.name}`;
    if (!__href) {
        console.warn('You need use registerIcon first');
    }
    return (
        <>
            <style>{styles}</style>
            <svg
                class={svgClass}
                width={props.size}
                height={props.size}
                fill={props.color}
                aria-hidden="true"
            >
                <use href={`${__href}#icon-${props.name}`}></use>
            </svg>
        </>
    );
};

export default () => {
    customElement(`${TAG_PREFIX}-icon`, { name: 'date', size: '1em', color: 'currentColor' }, Icon);
};
