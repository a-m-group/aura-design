import Vue from 'vue';
import App from './App.vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

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

Vue.config.productionTip = false;
Vue.use(ElementUI, { size: 'small' });
new Vue({
    render: (h) => h(App),
}).$mount('#app');
