<template class="home-template">
  <div id="ft">
    <div class="fr ft-follow">
      <div>
        <span><img src="../../assets/juanzhu.jpg" alt="捐助我们 - 书评网"></span>捐</div>
      <div>
        <span><img src="../../assets/juanzhu.jpg" alt="微信扫码 - 书评网"></span>
        <i class="el-icon-message"></i>
      </div>
      <div>
        <a href="http://weibo.com/120101228" target="_blank">
         <i class="el-icon-menu"></i>
        </a>
      </div>
    </div>
    <div class="ft-links">
      <a href="/about/" target="_blank">关于我们</a> &nbsp;|&nbsp;
      <a href="/join/" target="_blank">加入我们</a>
    </div>
    <div class="ft-cr">© 2010-2016 Yuedu.fm All rights reserved &nbsp; 粤ICP备14076392号</div>
  </div>
</template>

<script>

export default {
  name: 'footer',
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#ft {padding-bottom:40px; color:#AAA;text-align: left;}
.ft-links {padding-bottom:8px;}
.ft-follow {}
.ft-follow div {width:40px; height:40px; line-height:40px; text-align:center; position:relative; border-radius:50%; background:#DDD; font-size:20px; display:inline-block; margin-left:10px; color:#707070;}
.ft-follow div a {display:block;}
.ft-follow div:hover span {display:block;}
.ft-follow span {width:142px; height:142px; display:none; position:absolute; left:50%; margin-left:-71px; bottom:50px;}
.ft-follow span img {width:100%;}
</style>
