import './bootstrap';
import '../sass/app.scss'
import {createApp} from 'vue/dist/vue.esm-bundler.js';

import Column from './components/Column.vue';
// import Card from './components/Card.vue';

const app = createApp({});
app.component('column', Column);
app.mount('#app');
