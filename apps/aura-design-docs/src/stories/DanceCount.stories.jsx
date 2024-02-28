export default {
    title: 'Components/Data Display/DanceCount',
    tags: ['autodocs'],
    component: <ar-dance-count></ar-dance-count>,
    argTypes: {
        count: { control: 'text' },
        size: { control: 'number' },
        type: { control: 'select', options: ['default', 'card'] },
    },
};

export const Default = {
    args: {
        count: '1024',
        size: 62,
        type: 'card',
    },
};
