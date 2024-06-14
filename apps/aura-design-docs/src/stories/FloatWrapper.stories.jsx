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
        left: { control: 'number' },
        top: { control: 'number' },
    },
};

export const Default = {
    args: {
        left: 0,
        top: 0,
    },
};
