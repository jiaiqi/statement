import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/zxrsfx', // 在线人数分析
      name: 'zxrsfx',
      component: () => import(/* webpackChunkName: "zxrsfx" */ './views/peopleNum.vue'),
    },
    {
      path: '/yyrdtj', // 应用热点统计
      name: 'yyrdtj',
      component: () => import(/* webpackChunkName: "yyrdtj" */ './views/appHotspot.vue'),
    },
    {
      path: '/yhgcfx', // 用户构成分析
      name: 'yhgcfx',
      component: () => import(/* webpackChunkName: "yhgcfx" */ './views/userConstitute.vue'),
    },
    {
      path: '/wjfwfx', // 文件服务分析
      name: 'wjfwfx',
      component: () => import(/* webpackChunkName: "wjfwfx" */ './views/fileServe.vue'),
    },
    {
      path: '/xtrlt', // 系统热力图
      name: 'xtrlt',
      component: () => import(/* webpackChunkName: "xtrlt" */ './views/systemCharts.vue'),
    },
    {
      path: '/yyzyjk', // 应用资源监控
      name: 'yyzyjk',
      component: () => import(/* webpackChunkName: "yyzyjk" */ './views/applicationRes.vue'),
    },
  ],
});
