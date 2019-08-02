<template>
  <div class="wrap">
    <header class="header">文件服务数量分析</header>
    <div class="content_box">
      <div class="content_item col-60">
        <ve-histogram :data="chartData1" height="600px" width="450px"></ve-histogram>
      </div>
      <div class="content_item col-35" style="padding-top:50px;box-sizing:border-box;">
        <ve-ring :data="chartData2" :settings="chartSettings"></ve-ring>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      radius: 120,
      offsetY: 280,
      roseType: 'radius'
    }
    return {
      chartData1: {
        columns: ['服务', '文件数量'],
        rows: [
          { '服务': '智慧党建', '文件数量': 1393 },
          { '服务': '社区服务', '文件数量': 5461 },
          { '服务': '公共服务', '文件数量': 2923 },
          { '服务': '便民服务', '文件数量': 2649 },
          { '服务': '社会组织', '文件数量': 1564 },
          { '服务': '志愿服务', '文件数量': 4593 },
          { '服务': '社区论坛', '文件数量': 2635 }
        ]
      },
      chartData2: {
        columns: ['服务', '文件数量'],
        rows: [
          { '服务': '智慧党建', '文件数量': 1393 },
          { '服务': '社区服务', '文件数量': 5461 },
          { '服务': '公共服务', '文件数量': 2923 },
          { '服务': '便民服务', '文件数量': 2649 },
          { '服务': '社会组织', '文件数量': 1564 },
          { '服务': '志愿服务', '文件数量': 4593 },
          { '服务': '社区论坛', '文件数量': 2635 }
        ]
      },
    }
  },
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
      height: 600px;
      border: 1px solid #42b983;
      border-radius: 5px;
      // display: flex;
      // justify-content: center;
      // align-items: center;
      .ve-histogram {
        margin: auto;
      }
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