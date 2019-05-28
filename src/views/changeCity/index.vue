<template>
  <div class="city-page-wrapper">
    <div class="op-area">
      <div class="choose-by-province">
        <h3>按省份选择:</h3>
        <el-select v-model="value5" multiple
                   class="choose-wrap" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="value11" multiple collapse-tags
                   class="choose-wrap" style="margin-left: 20px;" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="search">
        <h3>直接搜索：</h3>
        <input type="text" placeholder="请输入城市中文或拼音">
      </div>
    </div>
    <div class="citylist">
      <h3>热门城市：</h3>
      <span>北京</span>
      <span>上海</span>
      <span>广州</span>
      <span>深圳</span>
      <span>天津</span>
      <span>西安</span>
      <span>重庆</span>
      <span>杭州</span>
      <span>南京</span>
      <span>武汉</span>
      <span>成都</span>
    </div>
    <div class="citylist recent-city">
      <h3>最近访问：</h3>
      <span>固安县</span>
      <span>北京</span>
    </div>
    <div class="alphabet">
      <h3>按拼音首字母选择：</h3>
      <span>A</span>
      <span>B</span>
      <span>C</span>
      <span>D</span>
      <span>E</span>
      <span>F</span>
      <span>G</span>
      <span>H</span>
      <span>I</span>
      <span>J</span>
      <span>K</span>
      <span>L</span>
      <span>M</span>
      <span>N</span>
      <span>O</span>
      <span>P</span>
      <span>Q</span>
      <span>R</span>
      <span>S</span>
      <span>T</span>
      <span>W</span>
      <span>X</span>
      <span>Y</span>
      <span>Z</span>
    </div>
    <div class="alphabet-city-area"></div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value5: [],
      value11: []
    }
  }
}
</script>

<style lang="stylus" scoped>
.city-page-wrapper
  h3
    display inline-block
    vertical-align: middle
    text-align left
    font-size: 16px;
    color: #333;
    font-weight: 500;
.city-page-wrapper .op-area, .city-page-wrapper .citylist, .city-page-wrapper .alphabet
  padding-bottom: 30px;
  border-bottom: 1px solid #E5E5E5;
.city-page-wrapper .choose-by-province, .city-page-wrapper .search, .city-page-wrapper span
  display inline-block
  vertical-align middle

.city-page-wrapper
  width: 1190px
  min-height: 1000px;
  margin 20px auto 0
  padding 20px
  border 1px solid #E5E5E5
  border-radius 4px
  background #fff
  box-shadow 0 2px 27px 0 rgba(0,0,0,.1)
  .op-area
    .choose-by-province
      .choose-wrap
        display inline-block
    .search
      position relative
      margin-left 40px
  .citylist
    padding-top 30px
    span
      margin: 0 20px;
      font-size: 14px;
      color: #666;
  .alphabet
    padding-top 30px
    span
      margin: 0 10px;
      font-size: 15px;
      color: #666;
</style>
