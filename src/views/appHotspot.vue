<template>
  <div class="wrap">
    <header>应用访问次数</header>
    <div class="tab">
      <div class="tab_left">
        <div class="items" @click="changeDataType(1)" :class="{'active':checkDataType===1}">今日</div>
        <div class="items" @click="changeDataType(2)" :class="{'active':checkDataType===2}">本周</div>
        <div class="items" @click="changeDataType(3)" :class="{'active':checkDataType===3}">本月</div>
        <div class="items" @click="changeDataType(4)" :class="{'active':checkDataType===4}">本年</div>
        <div class="items" @click="changeDataType(5)" :class="{'active':checkDataType===5}">自定义时间段</div>
      </div>
      <div class="tab_right">
        <div class="items" @click="changeChartType(1)" :class="{'active':checkChartType===1}">柱状</div>
        <div class="items" @click="changeChartType(2)" :class="{'active':checkChartType===2}">折线图</div>
        <div class="items" @click="changeChartType(3)" :class="{'active':checkChartType===3}">饼图</div>
        <div class="items" @click="changeChartType(4)" :class="{'active':checkChartType===4}">饼图</div>
      </div>
    </div>
    <div class="top">
      <div class="top_item">最热应用：{{topData.hotApp}}</div>
      <div class="top_item">最热访问次数：{{topData.hotNum}}</div>
      <div class="top_item">产生时间：{{topData.date}}</div>
    </div>
    <div class="content">
      <!-- 折线图 -->
      <ve-line :data="chartData" v-if="checkChartType === 2"></ve-line>
      <!-- 柱状图 -->
      <ve-histogram :data="chartData" v-if="checkChartType === 1"></ve-histogram>
      <!-- 饼图 -->
      <ve-pie :data="chartData" v-if="checkChartType === 3"></ve-pie>
      <!-- 环图 -->
      <ve-ring :data="chartData" v-if="checkChartType === 4"></ve-ring>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    this.colors = ['#42A5F5']
    return {
      topData: {
        hotApp: '智慧党建',
        hotNum: '65289',
        date: '2019-8-2'
      },
      checkDataType: 1,
      checkChartType: 1,
      chartData: {},
      chartData1: {
        columns: ['时间', '访问用户'],
        rows: [
          { '时间': '00:00', '访问用户': 1393 },
          { '时间': '01:00', '访问用户': 3530 },
          { '时间': '02:00', '访问用户': 2923 },
          { '时间': '03:00', '访问用户': 1723 },
          { '时间': '04:00', '访问用户': 3792 },
          { '时间': '05:00', '访问用户': 4593 },
          { '时间': '06:00', '访问用户': 4913 },
          { '时间': '07:00', '访问用户': 1393 },
          { '时间': '08:00', '访问用户': 3530 },
          { '时间': '09:00', '访问用户': 2923 },
          { '时间': '10:00', '访问用户': 1723 },
          { '时间': '11:00', '访问用户': 3792 },
          { '时间': '12:00', '访问用户': 4593 },
          { '时间': '13:00', '访问用户': 4913 },
          { '时间': '14:00', '访问用户': 4593 },
          { '时间': '15:00', '访问用户': 4913 },
          { '时间': '16:00', '访问用户': 1393 },
          { '时间': '17:00', '访问用户': 3530 },
          { '时间': '18:00', '访问用户': 2923 },
          { '时间': '19:00', '访问用户': 1723 },
          { '时间': '20:00', '访问用户': 3792 },
          { '时间': '21:00', '访问用户': 4593 },
          { '时间': '22:00', '访问用户': 4913 },
          { '时间': '23:00', '访问用户': 4593 },
          { '时间': '24:00', '访问用户': 4913 },
        ]
      },
      chartData2: {
        columns: ['周', '访问用户'],
        rows: [
          { '周': '周一', '访问用户': 1393 },
          { '周': '周二', '访问用户': 3530 },
          { '周': '周三', '访问用户': 2923 },
          { '周': '周四', '访问用户': 1723 },
          { '周': '周五', '访问用户': 3792 },
          { '周': '周六', '访问用户': 4593 },
          { '周': '周天', '访问用户': 4913 },
        ]
      },
      chartData3: {
        columns: ['日', '访问用户'],
        rows: [
          { '日': '1号', '访问用户': 1393 },
          { '日': '2号', '访问用户': 3530 },
          { '日': '3号', '访问用户': 2923 },
          { '日': '4号', '访问用户': 1723 },
          { '日': '5号', '访问用户': 3792 },
          { '日': '6号', '访问用户': 4593 },
          { '日': '7号', '访问用户': 4913 },
          { '日': '8号', '访问用户': 1393 },
          { '日': '9号', '访问用户': 3530 },
          { '日': '10号', '访问用户': 2923 },
          { '日': '11号', '访问用户': 1723 },
          { '日': '12号', '访问用户': 3792 },
          { '日': '13号', '访问用户': 4593 },
          { '日': '14号', '访问用户': 4913 },
          { '日': '15号', '访问用户': 1393 },
          { '日': '16号', '访问用户': 3530 },
          { '日': '17号', '访问用户': 2923 },
          { '日': '18号', '访问用户': 1723 },
          { '日': '19号', '访问用户': 3792 },
          { '日': '20号', '访问用户': 4593 },
          { '日': '21号', '访问用户': 4913 },
          { '日': '22号', '访问用户': 1393 },
          { '日': '23号', '访问用户': 3530 },
          { '日': '24号', '访问用户': 2923 },
          { '日': '25号', '访问用户': 1723 },
          { '日': '26号', '访问用户': 3792 },
          { '日': '27号', '访问用户': 4593 },
          { '日': '28号', '访问用户': 4913 },
          { '日': '29号', '访问用户': 3792 },
          { '日': '30号', '访问用户': 4593 },
          { '日': '31号', '访问用户': 4913 },
        ]
      },
      chartData4: {
        columns: ['月份', '访问用户'],
        rows: [
          { '月份': '一月', '访问用户': 1393 },
          { '月份': '二月', '访问用户': 3530 },
          { '月份': '三月', '访问用户': 2923 },
          { '月份': '四月', '访问用户': 1723 },
          { '月份': '五月', '访问用户': 3792 },
          { '月份': '六月', '访问用户': 4593 },
          { '月份': '七月', '访问用户': 4913 },
          { '月份': '八月', '访问用户': 1393 },
          { '月份': '九月', '访问用户': 3530 },
          { '月份': '十月', '访问用户': 2923 },
          { '月份': '十一月', '访问用户': 1723 },
          { '月份': '十二月', '访问用户': 3792 }
        ]
      },
    }
  },
  methods: {
    checkData() {
      let type = this.checkDataType
      if (type === 1) {
        this.chartData = this.chartData1
      } else if (type === 2) {
        this.chartData = this.chartData2
      } else if (type === 3) {
        this.chartData = this.chartData3
      } else if (type === 4) {
        this.chartData = this.chartData4
      }
    },
    changeDataType(type) {
      this.checkDataType = type
      this.checkData();
    },
    changeChartType(type) {
      this.checkChartType = type
      this.checkData();
    }
  },
  created() {
    this.checkData();
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 65%;
  margin: 0 auto;
  header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: left;
    font-size: 18px;
    font-weight: 600;
  }
  .tab {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .tab_left {
      width: 400px;
      display: flex;
      justify-content: space-between;
      float: left;
    }
    .tab_right {
      width: 300px;
      display: flex;
      justify-content: space-between;
      float: right;
    }
    .items {
      // width: 150px;
      border-radius: 5px;
      height: 30px;
      border: 1px solid #42b983;
      line-height: 30px;
      padding: 0 10px;
      &:hover {
        background-color: #42b983;
        color: #fff;
      }
    }
  }
  .active {
    background-color: #42b983;
    color: #fff;
  }
  .top {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .top_item {
      padding: 0 20px;
      height: 30px;
      border-radius: 5px;
      line-height: 30px;
      border: 1px solid #42b983;
      &:hover {
        color: #fff;
        background-color: #42b983;
      }
    }
  }
}
</style>