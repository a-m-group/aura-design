export default {
    title: 'Components/Data Entry/Textfield',
    tags: ['autodocs'],
    component: <ar-textfield />,
    // component: (props) => <ar-textarea {...props} />,
    argTypes: {
        value: { control: 'text' },
        placeholder: { control: 'text' },
        type: { control: 'select', options: ['text', 'password'] },
    },
};

export const Default = {
    args: {
        value: '',
        placeholder: '',
        type: 'text',
    },
};

const PrefixTemplate = () => {
    return (
        <ar-textfield>
            <ar-icon name="code" slot="prefix"></ar-icon>
        </ar-textfield>
    );
};
export const Prefix = PrefixTemplate.bind({});

const SuffixTemplate = () => {
    return (
        <ar-textfield>
            <ar-icon name="send" slot="suffix"></ar-icon>
        </ar-textfield>
    );
};
export const Suffix = SuffixTemplate.bind({});
