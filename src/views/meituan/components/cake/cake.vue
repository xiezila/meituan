<template>
  <div class="cake-wrapper">
    <div class="cake-header">
      <span>有格调</span>
      <ul>
        <li>全部</li>
      </ul>
    </div>
    <div class="cake-content">
      <div class="item" v-for="item in cakeList" :key="item.id" style="display: inline-block">
        <img :src="item.url" width="369px" height="208px" />
        <div class="poi-info">
          <div class="title">{{item.title}}</div>
          <div class="sub-title">{{item.sub_title}}</div>
          <div class="price-info">
            <span class="current-price-wrapper">
              <span class="price-symbol">¥</span>
              <span class="current-price">{{item.current_price}}</span>
            </span>
            <!--<span class="current-price">{{}}</span>-->
            <!--<span class="current-price">{{}}</span>-->
            <!--<span class="current-price">{{}}</span>-->
            <!--<span class="current-price">{{}}</span>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // const img = require('./img/cake-1.jpg')
import * as sceneApi from '@/api/sceneList'
export default {
  name: "cake",
  data() {
    return {
      cakeList: [
        { url: require('./img/cake-1.jpg'), id: '1', title: '艾尚起士林西饼店（二店）', sub_title: '水果蛋糕1个，约10厘米，圆形', current_price: '14',  },
        { url: require('./img/cake-2.jpg'), id: '2', title: '好再来西饼屋', sub_title: '十英寸蛋糕1个，约10英寸，圆形', current_price: '90' },
        { url: require('./img/cake-3.jpg'), id: '3', title: '福隆铁板烧', sub_title: '单人超值自助', current_price: '158' },
        { url: require('./img/cake-4.jpg'), id: '4', title: '榴芒e族', sub_title: '鲜果乳脂蛋糕1个，约8英寸，圆形', current_price: '78'  },
        { url: require('./img/cake-5.jpg'), id: '5', title: '福朋喜来登酒店宜客乐西餐厅', sub_title: '自助晚餐', current_price: '118'  },
        { url: require('./img/cake-6.jpg'), id: '6', title: '上行西餐厅', sub_title: '披萨沙拉套餐，建议1-2人使用', current_price: '36'  }
      ]
    }
  },
  created() {
    // this.getcakeList('cheap', 'food', 426, 20)
  },
  methods: {
    getcakeList() {
      sceneApi.getScene().then(res => {
        console.log('rs', res)
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cake-wrapper
    width 1190px
    margin 40px auto
    .cake-header
      width 100%
      height 44px
      box-sizing border-box
      line-height 44px
      padding-left 10px
      /*font-size 14px*/
      text-align left
      color: #fff
      background-color: rgb(190, 164, 116);
      background-image: linear-gradient(to right, rgb(194, 176, 142) 3%, rgb(190, 164, 116) 100%);
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      ul
        display inline-block
        li
          list-style none
          font-size 14px
    .cake-content
      height 650px
      padding 20px 10px
      box-sizing border-box
      border 1px solid #ccc
      border-top none
      border-bottom-left-radius: 5px
      border-bottom-right-radius: 5px
      .item
        width 389px
        height 314px
        .poi-info
          margin-top 10px
          text-align left
          .sub-title
            color #999
            font-size 12px
          .price-info
            color: #BE9E4D
            font-size 22px
</style>
