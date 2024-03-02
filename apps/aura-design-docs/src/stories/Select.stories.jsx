import { withActions } from '@storybook/addon-actions/decorator';
export default {
    title: 'Components/Data Entry/Select',
    tags: ['autodocs'],
    component: <ar-select></ar-select>,
    parameters: {
        actions: {
            handles: ['change'],
        },
    },
    decorators: [withActions],
    argTypes: {
        value: { control: 'text' },
        placement: { control: 'select', options: ['top', 'bottom'] },
    },
};

export const Default = {
    args: {
        value: '',
        placement: 'bottom',
        options: [
            {
                label: 'Option1',
                value: '1',
            },
            {
                label: 'Option2',
                value: '2',
            },
            {
                label: 'Option3',
                value: '3',
            },
        ],
    },
};

export const DefaultValue = {
    args: {
        value: '2',
        options: [
            {
                label: 'Option1',
                value: '1',
            },
            {
                label: 'Option2',
                value: '2',
            },
            {
                label: 'Option3',
                value: '3',
            },
        ],
    },
};
