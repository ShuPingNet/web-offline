<template>
  <div class="sideBar col-xs-12">
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-submenu index="1" style="margin-left:20%">
        <template slot="title" >全部图书分类</template>
        <el-menu-item index="1-1">计算机图书</el-menu-item>
        <el-menu-item index="1-2">工业技术图书</el-menu-item>
        <el-menu-item index="1-3">数理化图书</el-menu-item>
        <el-menu-item index="1-3">经济管理图书</el-menu-item>
        <el-menu-item index="1-3">人文社科图书</el-menu-item>
        <el-menu-item index="1-3">考试图书</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <a href="https://www.ele.me" target="_blank">首页</a>
      </el-menu-item>
      <el-menu-item index="3">
        <a href="https://www.ele.me" target="_blank">个人中心</a>
      </el-menu-item>
      <el-menu-item index="4">
        <a href="https://www.ele.me" target="_blank">书评社区</a>
      </el-menu-item>
      <el-menu-item index="5">
        <a href="https://www.ele.me" target="_blank">联系我们</a>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>

export default {
  name: 'sideBar',
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClick: function(key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
}

.el-menu {
  background-color: #fff;
}
.sideBar{
  margin-bottom: 35px;
}
</style>
