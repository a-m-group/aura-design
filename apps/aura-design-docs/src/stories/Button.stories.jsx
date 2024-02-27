export default {
    title: 'Components/Button',
    tags: ['autodocs'],
    component: <ar-button>Default</ar-button>,
    argTypes: {
        status: { control: 'select', options: ['primary', 'info', 'warning', 'danger', 'success'] },
        type: { control: 'select', options: ['default', 'outline', 'text'] },
        shape: { control: 'select', options: ['default', 'circle', 'round'] },
        loading: { control: 'boolean' },
    },
};

export const Default = {
    args: {
        status: 'primary',
        type: 'default',
        shape: 'default',
        loading: false,
    },
};

const IconTemplate = () => {
    return (
        <ar-flex-box>
            <ar-button>
                <ar-icon name="refresh" slot="prefix"></ar-icon>
                Button
            </ar-button>
            <ar-button type="outline" shape="round">
                <ar-icon name="delete" slot="suffix"></ar-icon>
                Button
            </ar-button>
            <ar-button shape="circle">
                <ar-icon name="send"></ar-icon>
            </ar-button>
        </ar-flex-box>
    );
};
export const Icon = IconTemplate.bind({});

const PrimaryTemplate = () => {
    return (
        <ar-flex-box>
            <ar-button status="primary">Button</ar-button>
            <ar-button status="primary" type="outline">
                Button
            </ar-button>
            <ar-button status="primary" type="text">
                Button
            </ar-button>
        </ar-flex-box>
    );
};
export const Primary = PrimaryTemplate.bind({});

const InfoTemplate = () => {
    return (
        <ar-flex-box>
            <ar-button status="info">Button</ar-button>
            <ar-button status="info" type="outline">
                Button
            </ar-button>
            <ar-button status="info" type="text">
                Button
            </ar-button>
        </ar-flex-box>
    );
};

export const Info = InfoTemplate.bind({});

const WarningTemplate = () => {
    return (
        <ar-flex-box>
            <ar-button status="warning">Button</ar-button>
            <ar-button status="warning" type="outline">
                Button
            </ar-button>
            <ar-button status="warning" type="text">
                Button
            </ar-button>
        </ar-flex-box>
    );
};

export const Warning = WarningTemplate.bind({});

const DangerTemplate = () => {
    return (
        <ar-flex-box>
            <ar-button status="danger">Button</ar-button>
            <ar-button status="danger" type="outline">
                Button
            </ar-button>
            <ar-button status="danger" type="text">
                Button
            </ar-button>
        </ar-flex-box>
    );
};

export const Danger = DangerTemplate.bind({});

const SuccessTemplate = () => {
    return (
        <ar-flex-box>
            <ar-button status="success">Button</ar-button>
            <ar-button status="success" type="outline">
                Button
            </ar-button>
            <ar-button status="success" type="text">
                Button
            </ar-button>
        </ar-flex-box>
    );
};

export const Success = SuccessTemplate.bind({});
