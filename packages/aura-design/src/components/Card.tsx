import { Show } from 'solid-js';
import { customElement } from 'solid-element';

import { TAG_PREFIX } from './config';

import { css } from '../utils';

type Props = {
    header?: boolean;
    footer?: boolean;
    icon?: boolean;
    logo?: string;
    title?: string;
    description?: string;
    avatar?: string;
    creator?: string;
    shadow?: 'never' | 'hover' | 'always';
};
export const Card = (props: Props) => {
    const styles = css`
        :host {
            display: block;
        }
        .bg-1 {
            background-color: var(--ar-color-bg-1);
            box-shadow: ${props.shadow === 'always' ? 'var(--ar-shadow)' : 'none'};
            &:hover {
                box-shadow: ${props.shadow === 'never' ? 'none' : 'var(--ar-shadow)'};
            }
        }
    `;
    const defaultContent = () => (
        <>
            <Show
                when={props.icon}
                fallback={<img class="w-20 rd-2" src={props.logo} alt="logo" />}
            >
                <ar-icon name={props.logo} size="5rem"></ar-icon>
            </Show>
            <div class="flex flex-col justify-center gap-2 h-20">
                <div class="font-bold">{props.title}</div>
                <div class="font-size-3">{props.description}</div>
            </div>
        </>
    );
    const defaultFooter = () => (
        <>
            <img class="w-6" src={props.avatar || '/apple-touch-icon.png'} alt="avatar" />
            <div>{props.creator || 'A-M'}</div>
        </>
    );
    return (
        <>
            <style>
                {styles}
                @unocss-placeholder;
            </style>
            <div class="bg-1 rd-3 cursor-pointer">
                <Show when={props.header}>
                    <slot
                        class="flex items-center p-3 gap-3"
                        style="border-bottom: 1px solid var( --ar-color-info-2)"
                        name="header"
                    ></slot>
                </Show>
                <slot class="flex items-center p-3 gap-3">{defaultContent()}</slot>
                <Show when={props.footer}>
                    <slot
                        name="footer"
                        class="flex items-center p-3 gap-3"
                        style="border-top: 1px solid var( --ar-color-info-2)"
                    >
                        {defaultFooter()}
                    </slot>
                </Show>
            </div>
        </>
    );
};

export default () => {
    customElement(
        `${TAG_PREFIX}-card`,
        {
            header: false,
            footer: true,
            icon: false,
            logo: 'ai-chat',
            title: '',
            description: '',
            avatar: '',
            creator: '',
            shadow: 'never',
        },
        Card,
    );
};
