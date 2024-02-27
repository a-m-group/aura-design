export default {
    title: 'Components/DanceNumber',
    tags: ['autodocs'],
    component: <ar-dance-number></ar-dance-number>,
    argTypes: {
        number: { control: 'select', options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
        size: { control: 'number' },
    },
};

export const Default = {
    args: {
        number: 8,
        size: 14,
    },
};
