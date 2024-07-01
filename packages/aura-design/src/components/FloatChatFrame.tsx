import { createSignal } from 'solid-js';
import { customElement } from 'solid-element';
import { Portal } from 'solid-js/web';

import { TAG_PREFIX } from './config';

import styles from './FloatChatFrame.module.css';

interface Props {
    left: string;
    top: string;
    right: string;
    bottom: string;
    src: string;
}

export const FloatChatFrame = (props: Props) => {
    const [open, setOpen] = createSignal(false);
    const handleOpen = () => {
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
                            <ar-button
                                class={styles['chat-logo']}
                                shape="circle"
                                style="height: auto"
                                onClick={handleOpen}
                            >
                                <ar-icon size="2rem" name="ai-chat"></ar-icon>
                            </ar-button>
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
            left: '',
            top: '',
            right: '',
            bottom: '',
            src: '',
        },
        FloatChatFrame,
    );
};
