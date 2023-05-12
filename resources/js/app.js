import './bootstrap';
import '../sass/app.scss'
import {createApp} from 'vue/dist/vue.esm-bundler.js';

import Column from './components/Column.vue';
import CreateColumn from './components/CreateColumn.vue';
import Dashboard from './components/Dashboard.vue';

const app = createApp({});
app.component('column', Column);
app.component('create-column', CreateColumn);
app.component('dashboard', Dashboard);
app.mount('#app');
