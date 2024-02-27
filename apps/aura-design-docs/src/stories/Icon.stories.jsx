export default {
    title: 'Components/Icon',
    tags: ['autodocs'],
    component: <ar-icon />,
    argTypes: {
        color: { control: 'color' },
    },
};

export const Default = {
    args: {
        name: 'download',
        size: '1em',
        color: 'currentColor',
    },
};

const LoadingTemplate = () => {
    return <ar-icon name="loading" spin />;
};
export const Loading = LoadingTemplate.bind({});

const IconTemplate = () => {
    return (
        <ar-flex-box>
            <ar-icon name="loading" />
            <ar-icon name="download" />
            <ar-icon name="send" />
            <ar-icon name="refresh" />
            <ar-icon name="delete" />
            <ar-icon name="image" />
            <ar-icon name="setting" />
            <ar-icon name="code" />
            <ar-icon name="fold" />
            <ar-icon name="unfold" />
        </ar-flex-box>
    );
};

export const Icons = IconTemplate.bind({});
