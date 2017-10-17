<template>
  <aside class="col-md-4 sidebar">
    <div class="widget">
      <h4 class="title">社区</h4>
      <div class="content community">
        <p>QQ群：462694081</p>
        <p>
          <a href="http://wenda.golaravel.com/" title="Laravel中文网问答社区" target="_blank" onclick="_hmt.push(['_trackEvent', 'big-button', 'click', '问答社区'])">
            <i class="fa fa-comments"></i> 问答社区</a>
        </p>
      </div>
    </div>
    <div class="widget">
      <h4 class="title">下载</h4>
      <div class="content download">
        <a href="/download/" class="btn btn-default btn-block" onclick="_hmt.push(['_trackEvent', 'big-button', 'click', '下载 Laravel &amp; Lumen'])">Laravel &amp; Lumen 一键安装包下载</a>
      </div>
    </div>

  </aside>
</template>

<script>

export default {
  name: 'breadCrumb',
  created() {
    this.getBreadcrumb()
  },
  data() {
    return {
      levelList: null
    }
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name);
      const first = matched[0];//match为数组
      if (first && first.name !== '首页' || first.path !== '') {
        matched = [{ name: '首页', path: '/' }].concat(matched);
      }
      console.log(matched);
      this.levelList = matched;
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
}
.sidebar{
  margin-right: 10%;
}

.breadCrumb {
  display: inline-block;
  width: 100%;
  background: #f5f5f5;
  height: 30px;
}

.el-breadcrumb {
  line-height: 30px;
  margin-left: 10px;
}
.sidebar .widget {
    background: #fff;
    padding: 21px 30px;
}
.widget {
    margin-bottom: 35px;
}
.widget .title {
    margin-top: 0;
    padding-bottom: 7px;
    border-bottom: 1px solid #ebebeb;
    margin-bottom: 21px;
    position: relative;
}
.widget .title:after {
    content: "";
    width: 90px;
    height: 1px;
    background: #f4645f;
    position: absolute;
    left: 0;
    bottom: -1px;
}
</style>
