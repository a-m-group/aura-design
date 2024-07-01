export default {
    title: 'Components/FloatWrapper',
    tags: ['autodocs'],
    component: (
        <ar-float-wrapper>
            <ar-button shape="circle" style="height: auto">
                Float
            </ar-button>
        </ar-float-wrapper>
    ),
    argTypes: {
        left: { control: 'text' },
        top: { control: 'text' },
    },
};

export const Default = {
    args: {
        left: '0px',
        top: '0px',
    },
};
