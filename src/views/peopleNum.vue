<template>
  <div class="wrap">
    <header>在线人数分析</header>
    <div class="tab">
      <div class="items">今日</div>
      <div class="items">本周</div>
      <div class="items">本月</div>
      <div class="items">本年</div>
      <div class="items">自定义时间段</div>
    </div>
    <div class="top">
      <div class="top_item">最大在线人数：2568</div>
      <div class="top_item">产生日期：2019-7-31</div>
      <div class="top_item">产生时间：17:31</div>
    </div>
    <div class="content">
      <ve-line :data="chartData"></ve-line>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      }
    }
  },
};
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
    width: 400px;
    display: flex;
    justify-content: space-between;
    .items {
      // width: 150px;
      border-radius: 5px;
      height: 30px;
      border: 1px solid #42b983;
      line-height: 30px;
      padding: 0 10px;
    }
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
