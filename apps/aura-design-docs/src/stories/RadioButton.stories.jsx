export default {
    title: 'Components/Data Entry/RadioButton',
    tags: ['autodocs'],
    component: <ar-radio-button></ar-radio-button>,
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
