<template>
  <div class="side fr">
    <div class="side-sponsor">
      <img src="../../assets/2.jpg">
    </div>
    <div class="channel-item channel-top10">
      <h3>悦读频道 TOP10</h3>
      <ul class="channel-list">
        <li>
          <a href="/article/618/">越努力，越幸运</a>
          <div>
            <span>文：卢思浩</span>
            <span>主播：迁延</span>
          </div>
        </li>
        <li>
          <a href="/article/501/">你若安好便是晴天（完结）</a>
          <div>
            <span>文：白落梅</span>
            <span>主播：雲襲</span>
          </div>
        </li>
        <li>
          <a href="/article/410/">我想喜欢你，如此而已</a>
          <div>
            <span>文：没头脑也很高兴</span>
            <span>主播：不系之舟</span>
          </div>
        </li>
        <li>
          <a href="/article/393/">也许，我们再也遇不到自己想象中的那个人了</a>
          <div>
            <span>文：安妮宝贝</span>
            <span>主播：不系之舟</span>
          </div>
        </li>
        <li>
          <a href="/article/587/">我希望有个如你一般的人</a>
          <div>
            <span>文：张嘉佳</span>
            <span>主播：墨菲</span>
          </div>
        </li>
        <li>
          <a href="/article/504/">假如还有来生</a>
          <div>
            <span>文：三毛</span>
            <span>主播：雲襲</span>
          </div>
        </li>
        <li>
          <a href="/article/502/">最美的徒劳无功</a>
          <div>
            <span>文：九把刀</span>
            <span>主播：雲襲</span>
          </div>
        </li>
        <li>
          <a href="/article/606/">最怕的是你永远也忘不掉</a>
          <div>
            <span>文：顾明烟</span>
            <span>主播：丢丢</span>
          </div>
        </li>
        <li>
          <a href="/article/611/">致前任男友&amp;未来丈夫的信</a>
          <div>
            <span>文：暖小团</span>
            <span>主播：左小乐</span>
          </div>
        </li>
        <li>
          <a href="/article/459/">我们为什么没能好好在一起</a>
          <div>
            <span>文：作业本</span>
            <span>主播：文涛</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="side-sponsor">
      <div class="fmad">
        <a href="http://s.click.taobao.com/t?e=m%3D2%26s%3DyHRDKxR3igocQipKwQzePOeEDrYVVa64LKpWJ%2Bin0XJRAdhuF14FMVmxRNzrNQ5Alovu%2FCElQOvnxPNXeK26xLSf9EO3dNK91sxKHvO8zFmyNUYYdjx8hKQ749p9gQcvOCvtVY2LGRBE9mVcoxiXF8YOae24fhW0&amp;pvid=50_119.123.183.3_333_1463315742694" target="_blank"><img src="http://qingwenyi.com/smedia/upload/1528.jpg" width="360px" height="236px"></a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'rightSideBar',
  created() {

  },
  data() {
    return {
      levelList: null
    }
  },
  methods: {

  },
  watch: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.related-item, .channel-item {padding:30px; background:#FFF; margin-bottom:30px; overflow:hidden;text-align: left;}
.related-item h3, .channel-item h3, .my-list h3 {font-size:14px; border-left:3px solid #ee5044; padding-left:8px; line-height:16px;}
.related-item h3 span {font-size:18px;}
.related-item h3 span a {display:inline-block; width:20px; text-align:center;}
.related-item h3 span a:hover {background:#F9F9F9;}
.channel-item h3 span {font-size:12px; font-weight:normal;}
.scroll-prev.none, .scroll-next.none {color:#CCC;}
.scroll-prev.none:hover, .scroll-next.none:hover {background:transparent; cursor:default;}
.related-list li {padding-top:30px; width:135px; margin-right:30px; float:left;}
.related-list li a {display:block;}
.related-list li img {width:100%; display:block;}
.related-list li span {display:block; width:100%; padding-top:10px; line-height:14px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}

.channel-top10 li {border-bottom:1px solid #EEE; list-style:decimal; margin-left:20px;}
.channel-list {padding-top:30px;}
.channel-list li {padding-bottom:10px; border-bottom:1px dashed #EEE; margin-bottom:10px; line-height:20px;}
.channel-list li div {color:#999;}
.channel-list li div span {margin-right:20px;}
.channel-list li:last-child {border:none; padding:0; margin-bottom:0;}
</style>
