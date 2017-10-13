<template>
  <div class = "head">
        <div class = "logo">
          <img src="../../assets/logo.png" style="width:40px;height:40px;">
          <span class="titleDes">测试管理平台</span>
        </div>
        <div class="elMenu">
          <el-menu theme="dark" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-submenu index="1">
                <template slot="title">退出登录</template>
                <el-menu-item index="1-1">Help</el-menu-item>
                <el-menu-item index="1-2">Login out</el-menu-item>
              </el-submenu>
          </el-menu>
        </div>
  </div>
</template>

<script>

export default {
  name: 'head',
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo{
    position: absolute;
    top: 10px;
    left: 30px;
    z-index: 99999999;
  }
</style>
