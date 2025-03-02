export default {
    title: 'AI/Typewriter',
    tags: ['autodocs'],
    component: <ar-typewriter />,
    argTypes: {
        text: { control: 'text' },
        speed: { control: 'number' },
        cursor: { control: 'text' },
    },
};
export const Default = {
    args: {
        text: 'Hello! How can I assist you today?',
        speed: 100,
        cursor: '|',
    },
};
