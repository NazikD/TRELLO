import './bootstrap';
import '../sass/app.scss'
import {createApp} from 'vue/dist/vue.esm-bundler.js';

import Column from './components/Column.vue';
import CreateColumn from './components/CreateColumn.vue';

const app = createApp({});
app.component('column', Column);
app.component('create-column', CreateColumn);
app.mount('#app');
