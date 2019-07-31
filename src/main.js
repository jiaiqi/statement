import Vue from 'vue';
import VCharts from 'v-charts';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VCharts);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
