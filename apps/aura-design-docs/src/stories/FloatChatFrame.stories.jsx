export default {
    title: 'Components/Float/FloatChatFrame',
    tags: ['autodocs'],
    component: <ar-float-chat-frame />,
    argTypes: {
        left: { control: 'text' },
        top: { control: 'text' },
        right: { control: 'text' },
        bottom: { control: 'text' },
        src: { control: 'text' },
    },
};

export const Default = {
    args: {
        left: '',
        top: '',
        right: '40px',
        bottom: '40px',
        src: '',
    },
};
