import './assets/main.css';

import { createApp } from 'vue';
import Vue3Spline from 'vue3-spline';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

app.use(Vue3Spline);

app.mount('#app');
