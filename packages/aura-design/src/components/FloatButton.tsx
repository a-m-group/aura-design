import { customElement } from 'solid-element';
import { Portal } from 'solid-js/web';

import { TAG_PREFIX } from './config';

interface Props {
    left: string;
    top: string;
    right: string;
    bottom: string;
    icon: string;
    text: string;
}

export const FloatButton = (props: Props) => {
    return (
        <>
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
                        {/* The slot cannot be used in the Portal. */}
                        <ar-button shape="circle" style="height: auto">
                            {props.text}
                        </ar-button>
                    </ar-float-wrapper>
                </div>
            </Portal>
        </>
    );
};

export default () => {
    customElement(
        `${TAG_PREFIX}-float-button`,
        { left: '', top: '', right: '', bottom: '', icon: '', text: 'Button' },
        FloatButton,
    );
};
