import { createApp } from 'vue';
import App from './App.vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import {
    defineCustomElements,
    Card,
    FlexBox,
    LayoutGrid,
    LayoutHoly,
    Segmented,
    Textfield,
} from '@aura-group/aura-design';
import '@aura-group/aura-design/dist/style.css';
defineCustomElements({ Card, FlexBox, LayoutGrid, LayoutHoly, Segmented, Textfield });

const app = createApp(App);
app.use(ElementPlus);
app.mount('#app');
