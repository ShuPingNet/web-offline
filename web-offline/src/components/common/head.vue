<template class="home-template">
  <div id="hd">
    <div class="hd-wp row">
      <div class="logo fl">
        <a href="/">
          <span class="mlogo fl row">
            <span class="logo-a fl"></span>
            <span class="logo-b fl"></span>
            <span class="logo-c fl"></span>
          </span>书评网</a>
      </div>
      <div class="mine fr">
        <div class="login">
          <a href="javascript:;" data-pop="login" @click="showLogin()">登录</a>
          <a href="javascript:;" data-pop="register"  @click="showRegister()">注册</a>
        </div>
      </div>
      <div class="search fr row">
        <form method="POST" target="_blank" action="/search/">
          <input type="hidden" name="_xsrf" value="2|4d917f89|e3fb7eeff65f3506522f29dcd8a1fdba|1508207714">
          <input type="text" class="key fl" name="searchStr">
          <button type="submit" class="sbtn fr">
            <i class="el-icon-search"></i>
          </button>
        </form>
      </div>
      <div class="menu">
        <a href="/channel/1/" target="_blank"  class="cur">短评</a>
        <a href="/channel/2/" target="_blank">读书</a>
        <a href="/channel/3/" target="_blank">精选</a>
        <a href="/mooddetail" target="_blank">心情</a>
        <a href="/channel/5/" target="_blank">我的</a>
      </div>
      <!-- 弹出登录和注册框 -->
      <div class="pop" id="login" v-show="isShowLogin">
        <div class="pop-wp">
          <a href="#" rel="nofollow" title="关闭" class="pop-close" @click="closeLogin">×</a>
          <div class="pop-title">登录</div>
          <form id="loginForm" method="post" action="/auth/signin" novalidate="novalidate">
            <input type="hidden" name="_xsrf" value="2|c9550d59|673f0c3f729b47d6d6eb5b0c5c658f6a|1508207714">
            <div class="account-form">
              <input type="text" name="email" class="account-input" placeholder="邮箱">
              <div id="error_tip_email" class="error-tip"></div>
              <div class="account-line"></div>
              <input type="password" name="lpassword" class="account-input" placeholder="密码">
              <div id="error_tip_lpassword" class="error-tip"></div>
            </div>
            <div class="account-other">
              <span class="fr">
                <a href="/retrieve/" class="red-link" target="_blank">忘记密码</a>
              </span>
              <label><input type="checkbox" value="1" name="nextauto"> 下次自动登录</label>
            </div>
            <button type="submit" class="account-btn">登 录</button>
          </form>
        </div>
      </div>
      <div class="pop" id="register" v-show="isShowRegister">
        <div class="pop-wp" style="left: 50%; right: auto;">
            <a href="#" rel="nofollow" title="关闭" class="pop-close" @click="closeRegister">×</a>
            <div class="pop-title">注册</div>
            <form id="registerForm" method="post" action="/auth/signup" novalidate="novalidate">
            <input type="hidden" name="_xsrf" value="2|c9550d59|673f0c3f729b47d6d6eb5b0c5c658f6a|1508207714">
                <div class="account-form">
                    <input type="text" name="rusername" class="account-input" placeholder="昵称">
                    <div id="error_tip_rusername" class="error-tip"></div>
                    <div class="account-line"></div>
                    <input type="text" name="remail" class="account-input" placeholder="邮箱">
                    <div id="error_tip_remail" class="error-tip"></div>
                    <div class="account-line"></div>
                    <input type="password" name="rpassword" id="rpassword" class="account-input" placeholder="密码">
                    <div id="error_tip_rpassword" class="error-tip"></div>
                    <div class="account-line"></div>
                    <input type="password" name="repassword" class="account-input" placeholder="确认密码">
                    <div id="error_tip_repassword" class="error-tip"></div>
                </div>
                <div class="account-other">
                    <label><input type="checkbox" name="angree" id="angree" value="1"> 我已认真阅读并同意悦读FM的<a href="/agreement/" class="red-link" target="_blank">《使用协议》</a></label>
                    <div id="error_tip_angree" class="error-tip"></div>
                </div>
                <button type="submit" class="account-btn">注册</button>
            </form>
        </div>
    </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'head',
  data() {
    return {
      isShowLogin: false,
      isShowRegister:false
    }
  },
  methods: {
    showLogin() {
      this.isShowLogin = !this.isShowLogin
    },
    closeLogin() {
      this.isShowLogin = !this.isShowLogin
    },
    showRegister(){
      this.isShowRegister = !this.isShowRegister
    },
    closeRegister(){
      this.isShowRegister = !this.isShowRegister
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hd {
  width: 100%;
  height: 100px;
  background: #FFF;
}

.hd-wp {
  padding: 38px 0;
  height: 30px;
}

.logo {
  width: 120px;
  line-height: 30px;
}

.logo a {
  display: block;
  width: 100%;
  height: 100%;
  font-size: 14px;
}

.logo a:hover {
  color: #F30;
}

.mlogo {
  width: 20px;
  height: 30px;
  display: block;
  margin-right: 15px;
}

.mlogo span {
  width: 4px;
  background: #ee5044;
  display: block;
  border-radius: 2px;
}

.logo-a {
  height: 18px;
  margin: 6px 4px 0 0;
}

.logo-b {
  height: 28px;
  margin: 0 4px 0 0;
}

.logo-c {
  height: 18px;
  margin: 6px 0 0 0;
}

.menu {
  margin: 0 300px 0 120px;
  text-align: center;
}

.menu a {
  display: inline-block;
  padding: 0 20px;
  line-height: 30px;
  font-size: 14px;
}

.menu a.cur {
  color: #F30;
}

.mine {
  border-left: 1px dotted #CCC;
  height: 20px;
  line-height: 20px;
  margin: 5px 0 5px 20px;
}

.login a {
  padding-left: 20px;
}

.loged {
  padding-left: 20px;
  position: relative;
}

.loged a {
  display: block;
  line-height: 20px;
}

.log-user {
  background-position: 0 -112px;
  background-color: #FFF;
  display: inline-block;
  width: 6px;
  height: 4px;
  vertical-align: 2px;
  margin-left: 5px;
}

.user-menu {
  position: absolute;
  top: 30px;
  right: 0;
  background: #FFF;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, .1);
  width: 75px;
  z-index: 2;
}

.user-menu:before {
  position: absolute;
  top: -8px;
  right: 15px;
  display: inline-block;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #F5F5F5;
  border-left: 8px solid transparent;
  content: '';
}

.user-menu:after {
  position: absolute;
  top: -7px;
  right: 16px;
  display: inline-block;
  border-right: 7px solid transparent;
  border-bottom: 7px solid #FFF;
  border-left: 7px solid transparent;
  content: '';
}

.user-menu a {
  display: block;
  line-height: 20px;
  padding: 3px 10px;
}

.user-menu a:hover {
  background: #F5F5F5;
}

.search {
  box-shadow: 1px 1px 1px rgba(0, 0, 0, .05);
  height: 20px;
  overflow: hidden;
  width: 150px;
  margin: 5px 0;
}

.key {
  border: none;
  border-radius: 0;
  background: transparent;
  width: 120px;
  height: 16px;
  line-height: 16px;
  padding: 2px 5px;
}

.sbtn {
  width: 20px;
  height: 20px;
  background-color: #FFF;
  cursor: pointer;
  color: #999;
}

.sbtn:hover {
  color: #666;
}

.pop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
  z-index: 999;
}

.pop-wp {
  background: #FFF;
  padding: 30px 50px 50px;
  width: 280px;
  position: absolute;
  top: 120px;
  left: 50%;
  margin-left: -190px;
}

.pop-title {
  font-size: 24px;
  margin-bottom: 20px;
  line-height: 24px;
}

.pop-tip {
  line-height: 24px;
}

.pop-close {
  position: absolute;
  top: -15px;
  right: -15px;
  width: 30px;
  line-height: 30px;
  text-align: center;
  background: #444;
  color: #CCC;
  font-size: 24px;
  border-radius: 50%;
}

.pop-close:hover {
  background: #000;
  color: #FFF;
}

.account-form {
  border: 1px solid #dcdcdc;
  padding: 0 15px;
}

.account-input {
  height: 20px;
  width: 100%;
  display: block;
  margin: 10px 0;
}

.account-line {
  width: 100%;
  height: 1px;
  background: #dcdcdc;
  overflow: hidden;
}

.account-other {
  padding: 15px 5px;
}

.account-other .error-tip .error {
  top: 5px!important;
  left: 12px!important;
}

.account-btn {
  width: 100%;
  height: 45px;
  background: #eb4235;
  color: #FFF;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
}

.account-btn:hover {
  background: #d1271a;
}

.error-tip {
  position: relative;
}

.error-tip span {
  position: absolute;
  top: -5px;
  left: 0;
  padding: 2px 8px;
  background: rgba(238, 80, 68, .8);
  color: #FFF;
  border-radius: 3px;
  display: block;
}

.error-tip span:before {
  position: absolute;
  top: -5px;
  left: 8px;
  display: inline-block;
  border-right: 5px solid transparent;
  border-bottom: 5px solid rgba(238, 80, 69, .8);
  border-left: 5px solid transparent;
  content: '';
}

.reg-success h3 {
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 15px;
}

.reg-success p {
  line-height: 22px;
}

.resend {
  display: inline-block;
  vertical-align: 0px;
  border: 0;
  border-radius: 0;
  background: #FFF;
  color: #ee5044;
  cursor: pointer;
}

.resend:hover {
  color: #d7382c;
}
</style>
