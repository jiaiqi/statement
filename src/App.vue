<template>
  <div id="app">
    <!-- <div id="nav" class="nav">
      <router-link class="nav_item" to="/zxrsfx">在线人数分析</router-link>
      <router-link class="nav_item" to="/yyrdfx">应用热点统计</router-link>
      <router-link class="nav_item" to="/yhgcfx">用户构成分析</router-link>
      <router-link class="nav_item" to="/wjfwfx">文件服务分析</router-link>
      <router-link class="nav_item" to="/xtrlt">系统热力图</router-link>
      <router-link class="nav_item" to="/yyzyjk">应用资源监控</router-link>
    </div>
    <router-view />-->
    <Home />
  </div>
</template>
<script>
import Home from './views/Home'
export default {
  components: {
    Home,
  },
}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
