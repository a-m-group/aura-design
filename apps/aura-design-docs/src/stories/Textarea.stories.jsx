import { withActions } from '@storybook/addon-actions/decorator';
export default {
    title: 'Components/Data Entry/Textarea',
    tags: ['autodocs'],
    component: <ar-textarea />,
    parameters: {
        actions: {
            handles: ['change'],
        },
    },
    decorators: [withActions],
    // component: (props) => <ar-textarea {...props} />,
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
