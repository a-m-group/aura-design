export const Default = {
    args: {
        text: "```const name = 'rich'```",
        theme: 'light',
    },
};

export default {
    title: 'Pro Components/RichText',
    tags: ['autodocs'],
    component: <ar-rich-text />,
    argTypes: {
        theme: { control: 'select', options: ['light', 'dark'] },
        text: { control: 'text' },
    },
};
