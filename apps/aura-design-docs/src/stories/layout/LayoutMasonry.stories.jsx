export default {
    title: 'Components/Layout/Masonry',
    tags: ['autodocs'],
    component: (
        <ar-layout-masonry>
            <ar-card>masonry masonry masonry masonry masonry masonry</ar-card>
            <ar-card>
                masonry masonry masonry masonry masonry masonry masonry masonry masonry masonry
                masonry masonry masonry masonry masonry masonry masonry masonry masonry masonry
                masonry masonry masonry masonry
            </ar-card>
            <ar-card>
                masonry masonry masonry masonry masonry masonry masonry masonry masonry masonry
                masonry masonry
            </ar-card>
            <ar-card>
                masonry masonry masonry masonry masonry masonry masonry masonry masonry masonry
                masonry masonry masonry masonry masonry masonry masonry masonry masonry masonry
                masonry masonry masonry masonry masonry masonry masonry masonry masonry masonry
            </ar-card>
            <ar-card>
                masonry masonry masonry masonry masonry masonry masonry masonry masonry masonry
                masonry masonry masonry masonry masonry masonry masonry masonry
            </ar-card>
            <ar-card>masonry masonry masonry masonry masonry masonry</ar-card>
            <ar-card>
                masonry masonry masonry masonry masonry masonry masonry masonry masonry masonry
                masonry masonry
            </ar-card>
        </ar-layout-masonry>
    ),
    parameters: {
        backgrounds: { default: 'light' },
    },
    argTypes: {
        width: { control: 'text' },
        count: { control: 'text' },
        gap: { control: 'text' },
    },
};
export const Default = {
    args: {
        width: '20rem',
        count: 'auto',
        gap: '10px',
    },
};
