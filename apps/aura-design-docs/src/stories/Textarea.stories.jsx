export default {
    title: 'Components/Data Entry/Textarea',
    tags: ['autodocs'],
    component: <ar-textarea />,
    argTypes: {
        value: { control: 'text' },
        placeholder: { control: 'text' },
        height: { control: 'text' },
    },
};

export const Default = {
    args: {
        value: '',
        placeholder: '',
        height: '32px',
    },
};
