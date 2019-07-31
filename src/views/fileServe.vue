<template>
  <div class="wrap">
    <header class="header">应用访问次数</header>
    <div class="content_box">
      <div class="content_item col-60"></div>
      <div class="content_item col-35"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.wrap {
  width: 65%;
  margin: 0 auto;
  .header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: left;
    font-size: 18px;
    font-weight: 600;
  }
  .content_box {
    width: 100%;
    display: flex;
    justify-content: space-around;
    .content_item {
      height: 800px;
      border: 1px solid #999;
    }
  }
}
.col-35 {
  width: 35%;
}
.col-60 {
  width: 60%;
}
</style>