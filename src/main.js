import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

// Set the base URL for axios
axios.defaults.baseURL = 'http://127.0.0.1:8000';

// Create the Vue application instance
const app = createApp(App);

// Use Vue plugins and components
app.use(router);
app.use(store);

// Make axios accessible in components as $axios
app.config.globalProperties.$axios = axios;

// Mount the app to the DOM
app.mount('#app');
