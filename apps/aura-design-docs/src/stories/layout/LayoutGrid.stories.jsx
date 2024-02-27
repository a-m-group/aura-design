export default {
    title: 'Components/Layout/Grid',
    tags: ['autodocs'],
    component: (
        <ar-layout-grid>
            <ar-place-holder>Grid1</ar-place-holder>
            <ar-place-holder>Grid2</ar-place-holder>
            <ar-place-holder>Grid3</ar-place-holder>
            <ar-place-holder>Grid4</ar-place-holder>
            <ar-place-holder>Grid5</ar-place-holder>
            <ar-place-holder>Grid6</ar-place-holder>
        </ar-layout-grid>
    ),
    argTypes: {
        gap: { control: 'text' },
        cols: { control: 'number' },
        xs: { control: 'number' },
        sm: { control: 'number' },
        md: { control: 'number' },
        lg: { control: 'number' },
        xl: { control: 'number' },
        min: { control: 'text' },
    },
    // component: Counter,
};
export const Default = {
    args: {
        gap: '1rem',
        cols: 3,
    },
};
export const Responsive = {
    args: {
        gap: '1rem',
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 5,
    },
};
export const AutoFill = {
    args: {
        gap: '1rem',
        min: '10rem',
        cols: 'auto-fill',
    },
};
