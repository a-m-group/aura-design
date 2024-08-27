import { createSignal, Show } from 'solid-js';
import { customElement } from 'solid-element';
import { Portal } from 'solid-js/web';

import { TAG_PREFIX } from './config';

import styles from './FloatChatFrame.module.css';

interface Props {
    logo: string;
    size: string;
    left: string;
    top: string;
    right: string;
    bottom: string;
    src: string;
}

export const FloatChatFrame = (props: Props) => {
    const [open, setOpen] = createSignal(false);
    const handleOpen = (e: MouseEvent | TouchEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setOpen(!open());
    };
    return (
        <>
            <style>{styles}</style>
            <Portal mount={document.body}>
                <div
                    style={{
                        position: 'fixed',
                        left: 0,
                        top: 0,
                        'z-index': 9,
                    }}
                >
                    <ar-float-wrapper
                        left={props.left}
                        top={props.top}
                        right={props.right}
                        bottom={props.bottom}
                    >
                        <ar-flex-box gap="1rem" direction="column" wrap="nowrap" items="flex-end">
                            <div class={[styles['chat-card'], open() ? styles.open : ''].join(' ')}>
                                <iframe
                                    src={props.src}
                                    width="100%"
                                    height="100%"
                                    style="border: none"
                                ></iframe>
                            </div>
                            {/* The slot cannot be used in the Portal. */}
                            <Show
                                when={props.logo}
                                fallback={
                                    <ar-button
                                        class={styles['chat-logo']}
                                        shape="circle"
                                        style="height: auto"
                                        onClick={handleOpen}
                                    >
                                        <ar-icon size="2rem" name="ai-chat"></ar-icon>
                                    </ar-button>
                                }
                            >
                                <img
                                    class={styles['chat-logo']}
                                    style={{ width: props.size, height: props.size }}
                                    src={props.logo}
                                    onClick={handleOpen}
                                />
                            </Show>
                        </ar-flex-box>
                    </ar-float-wrapper>
                </div>
            </Portal>
        </>
    );
};

export default () => {
    customElement(
        `${TAG_PREFIX}-float-chat-frame`,
        {
            logo: '',
            size: '',
            left: '',
            top: '',
            right: '',
            bottom: '',
            src: '',
        },
        FloatChatFrame,
    );
};
