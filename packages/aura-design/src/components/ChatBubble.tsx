import { Show } from 'solid-js';
import { customElement } from 'solid-element';

import { TAG_PREFIX } from './config';

import { css } from '../utils';

type Props = {
    role: string;
    content: string;
    loading: boolean;
    loadingText?: string;
    showAvatar: boolean;
    avatar?: string;
    avatarType?: string;
    direction?: 'row' | 'column';
    think?: string;
};

export const ChatBubble = (props: Props, { element }: any) => {
    const styles = css`
        :host {
            display: block;
        }

        .chat-bubble {
            display: flex;
            flex-direction: ${props.direction};
            align-items: center;
            gap: ${props.direction === 'row' ? '10px' : '5px'};
        }

        .chat-bubble.right {
            flex-direction: ${props.direction === 'row' ? 'row-reverse' : 'column'};
        }

        .chat-bubble.right .chat-avatar {
            align-self: ${props.direction === 'row' ? 'center' : 'flex-end'};
        }

        .chat-bubble.right .chat-content {
            background: var(--ar-color-primary-gradient);
            color: #fff;
            border-top-right-radius: 0;
            align-self: ${props.direction === 'row' ? 'center' : 'flex-end'};
        }

        .chat-bubble.left .chat-avatar {
            align-self: ${props.direction === 'row' ? 'center' : 'flex-start'};
        }

        .chat-bubble.left .chat-content {
            border-top-left-radius: 0;
            background-color: var(--ar-color-bg-2);
            align-self: ${props.direction === 'row' ? 'center' : 'flex-start'};
        }

        .chat-content {
            min-width: 30px;
        }
        .think {
            font-size: 12px;
            color: var(--ar-color-text-2);
        }
        .think-title {
            padding: 1em 0;
        }
        .think-content {
            border-left: 2px solid #ccc;
            padding-left: 6px;
            margin-bottom: 1em;
        }
    `;
    const handleBrowser = (e: CustomEvent) => {
        const customEvent = new CustomEvent('browser', {
            detail: {
                value: e.detail.value,
            },
            bubbles: true,
        });
        element.dispatchEvent(customEvent);
    };
    return (
        <>
            <style>
                {styles}
                @unocss-placeholder;
            </style>
            <div class={`chat-bubble ${props.role === 'user' ? 'right' : 'left'} m-3`}>
                <Show when={props.showAvatar}>
                    <div class="chat-avatar flex items-center">
                        <Show
                            when={props.avatarType === 'icon'}
                            fallback={
                                <img class="w-11 rd-2 self-start" src={props.avatar} alt="avatar" />
                            }
                        >
                            <ar-icon
                                name={
                                    props.role === 'user'
                                        ? props.avatar || 'avatar-01'
                                        : props.avatar || 'ai-chat'
                                }
                                size="2.75rem"
                            ></ar-icon>
                        </Show>
                    </div>
                </Show>
                <div class="chat-content p-x-3 rd-3">
                    <Show
                        when={props.loading}
                        fallback={
                            <>
                                <Show when={props.think}>
                                    <div class="think">
                                        <div class="think-title">深度思考...</div>
                                        <div class="think-content">{props.think}</div>
                                    </div>
                                </Show>
                                <ar-rich-text
                                    onBrowser={handleBrowser}
                                    text={props.content}
                                ></ar-rich-text>
                            </>
                        }
                    >
                        <div class="flex items-center gap-3">
                            <p>{props.loadingText}</p>
                            <ar-icon name="loading" spin></ar-icon>
                        </div>
                    </Show>
                </div>
            </div>
        </>
    );
};

export default () => {
    customElement(
        `${TAG_PREFIX}-chat-bubble`,
        {
            role: '',
            content: '',
            loading: false,
            loadingText: '',
            showAvatar: true,
            avatar: '',
            avatarType: 'icon',
            direction: 'row',
            think: '',
        },
        ChatBubble,
    );
};
