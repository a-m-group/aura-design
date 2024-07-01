export default {
    title: 'Components/Float/FloatButton',
    tags: ['autodocs'],
    component: <ar-float-button></ar-float-button>,
    argTypes: {
        left: { control: 'text' },
        top: { control: 'text' },
        right: { control: 'text' },
        bottom: { control: 'text' },
    },
};

export const Default = {
    args: {
        left: '',
        top: '',
        right: '10px',
        bottom: '10px',
    },
};
