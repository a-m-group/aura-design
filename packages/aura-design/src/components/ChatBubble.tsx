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
};

export const ChatBubble = (props: Props) => {
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
            background-image: var(--accent-gradient);
            color: #fff;
            border-top-right-radius: 0;
            align-self: ${props.direction === 'row' ? 'center' : 'flex-end'};
        }

        .chat-bubble.left .chat-avatar {
            align-self: ${props.direction === 'row' ? 'center' : 'flex-start'};
        }

        .chat-bubble.left .chat-content {
            border-top-left-radius: 0;
            background-color: var(--bg-2);
            align-self: ${props.direction === 'row' ? 'center' : 'flex-start'};
        }

        .chat-content {
            min-width: 30px;
        }
    `;
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
                        fallback={<ar-rich-text text={props.content}></ar-rich-text>}
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
        },
        ChatBubble,
    );
};
