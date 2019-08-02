<template>
  <div class="wrap">
    <!-- <header class="header">系统热力图</header> -->
    <div class="chart_item" ref="charts" id="charts"></div>
    <!-- <ve-heatmap :data="data1"></ve-heatmap> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataCX: [
        [1, 55, 9],
        [2, 25, 11],
        [3, 56, 7],
        [4, 33, 7],
        [5, 42, 24],
        [6, 82, 58],
        [7, 74, 49],
        [8, 78, 55],
        [9, 267, 216],
        [10, 185, 127],
        [11, 39, 19],
        [12, 41, 11],
        [13, 64, 38],
        [14, 108, 79],
        [15, 108, 63],
        [16, 33, 6],
        [17, 94, 66],
        [18, 186, 142],
        [19, 57, 31],
        [20, 22, 8],
        [21, 39, 15],
        [22, 94, 69],
        [23, 99, 73],
        [24, 31, 12],
        [25, 42, 27],
        [26, 154, 117],
        [27, 234, 185],
        [28, 160, 120],
        [29, 134, 96],
        [30, 52, 24],
        [31, 46, 5]
      ],
      dataTJ: [
        [1, 37, 37],
        [2, 62, 62],
        [3, 38, 38],
        [4, 21, 21],
        [5, 42, 42],
        [6, 52, 52],
        [7, 30, 30],
        [8, 48, 48],
        [9, 85, 85],
        [10, 81, 81],
        [11, 39, 39],
        [12, 51, 51],
        [13, 69, 69],
        [14, 105, 105],
        [15, 68, 68],
        [16, 68, 68],
        [17, 27, 27],
        [18, 61, 61],
        [19, 71, 71],
        [20, 102, 102],
        [21, 50, 50],
        [22, 94, 94],
        [23, 77, 77],
        [24, 130, 130],
        [25, 84, 84],
        [26, 108, 108],
        [27, 48, 48],
        [28, 48, 48],
        [29, 92, 92],
        [30, 116, 116],
        [31, 50, 50],
      ],
      dataXZ: [
        [1, 91, 45],
        [2, 65, 27],
        [3, 83, 60],
        [4, 109, 81],
        [5, 106, 77],
        [6, 109, 81],
        [7, 106, 77],
        [8, 89, 65],
        [9, 53, 33],
        [10, 80, 55],
        [11, 117, 81],
        [12, 99, 71],
        [13, 95, 69],
        [14, 116, 87],
        [15, 108, 80],
        [16, 134, 83],
        [17, 79, 43],
        [18, 71, 46],
        [19, 97, 71],
        [20, 84, 57],
        [21, 87, 63],
        [22, 104, 77],
        [23, 87, 62],
        [24, 37, 32],
        [25, 65, 45],
        [26, 39, 24],
        [27, 39, 24],
        [28, 93, 68],
        [29, 188, 143],
        [30, 174, 131],
        [31, 187, 143],
      ],
      dataYD: [
        [1, 26, 37],
        [2, 85, 62],
        [3, 78, 38],
        [4, 21, 21],
        [5, 41, 42],
        [6, 56, 52],
        [7, 64, 30],
        [8, 55, 48],
        [9, 76, 85],
        [10, 91, 81],
        [11, 84, 39],
        [12, 64, 51],
        [13, 70, 69],
        [14, 77, 105],
        [15, 109, 68],
        [16, 73, 68],
        [17, 54, 27],
        [18, 51, 61],
        [19, 91, 71],
        [20, 73, 102],
        [21, 73, 50],
        [22, 84, 94],
        [23, 93, 77],
        [24, 99, 130],
        [25, 146, 84],
        [26, 113, 108],
        [27, 81, 48],
        [28, 56, 48],
        [29, 82, 92],
        [30, 106, 116],
        [31, 118, 50],
      ]
    }
  },
  mounted() {
    this.setData1()
  },
  methods: {
    setData1() {
      let self = this;
      let myChart = this.$echarts.init(document.getElementById('charts'));

      let schema = [
        { name: 'date', index: 0, text: '日' },
        { name: 'reqNum', index: 1, text: '请求次数' },
        { name: 'size', index: 2, text: '圆形大小' },
      ];


      let itemStyle = {
        normal: {
          opacity: 0.8,
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowColor: 'rgba(0, 0, 0, 0.7)'
        }
      };

      let option = {
        // backgroundColor: '#404a59',
        // ef5350 42a5f5 66bb6a ffca28
        color: [
          '#ef5350', '#42a5f5', '#66bb6a', '#ffca28'
        ],
        legend: {
          y: 'top',
          data: ['查询', '提交', '下载', '阅读'],
          textStyle: {
            color: '#000',
            fontSize: 16
          }
        },
        grid: {
          x: '10%',
          x2: 150,
          y: '18%',
          y2: '10%'
        },
        tooltip: {
          padding: 10,
          backgroundColor: '#222',
          borderColor: '#000',
          borderWidth: 1,
          formatter: function (obj) {
            let value = obj.value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
              + obj.seriesName + '-' + value[0] + '号：'
              + '</div>'
              + schema[1].text + '：' + value[1] + '<br>'
          }
        },
        xAxis: {
          type: 'value',
          name: '日期',
          nameGap: 16,
          nameTextStyle: {
            color: '#000',
            fontSize: 14
          },
          max: 31,
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#000'
            }
          }
        },
        yAxis: {
          type: 'value',
          name: '请求次数',
          nameLocation: 'end',
          nameGap: 20,
          nameTextStyle: {
            color: '#000',
            fontSize: 16
          },
          axisLine: {
            lineStyle: {
              color: '#000'
            }
          },
          splitLine: {
            show: false
          }
        },
        visualMap: [
          {
            left: 'right',
            top: '10%',
            dimension: 2,
            min: 0,
            max: 300,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['请求次数'],
            textGap: 30,
            textStyle: {
              color: '#000'
            },
            inRange: {
              symbolSize: [10, 70]
            },
            outOfRange: {
              symbolSize: [10, 70],
              color: ['rgba(105,255,233,.2)']
            },
            controller: {
              inRange: {
                color: ['#c23531']
              },
              outOfRange: {
                color: ['rgba(255,0,0,0.2)']
                // color: ['#444']
              }
            }
          },
        ],
        series: [
          {
            name: '查询',
            type: 'scatter',
            itemStyle: itemStyle,
            data: self.dataCX
          },
          {
            name: '提交',
            type: 'scatter',
            itemStyle: itemStyle,
            data: self.dataTJ
          },
          {
            name: '下载',
            type: 'scatter',
            itemStyle: itemStyle,
            data: self.dataXZ
          },
          {
            name: '阅读',
            type: 'scatter',
            itemStyle: itemStyle,
            data: self.dataYD
          }
        ]
      };
      myChart.setOption(option);
    },
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 65%;
  border: 1px solid #42b983;
  border-radius: 5px;
  margin: 0 auto;
  height: 500px;
  .header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: left;
    font-size: 18px;
    font-weight: 600;
  }
  .chart_item {
    height: 100%;
  }
}
</style>