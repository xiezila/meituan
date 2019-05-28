<template>
  <div class="left-banner">
    <div class="category-nav-container">
      <div class="category-nav-title-wrapper">
        <span>全部分类</span>
      </div>
      <div class="category-nav-content-wrapper">
        <ul>
          <li v-for="(item, index) in categoryList" :key="item.id" @mouseenter="handleOnMouseOver(index)" @mouseleave="handleOnMouseOut()" >
            <img :src="item.url" />
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <category-nav-detail v-show="isShowDetail" :index="current"></category-nav-detail>
    </div>
  </div>
</template>

<script>
  import categoryNavDetail from './components/category-nav-detail'
  export default {
    name: "leftBanner",
    components: {
      categoryNavDetail
    },
    data() {
      return {
        isShowDetail: false,
        current: 0,
        categoryList: [
          { id: 1, url: require('./img/food.png'), name: '美食', },
          { id: 2, url: require('./img/order.png'), name: '外卖', },
          { id: 3, url: require('./img/hotel.png'), name: '酒店', },
          { id: 4, url: require('./img/minsu.png'), name: '榛果民宿', },
          { id: 5, url: require('./img/mao.png'), name: '猫眼电影', },
          { id: 6, url: require('./img/plane.png'), name: '机票 / 火车票', },
          { id: 7, url: require('./img/sing.png'), name: '休闲娱乐 / KTV', },
          { id: 8, url: require('./img/home.png'), name: '生活服务', },
          { id: 9, url: require('./img/women.png'), name: '丽人 / 美发 / 医学美容', },
          { id: 10, url: require('./img/diamond.png'), name: '结婚 / 婚纱摄影 / 婚宴', },
          { id: 11, url: require('./img/baby.png'), name: '亲子 / 儿童乐园 / 幼教', },
          { id: 12, url: require('./img/yaling.png'), name: '运动健身 / 健身中心', },
          { id: 13, url: require('./img/paint.png'), name: '家装 / 建材 / 家居', },
          { id: 14, url: require('./img/book.png'), name: '学习培训 / 音乐培训', },
          { id: 15, url: require('./img/medicine.png'), name: '医疗健康 / 宠物 / 爱车', },
          { id: 16, url: require('./img/wine.png'), name: '酒吧 / 密室逃脱', }
        ]
      }
    },
    methods: {
      handleOnMouseOver(index) {
        // let detailDom = this.refs['categoryDetail']
        this.isShowDetail = true
        this.current = index

      },
      handleOnMouseOut() {
        this.current = null
        this.isShowDetail = false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .left-banner
    float left
    .category-nav-container
      position relative
      margin-top -50px
      box-sizing border-box
      width 230px
      height 479px
      text-align center
      color #fff
      background #13D1BE
      .category-nav-title-wrapper
        padding-left 10px
        width 100%
        height 50px
        line-height 50px
        text-align left
      .category-nav-content-wrapper
        ul
          padding 10px 0 8px
          height 425px
          box-sizing border-box
          text-align left
          li
            display block
            position: relative
            box-sizing: border-box
            padding: 2px 12px
            height: 26px
            list-style-type none
            img
              width: 18px;
              height: 18px
              line-height 18px
            span
              margin-left 12px
              line-height: 20px;
              height: 20px;
              color: #fff;
              font-size: 13px;
              cursor: pointer;
            &:hover {

            }
</style>
