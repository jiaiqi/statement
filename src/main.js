import Vue from 'vue';
import VCharts from 'v-charts';
import App from './App.vue';
import router from './router';
import store from './store';
import echarts from 'echarts'
import Axios from 'axios'

Vue.prototype.$echarts = echarts
Vue.prototype.$http = Axios
Vue.config.productionTip = false;
Vue.use(VCharts);
Vue.use(echarts)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
