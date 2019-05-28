<template>
  <div>
    <div class="header-container">
      <img class="user-icon" @click="handleShowBox" src="@/components/icons/user.png" alt="用户某某">
      <!--<img class="arrow-bottom-icon" src="@/components/icons/arrow.png" alt="下拉菜单">-->
      <!--<ul class="drop-down-content">-->
        <!--<li><a >logout&nbsp;<img class="logout-icon" src="@/components/icons/logout.png" alt="登出"></a></li>-->
        <!--<li></li>-->
      <!--</ul>-->
    </div>
    <h3 class="content">Get user information!!!</h3>
    <button @click="handleGetUserInfo">点击</button>
    <table class="user-Info-table" border="1">
      <tr>
        <td>邮箱</td>
        <td colspan="2">{{userInfo.email}}</td>
      </tr>
      <tr>
        <td>昵称</td>
        <td colspan="2">{{userInfo.nickname}}</td>
      </tr>
      <tr>
        <td>具体信息</td>
        <td>{{userInfo.user_address}}</td>
      </tr>
      <!--<tr>-->
        <!--<td rowspan="3">具体信息</td>-->
        <!--<td>姓名</td>-->
        <!--<td>{{userInfo.user_address.name}}</td>-->
      <!--</tr>-->
      <!--<tr>-->
        <!--<td>手机</td>-->
        <!--<td>{{userInfo.user_address.mobile}}</td>-->
      <!--</tr>-->
      <!--<tr>-->
        <!--<td>地址</td>-->
        <!--<td>{{userInfo.user_address.province}}{{userInfo.user_address.city}}{{userInfo.user_address.country}}</td>-->
      <!--</tr>-->
    </table>
    <ul>
    <li><router-link to="/meituan">进入美团网</router-link></li>
    <li> <router-link to="/chart">进入chart</router-link></li>
    </ul>
    <div id="popLayer"></div>
    <div id="popBox">
      <h3>确定要离开当前页面吗?</h3>
      <button style="background: #7ca9f3; color: #fff" @click="handleLogout">确 定</button>
      <button @click="handleCloseBox">取 消</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        boxVisible: false,
        userInfo: {}
      }
    },
    methods: {
      /*点击弹出按钮*/
      handleShowBox() {
        var popBox = document.getElementById("popBox");
        var popLayer = document.getElementById("popLayer");
        popBox.style.display = "block";
        popLayer.style.display = "block"
      },
      /*点击关闭按钮*/
      handleCloseBox() {
        var popBox = document.getElementById("popBox");
        var popLayer = document.getElementById("popLayer");
        popBox.style.display = "none";
        popLayer.style.display = "none";
      },
      handleLogout() {
        this.$store.dispatch('FedLogOut').then(() => {
          this.$router.push({ path: '/login' })
        }).catch(() => {
          console.log('catch')
        })
      },
      handleGetUserInfo() {
        this.$store.dispatch('getInfo').then((res) => {
          console.log('11111111', res.data)
          this.userInfo = res.data
        }).catch(() => {
          console.log('catch')
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.header-container
  position fixed
  top 0
  right 0
  left 0
  background #ffb35d
  height 50px
  width 100%
  .user-icon
    width 30px
    height 30px
    position absolute
    top 22%
    right 4%
  .arrow-bottom-icon
    width 13px
    height 13px
    position absolute
    top 35%
    right 2%
  .logout-icon
    width 13px
    height 13px
.content
  margin-top 60px
.user-Info-table
  margin: 20px auto
  td
    padding 9px
/*背景层*/
#popLayer
  display none
  position fixed
  top 0
  left 0
  bottom 0
  right 0
  background rgba(105, 105, 105, .5)
/*弹出层*/
#popBox
  display none
  position absolute
  top 31%
  left 33%
  width 400px
  height 200px
  background #fff
  z-index 1
  border-radius 8px
  h3
    margin-top 40px
  button
    width 68px
    height 34px
    border-radius 6px
    margin 15px 5px
</style>
