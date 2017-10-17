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
          <a href="javascript:;" data-pop="login">登录</a>
          <a href="javascript:;" data-pop="register">注册</a>
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
        <a href="/channel/1/" target="_blank" class="cur">悦读</a>
        <a href="/channel/2/" target="_blank">情感</a>
        <a href="/channel/3/" target="_blank">连播</a>
        <a href="/channel/4/" target="_blank">校园</a>
        <a href="/channel/5/" target="_blank">音乐</a>
        <a href="/channel/6/" target="_blank">Labs</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'head',
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hd {width:100%; height:100px; background:#FFF;}
.hd-wp {padding:38px 0; height:30px;}
.logo {width:120px; line-height:30px;}
.logo a {display:block; width:100%; height:100%; font-size:14px;}
.logo a:hover {color:#F30;}
.mlogo {width:20px; height:30px; display:block; margin-right:15px;}
.mlogo span {width:4px; background:#ee5044; display:block; border-radius:2px;}
.logo-a {height:18px; margin:6px 4px 0 0;}
.logo-b {height:28px; margin:0 4px 0 0;}
.logo-c {height:18px; margin:6px 0 0 0;}
.menu {margin:0 300px 0 120px; text-align:center;}
.menu a {display:inline-block; padding:0 20px; line-height:30px; font-size:14px;}
.menu a.cur {color:#F30;}
.mine {border-left:1px dotted #CCC; height:20px; line-height:20px; margin:5px 0 5px 20px;}
.login a {padding-left:20px;}
.loged {padding-left:20px; position:relative;}
.loged a {display:block; line-height:20px;}
.log-user {background-position:0 -112px; background-color:#FFF; display:inline-block; width:6px; height:4px; vertical-align:2px; margin-left:5px;}
.user-menu {position:absolute; top:30px; right:0; background:#FFF; box-shadow:1px 1px 3px rgba(0,0,0,.1); width:75px; z-index:2;}
.user-menu:before {position:absolute; top:-8px; right:15px; display:inline-block; border-right:8px solid transparent; border-bottom:8px solid #F5F5F5; border-left:8px solid transparent; content:'';}
.user-menu:after {position:absolute; top:-7px; right:16px; display:inline-block; border-right:7px solid transparent; border-bottom:7px solid #FFF; border-left:7px solid transparent; content:'';}
.user-menu a {display:block; line-height:20px; padding:3px 10px;}
.user-menu a:hover {background:#F5F5F5;}
.search {box-shadow:1px 1px 1px rgba(0,0,0,.05); height:20px; overflow:hidden; width:150px; margin:5px 0;}
.key {border:none; border-radius:0; background:transparent; width:120px; height:16px; line-height:16px; padding:2px 5px;}
.sbtn {width:20px; height:20px; background-color:#FFF; cursor:pointer; color:#999;}
.sbtn:hover {color:#666;}
</style>
