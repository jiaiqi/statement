<template>
  <div class="home">
    <div class="nav" id="nav">
      <router-link class="nav_item" to="zxrsfx">在线人数分析</router-link>
      <router-link class="nav_item" to="yyrdtj">应用热点统计</router-link>
      <router-link class="nav_item" to="yhgcfx">用户构成分析</router-link>
      <router-link class="nav_item" to="wjfwfx">文件服务分析</router-link>
      <router-link class="nav_item" to="xtrlt">系统热力图</router-link>
      <router-link class="nav_item" to="yyzyjk">应用资源监控</router-link>
    </div>
    <router-view />
  </div>
</template>


<script>

export default {
  name: 'home',
  components: {
  },
};
</script>

<style lang="scss" scoped>
.nav {
  padding: 30px;
  width: 50%;
  margin: 0 auto;
  justify-content: space-around;
  display: flex;
  a {
    font-weight: bold;
    color: #2c3e50;
    width: 150px;
    margin: 0 10px;
    text-decoration: none;
    text-align: center;
    &.router-link-exact-active {
      color: #fff;
      background-color: #42b983;
    }
  }
}
</style>
