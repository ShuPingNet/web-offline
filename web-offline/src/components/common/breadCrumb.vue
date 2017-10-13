<template>
  <div class="breadCrumb">
    <el-breadcrumb class="levelBar" separator="/">
      <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
        <span v-if='item.redirect === "noredirect" || index == levelList.length-1' class="no-redirect">{{item.name}}</span>
        <router-link v-else :to="item.redirect || item.path">{{item.name}}</router-link>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
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
</style>
