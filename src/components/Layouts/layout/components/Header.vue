<template>
  <div class="com-header">
    <div class="header-bar">
      <div class="header-content clearfix">
        <div class="header-bar-position">
          <img src="../../../../assets/location.png" alt="location" />
          <span>北京</span>
          <router-link to="/meituan/changecity" class="header-bar-change-city">切换城市</router-link>
        </div>
        <div class="header-bar-nav">
          <ul>
            <li>
              <a href="#">网站导航</a></li>
            <li class="has-child">
              <a href="#">商家中心</a>
              <ul>
                <li><a href="#">登录商家中心</a></li>
                <li><a href="#">美团智能收银</a></li>
                <li><a href="#">我想合作</a></li>
                <li><a href="#">手机免费开店</a></li>
                <li><a href="#">登录商家中心</a></li>
                <li><a href="#">登录商家中心</a></li>
                <li><a href="#">登录商家中心</a></li>
              </ul>
            </li>
            <li>
              <a href="#">手机APP</a>
            </li>
            <li class="has-child">
              <a href="#">我的美团</a>
              <ul class="header-nav-my header-nav-second">
                <li><a href="#">我的订单</a></li>
                <li><a href="#">我的收藏</a></li>
                <li><a href="#">抵用券</a></li>
                <li><a href="#">账户设置</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header-content clearfix">
      <div class="header-title">
        <router-link to="/meituan"><img src="../../../../assets/logo.png" alt="美团" /></router-link>
      </div>
      <div class="header-search">
        <div class="header-search-block">
          <input type="text" placeholder="搜索商家或地点" />
          <button class="header-search-btn"><img src="../../../../assets/search.png" alt="搜索"></button>
        </div>
        <div class="header-search-suggest" style="display:none">
          <h6>热门搜索</h6>
        </div>
        <div class="header-search-hot">
          <span>故宫博物院</span>
          <span>北京欢乐谷</span>
          <span>北京世界园艺博览会</span>
          <span>北京海洋馆</span>
          <span>北京野生动物园</span>
          <span>故宫珍宝馆</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="stylus" scoped>
.clearfix:after
  visibility hidden
  display block
  font-size 0
  content " "
  clear both
  height 0
.header-content
  width 1190px
  margin 0 auto
  padding-bottom 35px
.com-header
  a
    color #999
    text-decoration none
    /*display block*/
  a:hover
    background #fff
    cursor pointer
    color #31BBAC
.com-header
  background #fff
  box-shadow 0 2px 27px 0 rgba(0,0,0,.1)
  .header-bar
    width 100%
    height 40px
    background #F8F8F8
    color #999
    line-height 40px
    font-size 12px
    .header-bar-position
      float left
      img
        width 16px
        height 16px
      .header-bar-change-city
        margin 0 4px
        padding 0 2px
        width 54px
        height 16px
        box-sizing border-box
        border 1px solid #E5E5E5
        border-radius 2px
        background #F4F4F4

    .header-bar-nav
      li
        float right
        width 80px
        height 40px
        /*display inline-block*/
        list-style none
        ul
          display none
      li:hover ul
        display block


        /*.header-nav-my
          background red
          width 100%*/
        /*.header-nav-second
          position: absolute;
          border: 1px solid #E5E5E5;
          background: #fff;
          text-align: center;
          z-index: 1000;
          right: -1px;
          top: 9.5%;
          box-shadow: 0 3px 5px 0 rgba(0,0,0,.1);
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          box-sizing: content-box;*/
  .header-title
    float left
    padding-top 28px
    padding-right 60px
    padding-bottom 40px
    font-size 16px
    min-width 220px
    height 54px
    box-sizing content-box
    img
      width 126px
      height 46px
      vertical-align initial
  .header-search
    padding-top 28px
    float left
    position relative
    .header-search-block
      width 550px
      height 40px
      background #fff
      border 1px solid #13D1BE
      border-radius 4px
      input
        display inline-block !important
        width 84%
        height 100%
        line-height 100%
        padding 10px
        border none
        box-sizing border-box
      .header-search-btn
        float right
        display inline-block !important
        width 16%
        height 100%
        line-height 100%
        background: #13D1BE;
        color: #fff;
        cursor: pointer
        border none
        box-sizing border-box
        border-bottom-left-radius 0
        border-top-left-radius 0
        img
          width 25px
          height 25px
    .header-search-hot
      text-align left
      padding-top 8px
      padding-left 12px
      color: #999
      font-size 12px
      span
        margin-right 10px
</style>
