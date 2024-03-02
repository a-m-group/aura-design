import { withActions } from '@storybook/addon-actions/decorator';
export default {
    title: 'Components/Data Entry/RadioButton',
    tags: ['autodocs'],
    component: <ar-radio-button></ar-radio-button>,
    parameters: {
        actions: {
            handles: ['change'],
        },
    },
    decorators: [withActions],
    argTypes: {
        value: { control: 'text' },
        direction: { control: 'select', options: ['row', 'column'] },
    },
};

export const Default = {
    args: {
        value: '',
        direction: 'row',
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
