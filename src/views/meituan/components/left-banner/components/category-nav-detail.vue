<template>
  <div class="category-nav-detail-wrapper" ref="categoryDetail">
    <div class="detail-area" v-for="(item, idx) in detailList[index].options">
      <div class="detail-title-wrapper">
        {{item.name}}
        <span class="title-right">更多></span>
      </div>
      <hr style="color: #ccc; margin-bottom: 10px" />
      <span class="detail-content" v-for="(itemDetail, idxDetail) in detailList[index].options[idx].detail" :key="idxDetail">
        {{itemDetail}}
      </span>
    </div>
  </div>
</template>

<script>
  const data = require('../json/detail.js')
  export default {
    name: "category-nav-detail",
    props: {
      index: Number,
      default: false
    },
    data(){
      return {
        detailList: []
      }
    },
    created(){
      this.detailList = data.detailList
    },
    mounted() {
      console.log('name', this.detailList[0].options[0].name)
      console.log('detailList', this.detailList)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/sdetailListtylus" scoped>
  .category-nav-detail-wrapper
    position absolute
    top 60px
    left 230px
    z-index 10
    width 450px
    height 419px
    color #666
    background #fff
    .detail-area
      padding 21px 30px
      text-align left
      .detail-title-wrapper
        margin-bottom 5px
        font-weight 550
        .title-right
          float right
          font-size 12px
          color #ccc
      .detail-content
        margin-top 10px
        padding-right 16px
        color #ccc
        font-size 12px
</style>
