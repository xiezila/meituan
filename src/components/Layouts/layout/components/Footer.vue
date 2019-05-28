<template>
  <div class="footer-wrapper">
    <div class="footer-link">
      <div class="footer-column">
        <span>用户帮助</span>
      </div>
      <div class="footer-column"></div>
      <div class="footer-column"></div>
      <div class="footer-column"></div>
    </div>
    <div class="footer-copyright">
      <div class="footer-copyright-left">
        <p>©美团网团购 meituan.com京ICP证070791号京ICP备10211739号</p>
        <p>广播电视节目制作经营许可证（京）字第03889号</p>
        <p>食品经营许可证互联网药品信息服务资格证</p>
        <p>医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号</p>
      </div>
      <div class="footer-copyright-right">
        <span>京公网安备11010502025545号</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="stylus" scoped>
.footer-wrapper
  width 1190px
  margin 40px auto
  border-top 1px solid #E5E5E5
  border-bottom 1px solid #E5E5E5
  .footer-copyright
    color: #999;
    padding-left: 20px;
    padding-top: 15px;
    padding-bottom: 30px;
    .footer-copyright-left
      text-align left
      font-size 12px
    .footer-copyright-right
      span
        display inline-block
        text-align right
</style>
