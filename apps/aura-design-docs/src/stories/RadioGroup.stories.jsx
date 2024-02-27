export default {
    title: 'Components/Data Entry/RadioGroup',
    tags: ['autodocs'],
    component: <ar-radio-group></ar-radio-group>,
    argTypes: {
        ['default-value']: { control: 'text' },
    },
};

export const Default = {
    args: {
        ['default-value']: '1',
        type: 'button',
        value: '',
        options: [
            {
                label: '',
                value: '1',
                props: {
                    icon: 'refresh',
                },
            },
            {
                label: '',
                value: '2',
                props: {
                    icon: 'image',
                },
            },
        ],
    },
};
