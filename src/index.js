import { createApp } from 'vue'
import { ObserveVisibility } from 'vue3-observe-visibility';
import App from './App.vue';
import { router } from './router';

const app = createApp(App);
app.directive('observe-visibility', ObserveVisibility);
app.use(router);
app.mount('#app');
