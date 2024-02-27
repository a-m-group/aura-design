export default {
    title: 'Components/Layout/FlexBox',
    tags: ['autodocs'],
    component: (
        <ar-flex-box>
            <ar-place-holder>holder1</ar-place-holder>
            <ar-place-holder>holder2</ar-place-holder>
            <ar-place-holder>holder3</ar-place-holder>
            <ar-place-holder>holder4</ar-place-holder>
            <ar-place-holder>holder5</ar-place-holder>
            <ar-place-holder>holder6</ar-place-holder>
        </ar-flex-box>
    ),
    argTypes: {
        gap: { control: 'text' },
        direction: {
            control: 'select',
            options: ['row', 'row-reverse', 'column', 'column-reverse'],
        },
        wrap: {
            control: 'select',
            options: ['nowrap', 'wrap', 'wrap-reverse'],
        },
        items: {
            control: 'select',
            options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
        },
        justify: {
            control: 'select',
            options: [
                'flex-start',
                'flex-end',
                'center',
                'space-between',
                'space-around',
                'space-evenly',
            ],
        },
    },
};

export const Default = {
    args: {
        gap: '1rem',
        direction: 'row',
        wrap: 'nowrap',
        items: 'stretch',
        justify: 'flex-start',
    },
};

const ItemTemplate = () => {
    return (
        <ar-flex-box>
            <ar-flex-item order="2" flex="1">
                <ar-place-holder>holder2</ar-place-holder>
            </ar-flex-item>
            <ar-flex-item order="1" flex="0 0 100px">
                <ar-place-holder>holder1</ar-place-holder>
            </ar-flex-item>
            <ar-flex-item order="3" flex="0 0 auto">
                <ar-place-holder>holder3</ar-place-holder>
            </ar-flex-item>
        </ar-flex-box>
    );
};
export const Item = ItemTemplate.bind({});
