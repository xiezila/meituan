<template>
  <div class="meituan">
    <div class="page">
      <div class="page-container">
        <div class="banner-container clearfix">
          <left-banner></left-banner>
          <div class="right-container">
            <div class="title-links">
              <router-link to="/waimai"><a class="tab-link">美团外卖</a></router-link>
              <router-link to="/maoyan"><a class="tab-link">猫眼电影</a></router-link>
              <router-link to="/hotel"><a class="tab-link">美团酒店</a></router-link>
              <router-link to="/phoenix"><a class="tab-link">民宿／公寓</a></router-link>
              <router-link to="/bizvisualmeishi"><a class="tab-link">商家入驻</a></router-link>
              <router-link to="/gongyi"><a class="tab-link">美团公益</a></router-link>
            </div>
            <div class="banner-row clearfix">
              <swiper class="banner-row-slide" :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide><img src="./img/banner/banner-1.jpg" width="100%" alt="slide 1"></swiper-slide>
                <swiper-slide><img src="./img/banner/banner-2.jpg" width="100%" alt="slide 2"></swiper-slide>
                <swiper-slide><img src="./img/banner/banner-3.jpg" width="100%" alt="slide 3"></swiper-slide>
                <swiper-slide><img src="./img/banner/banner-4.jpg" width="100%" alt="slide 4"></swiper-slide>
                <swiper-slide><img src="./img/banner/banner-5.png" width="100%" alt="slide 5"></swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
              </swiper>
              <div class="banner-banner-item" />
              <div class="download-app">
                <img src="./img/banner/app.png" alt="app">
                <p>美团APP手机版</p>
                <p>1元起吃喝玩乐</p>
              </div>
            </div>
            <div class="banner-row clearfix">
              <div class="banner-row-item item1"></div>
              <div class="banner-row-item item2"></div>
              <div class="banner-row-item item3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <cake></cake>
    <guide></guide>
  </div>
</template>

<script>
  import leftBanner from './components/left-banner/leftBanner'
  import cake from './components/cake/cake'
  import guide from './components/guide/guide'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  require('swiper/dist/css/swiper.css')
  export default {
    name: "meituan",
    components: {
      leftBanner,
      cake,
      guide,
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          notNextTick: true,
          //循环
          loop:true,
          //设定初始化时slide的索引
          initialSlide:0,
          //自动播放
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          //滑动速度
          speed:800,
          //滑动方向
          direction : 'horizontal',
          //小手掌抓取滑动
          grabCursor : true,
          //滑动之后回调函数
          on: {
            slideChangeTransitionEnd: function(){
              // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
            },
          },
          //左右点击
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          //分页器设置
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
            type: 'custom',
            //自定义分页器样式
            renderCustom: function (swiper, current, total) {
              const activeColor = '#168fed'
              const normalColor = '#aeaeae'
              let color = ''
              let paginationStyle = ''
              let html = ''
              for (let i = 1; i <= total; i++) {
                if (i === current) {
                  color = activeColor
                } else {
                  color = normalColor
                }
                paginationStyle = `background:${color};opacity:1;margin-right:20px;width:20px;height:5px;transform:skew(15deg);border-radius:0;`
                html += `<span class="swiper-pagination-bullet" style=${paginationStyle}></span>`
              }
              return html
            }
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
    },
    methods: {
      //
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.clearfix:after
  visibility hidden
  display block
  font-size 0
  content " "
  clear both
  height 0
.page
  width 100%
.page-container
  width 1190px
  margin 0 auto
  .banner-container
    width 1190px
    margin 0 auto
    .right-container
      position relative
      float left
      width 950px
      height 417px
      .title-links//Todo
        position: absolute;
        top: -35px;
        left: 30px
        .tab-link
          margin 0 20px
          color: #222;
          font-weight: 700;
          font-size: 16px;
          text-decoration: none
      .banner-row
        margin-left 10px
        margin-top 10px
        .banner-row-slide
          float left
          width 615px
          height 240px
        .banner-banner-item
          display inline-block
          width 148px
          height 240px
          background-image url("./img/banner/banner-item.jpg")
          background-size: 148px;
          background-position: 50%;
          background-repeat: no-repeat;
        .download-app
          display inline-block
          float right
          margin-right 7px
          width 148px
          height 238px
          background-color: #fff;
          border: 1px solid #e5e5e5;
        .banner-row-item
          display inline-block
          margin-right 10px
          width 300px
          height 165px
        .item1
          background-image url("./img/banner/item-1.png")
          background-size: 300px;
          background-position: 50%;
          background-repeat: no-repeat;
        .item2
          background-image url("./img/banner/item-2.jpg")
          background-size: 300px;
          background-position: 50%;
          background-repeat: no-repeat;
        .item3
          background-image url("./img/banner/item-3.jpg")
          background-size: 300px;
          background-position: 50%;
          background-repeat: no-repeat;
</style>
