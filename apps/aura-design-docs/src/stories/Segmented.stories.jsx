export default {
    title: 'Components/Segmented',
    tags: ['autodocs'],
    component: <ar-segmented />,
    argTypes: {
        size: { control: 'select', options: ['large', 'default', 'small'] },
        value: { control: 'text' },
        block: { control: 'boolean' },
        rounded: { control: 'boolean' },
        'active-color': { control: 'color' },
        'text-color': { control: 'color' },
    },
};
export const Default = {
    args: {
        size: 'default',
        value: 'Option1',
        options: ['Option1', 'Option2', 'Option3'],
        block: false,
        rounded: false,
    },
};
