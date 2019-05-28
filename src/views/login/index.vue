<template>
  <div class="login">
    <div class="logo">
      <img alt="logo" src="./img/logo.png" />
    </div>
    <div class="container">
      <div class="title-container">
        <span>DeepDefense容器安全监测平台</span>
      </div>
      <div class="login-form">
        <input id="name" @change="checkUsername" type="text" v-model="username" placeholder="请输入用户名" />
        <span class="msg">{{msgusername}}</span>
        <input id="pwd" @change="checkPassword" type="password" v-model="password" placeholder=" 请输入密码" />
        <span class="msg">{{msgpassword}}</span>
        <button class="btn"  @click="handleLogin">登  录</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        username: '999@qq.com',
        password: '123456',
        msgusername: '',
        msgpassword: ''
      }
    },
    watch: {
      username(val, oldVal) {
        this.checkUsername()
      },
      password(val, oldVal) {
        this.checkPassword()
      }
    },
    methods: {
      //校验用户姓名：邮箱
      checkUsername() {
        var patrn = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
        var name = document.getElementById("name").value
        if (this.username == '') {
          this.msgusername = '用户名不能为空'
        } else if (!patrn.exec(name)) {
          this.msgusername = '邮箱不合法'
        }
        else {
          this.msgusername = ''
        }
      },
      //校验密码：只能输入6-20个字母、数字、下划线
      checkPassword() {
        var patrn=/^(\w){6,20}$/
        var pwd = document.getElementById("pwd").value
        if (!this.password) {
          this.msgpassword = '密码不能为空'
        } else if (!patrn.exec(pwd)) {
          this.msgpassword = '只能输入6-20个字母、数字、下划线'
        } else {
          this.msgpassword = ''
        }
      },
      handleLogin() {
        if (!this.msgusername && !this.msgpassword){
          const account = this.username
          const secret = this.password
          const type = 100
          const loginInfo = {
            account,
            secret,
            type
          }
          console.log('user', loginInfo)
          this.$store.dispatch('Login', loginInfo).then(() => {
            this.$router.push({ path: '/assets' })
          }).catch(() => {
            console.log('catch')
          })
        } else {
          console.log('error submit!!!')
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.login
  min-height 100%
  width 100%
  top 0
  left 0
  right 0
  bottom 0
  position: fixed
  z-index -1
  background-size: cover
  background-repeat: no-repeat
  background-image url(./img/bg.jpg)
  padding 160px 35px 0
  .logo
    img
      width 132px
      height 54px
  .container
    position relative
    width 424px
    max-width 100%
    box-sizing: border-box
    border 1px solid #606266
    border-radius 10px
    background: rgba(26, 45, 64, 0.5)
    padding 38px 35px
    margin 35px auto
    .title-container
      color #fff
      margin-bottom 47px
      font-size 23px
      text-indent 7px
    .login-form
      /*text-align center*/
      input
        display block
        width 70%
        height 38px
        border-radius 6px
        padding 0 5px
        /*text-align center*/
        margin 0 auto 10px
      .msg
        display block
        color #ec4444
        font-size 12px
      .btn
        margin-top 44px
        width 36%
        background #00a1a3
        text-align center
        line-height 40px
        font-size 18px
        font-weight bold
        color #fff
        cursor pointer
        border-radius 5px
        -webkit-border-radius 5px
        -moz-border-radius 5px
</style>
