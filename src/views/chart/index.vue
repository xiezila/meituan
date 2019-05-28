<template>
  <div class="chart-wrapper">
    <div class="chart" :id="id" :style="{height:chartSize + 'px'}" ></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { debounce } from '@/utils'
  import echarts from 'echarts'
  export default {
    props: {
      chartHeight: {
        type: Number,
        default: 400
      },
      id: {
        type: String,
        default: 'lineChart'
      },
      data: {
        type: Array
      },
      width: {
        type: String,
        default: '100%'
      },
      nowData: {
        type: Number,
        default: 1000
      },
      float: {
        type: String,
        default: 'none'
      }
    },
    data () {
      return {
        screenHeight: document.body.clientHeight,
        screenWidth: document.body.clientWidth,
        timer: false,
        chart: null,
        params: [],
        Date: [],
        option: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '8%',
            top: '7%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: this.getDate(),
              splitLine: {show: false},
              axisLine: {
                lineStyle: {
                  color: '#4676FF'
                }
              },
              axisLabel: {
                textStyle: {
                  color: '#4676FF',
                  fontSize: '12'
                }
              },
              axisTick: {
                lineStyle: {
                  color: '#4676FF'
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              splitLine: {show: false},
              axisLine: {
                lineStyle: {
                  color: '#4676FF'
                }
              },
              axisLabel: {
                textStyle: {
                  color: '#4676FF',
                  fontSize: '15'
                }
              },
              axisTick: {
                lineStyle: {
                  color: '#4676FF'
                }
              }
            }
          ],
          series: [
            {
              name: '事件趋势',
              type: 'line',
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: 'rgba(81, 190, 255, 0.1)'},
                      {offset: 0.7, color: 'rgba(81, 190, 255, 0.4)'},
                      {offset: 1, color: 'rgba(81, 190, 255, 0.8)'}
                    ]
                  )
                },
                emphasis: {
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: 'rgba(81, 190, 255, 0.8)'},
                      {offset: 0.7, color: 'rgba(81, 190, 255, 0.4)'},
                      {offset: 1, color: 'rgba(81, 190, 255, 0.1)'}
                    ]
                  )
                }
              },
              data: this.getEventNum(this.Date),
              color: 'rgba(81, 190, 255, 0.4)'
            }
          ]
        }
      }
    },
    computed: {
      chartWidth () {
        return {width: this.width}
      },
      chartPosition () {
        return {float: this.float}
      },
      legendData () {
        return this.option.series.map((item) => {
          return item.name
        })
      },
      chartSize () {
        console.log('this.height', this.chartHeight)
        return this.chartHeight
      }
    },
    watch: {
      screenHeight (val) {
        console.log('val', val)
        if (!this.timer) {
          this.screenHeight = val
          this.timer = true
          let that = this
          setTimeout(function () {
            that.timer = false
          }, 400)
        }
      },
      screenWidth (val) {
        console.log('valkuan', val)
        if (!this.timer) {
          this.screenWidth = val
          this.timer = true
          let that = this
          setTimeout(function () {
            that.timer = false
          }, 400)
        }
      },
      data () {
        this.drawChart()
      },
      chartHeight () {
        this.chart.resize()
      }
    },
    methods: {
      getStyle(el, name) {
        if (window.getComputedStyle) {
          return window.getComputedStyle(el, null);
        } else {
          return el.currentStyle;
        }
      },
      // chartssize (container,charts) {
      //   var wi = this.getStyle(container, 'width').width;
      //   var hi = this.getStyle(container, 'height').height;
      //   charts.style.width = wi
      //   charts.style.height = hi
      // },
      resizeCharts () {
        let chartBox = document.getElementsByClassName('chart-wrapper')[0]
        let myChart = document.getElementById('lineChart')
        var wi = this.getStyle(chartBox, 'width').width;
        var hi = this.getStyle(chartBox, 'height').height;
        // console.log('chartBox.style.width---laoban', chartBox.style.width)
        // console.log('chartBox.style.width', wi)
        // console.log('chartBox.style.height', hi)
        myChart.style.width = document.documentElement.clientWidth + 'px'
        myChart.style.height = document.documentElement.clientHeight + 'px'
        console.log(' myChart.style.width',  myChart.style.width)
        console.log(' myChart.style.height',  myChart.style.height)

      },
      drawChart () {
        // this.resizeCharts()
        this.chart = echarts.init(document.getElementById(this.id))
        this.chart.setOption(this.option)
        let data = this.params
        let chart = this.chart
        this.$emit('stackBarLegend', data)
        this.$emit('drawStackBar', chart)
      },
      destroyChart () {
        if (!this.chart) {
          return
        }
        window.removeEventListener('resize', this.__resizeHanlder)
        this.chart.dispose()
        this.chart = null
      },
      getDate () {
        let now = (new Date()).getTime()
        let date = []
        for (let i = 0; i < 30; i++) {
          date.push(((new Date(now)).getMonth() + 1) + '-' + (new Date(now)).getDate())
          now = now - 1000 * 60 * 60 * 24
        }
        this.Date = date.reverse()
        return date
      },
      getEventNum (date) {
        let data = []
        date.forEach((item) => {
          data.push(Math.floor(Math.random() * 1000) + 290)
        })
        setInterval(() => {
          data[29] = this.nowData
          this.chart.setOption(this.option)
        }, 1000)
        return data
      }
    },
    mounted () {
      this.getDate()
      this.drawChart()
      // 监听窗口的变化
      this.__resizeHanlder = debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 5)
      window.addEventListener('resize', this.__resizeHanlder)
      const that = this
      window.onresize = () => {
        return (() => {
          this.screenHeight = document.documentElement.clientHeight
          this.screenWidth = document.documentElement.clientWidth
          this.resizeCharts()
          // console.log(' this.screenHeigh',  this.screenHeight)
          // console.log(' this.screenWidth',  this.screenWidth)
          // this.chartssize(document.getElementById('chart_box'), document.getElementById('lineChart'))
        })()
      }
    },
    beforeDestroy () {
      this.destroyChart()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
body
  overflow hidden
.chart_box
  width: 95%;
  height 400px;
  margin: 0 auto
  .chart
    /*height 400px*/
</style>
