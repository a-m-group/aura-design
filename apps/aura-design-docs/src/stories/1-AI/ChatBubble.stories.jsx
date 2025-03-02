export default {
    title: 'AI/ChatBubble',
    tags: ['autodocs'],
    component: <ar-chat-bubble></ar-chat-bubble>,
    argTypes: {
        role: { control: 'text' },
        think: { control: 'text' },
        content: { control: 'text' },
        loading: { control: 'boolean' },
        'loading-text': { control: 'text' },
        'image-url': { control: 'text' },
        'show-avatar': { control: 'boolean' },
        avatar: { control: 'text' },
        'avatar-type': { control: 'text' },
        direction: { control: 'select', options: ['row', 'column'] },
    },
};

export const Assistant = {
    args: {
        role: 'assistant',
        content: 'Hello! How can I assist you today?',
        loading: false,
        'show-avatar': true,
        'avatar-type': 'icon',
        direction: 'row',
    },
};

export const Think = {
    args: {
        role: 'assistant',
        think: 'Okay, the user said "hello". I should respond in a friendly and welcoming manner.',
        content: 'Hello! How can I assist you today?',
        loading: false,
        'show-avatar': true,
        'avatar-type': 'icon',
        direction: 'row',
    },
};

export const User = {
    args: {
        role: 'user',
        content: 'Hello! Nice to meet you',
        loading: false,
        'show-avatar': true,
        'avatar-type': 'icon',
    },
};

export const Loading = {
    args: {
        role: 'assistant',
        content: '',
        loading: true,
        'loading-text': 'Please wait a moment',
        'show-avatar': true,
        'avatar-type': 'icon',
    },
};

const RowTemplate = () => {
    return (
        <div>
            <ar-chat-bubble role="user" content="hello"></ar-chat-bubble>
            <ar-chat-bubble role="assistant" content="Hello! Nice to meet you"></ar-chat-bubble>
        </div>
    );
};
export const Row = RowTemplate.bind({});

const ColumnTemplate = () => {
    return (
        <div>
            <ar-chat-bubble role="user" content="hello" direction="column"></ar-chat-bubble>
            <ar-chat-bubble
                role="assistant"
                content="Hello! Nice to meet you"
                direction="column"
            ></ar-chat-bubble>
        </div>
    );
};
export const Column = ColumnTemplate.bind({});
