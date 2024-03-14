export default {
    title: 'Components/Popover',
    tags: ['autodocs'],
    component: (
        <ar-popover>
            <ar-button slot="reference">Button</ar-button>
            <div>popover</div>
        </ar-popover>
    ),
    argTypes: {
        trigger: { control: 'select', options: ['hover', 'click'] },
        placement: { control: 'select', options: ['top', 'bottom'] },
    },
};

export const Default = {
    args: {
        trigger: 'hover',
        placement: 'bottom',
    },
};
