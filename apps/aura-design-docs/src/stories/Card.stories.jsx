export default {
    title: 'Components/Data Display/Card',
    tags: ['autodocs'],
    component: <ar-card></ar-card>,
    parameters: {
        backgrounds: { default: 'light' },
    },
    argTypes: {
        icon: { control: 'boolean' },
        logo: { control: 'text' },
        title: { control: 'text' },
        description: { control: 'text' },
        avatar: { control: 'text' },
        creator: { control: 'text' },
        shadow: { control: 'select', options: ['never', 'hover', 'always'] },
    },
};

export const Default = {
    args: {
        icon: true,
        logo: 'ai-chat',
        title: 'Title',
        description: 'Some descriptions',
        shadow: 'always',
    },
};

const CustomTemplate = () => {
    return (
        <ar-card header="true" footer="true" shadow="always">
            <div slot="header">Header</div>
            <div>
                <p>content</p>
                <p>content</p>
                <p>content</p>
            </div>
            <div slot="footer">Footer</div>
        </ar-card>
    );
};
export const Custom = CustomTemplate.bind({});
