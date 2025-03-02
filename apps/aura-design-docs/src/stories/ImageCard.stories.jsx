export default {
    title: 'Components/Data Display/ImageCard',
    tags: ['autodocs'],
    component: (
        <ar-image-card class="card">
            <ar-button slot="extra">对话</ar-button>
        </ar-image-card>
    ),
    argTypes: {
        title: { control: 'text' },
        description: { control: 'text' },
        'image-url': { control: 'text' },
        'aspect-ratio': { control: 'text' },
    },
};

export const Default = {
    args: {
        title: '英语老师',
        description: '和英语老师对话，老师会纠正您的语法错误、拼写错误和事实错误。',
        'image-url': '/card_bg.png',
    },
};
