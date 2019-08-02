<template>
  <div class="wrap">
    <header class="header">用户构成分析</header>
    <div class="content_box">
      <div class="content_list">
        <div class="content_item">总用户数：{{chartData00.totalNum}}</div>
        <div class="content_item">性别比例：{{chartData00.sexRatio}}</div>
        <div class="content_item">平均年龄：{{chartData00.averageAge}}岁</div>
        <div class="content_item">本月新增：{{chartData00.newAdd}}人</div>
      </div>
      <div class="content_list">
        <div class="title">社区用户人数排名</div>
        <ve-histogram
          :data="chartData01"
          :colors="color01"
          :extend="extend"
          height="300px"
          width="150px"
        ></ve-histogram>
      </div>
      <div class="content_list">
        <div class="title">月度人数变动</div>
        <ve-line :data="chartData02" height="400px" :colors="color02" :settings="chartSettings2"></ve-line>
      </div>
      <div class="content_list">
        <div class="title">用户年龄段统计</div>
        <ve-histogram :data="chartData03" width="300px" :colors="color03" :extend="extend"></ve-histogram>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    this.extend = {
      // 'xAxis.0.axisLabel.rotate': 90,
      series: {
        label: { show: true, position: "top" }
      }
    }
    this.chartSettings2 = {
      area: true
    }
    this.color01 = ['#ef5350']
    this.color02 = ['#ffca28']
    this.color03 = ['#66bb6a']
    return {
      chartData00: {
        totalNum: '15263',
        sexRatio: '3.2:1',
        averageAge: '31',
        newAdd: '325'
      },
      chartData01: {
        columns: ['社区', '人数'],
        rows: [
          { '社区': '党\n建\n论\n坛', '人数': 1393 },
          { '社区': '社\n区\n论\n坛', '人数': 3530 },
        ]
      },
      chartData02: {
        columns: ['月度', '用户数'],
        rows: [
          { '月度': '1月', '用户数': 1393 },
          { '月度': '2月', '用户数': 3530 },
          { '月度': '3月', '用户数': 2923 },
          { '月度': '4月', '用户数': 1723 },
          { '月度': '5月', '用户数': 3792 },
          { '月度': '6月', '用户数': 4593 },
          { '月度': '7月', '用户数': 1393 },
          { '月度': '8月', '用户数': 3530 },
          { '月度': '9月', '用户数': 2923 },
          { '月度': '10月', '用户数': 1723 },
          { '月度': '11月', '用户数': 3792 },
          { '月度': '12月', '用户数': 4593 }
        ]
      },
      chartData03: {
        columns: ['年龄段', '用户数'],
        rows: [
          { '年龄段': '18\n岁\n以\n下', '用户数': 1393 },
          { '年龄段': '18\n-\n25\n岁', '用户数': 3430 },
          { '年龄段': '25\n-\n35\n岁', '用户数': 2393 },
          { '年龄段': '18\n-\n25\n岁', '用户数': 3930 },
          { '年龄段': '35\n-\n50\n岁', '用户数': 5393 },
          { '年龄段': '50\n岁\n以\n上', '用户数': 1530 },
        ]
      },
    }
  }
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
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    .content_list {
      width: 48%;
      // height: 300px;
      border: 1px solid #66bb6a;
      border-radius: 5px;
      box-sizing: border-box;
      overflow: hidden;
      &:first-child {
        display: flex;
        width: 75%;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
      }
      &:nth-child(2) {
        width: 20%;
      }
      &:nth-child(3) {
        width: 60%;
        // height: 400px;
        margin-top: 30px;
      }
      &:nth-child(4) {
        width: 35%;
        // height: 400px;
        margin-top: 30px;
      }
      .title {
        border-left: 3px solid #990000;
        text-indent: 10px;
        margin: 10px;
        height: 20px;
        line-height: 20px;
        text-align: left;
      }
      .content_item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35%;
        height: 35%;
        // border: 1px solid #888;
        color: #fff;
        border-radius: 5px;
        background-color: #ef5350;
        &:nth-child(2) {
          background-color: #42a5f5;
        }
        &:nth-child(3) {
          background-color: #66bb6a;
        }
        &:nth-child(4) {
          background-color: #ffca28;
        }
      }
    }
  }
}
</style>