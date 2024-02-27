export const Default = {};
export default {
    title: 'Components/Layout/Holy',
    tags: ['autodocs'],
    component: (
        <ar-layout-holy class="layout-demo">
            <ar-place-holder class="header" slot="header">
                Header
            </ar-place-holder>
            <ar-place-holder class="sider" slot="left-sider">
                Left-Sider
            </ar-place-holder>
            <ar-place-holder class="content" slot="content">
                Content
            </ar-place-holder>
            <ar-place-holder class="sider" slot="right-sider">
                Right-Sider
            </ar-place-holder>
            <ar-place-holder class="footer" slot="footer">
                Footer
            </ar-place-holder>
        </ar-layout-holy>
    ),
    // component: Counter,
};
const HolyTemplate1 = () => {
    return (
        <ar-layout-holy class="layout-demo">
            <ar-place-holder class="header" slot="header">
                Header
            </ar-place-holder>
            <ar-place-holder class="sider" slot="left-sider">
                Left-Sider
            </ar-place-holder>
            <ar-place-holder class="content" slot="content">
                Content
            </ar-place-holder>
        </ar-layout-holy>
    );
};
export const Holy1 = HolyTemplate1.bind({});

const HolyTemplate2 = () => {
    return (
        <ar-layout-holy class="layout-demo">
            <ar-place-holder class="header" slot="header">
                Header
            </ar-place-holder>
            <ar-place-holder class="content" slot="content">
                Content
            </ar-place-holder>
            <ar-place-holder class="footer" slot="footer">
                Footer
            </ar-place-holder>
        </ar-layout-holy>
    );
};
export const Holy2 = HolyTemplate2.bind({});
