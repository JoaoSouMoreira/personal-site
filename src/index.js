import Vue from 'vue';
import VueObserveVisibility from 'vue-observe-visibility';
import App from './App.vue';
import router from './routes';

Vue.config.productionTip = false;

Vue.use(VueObserveVisibility);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
