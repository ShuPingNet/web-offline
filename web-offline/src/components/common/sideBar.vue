<template>
  <div class="sideBar">
        <el-menu default-active="2" router  class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleClick">
          <el-submenu index="/testExample">
            <template slot="title"><i class="el-icon-message"></i>测试用例</template>
              <el-menu-item index="/serverApply">服务应用</el-menu-item>
              <el-menu-item index="/testResult">测试结果</el-menu-item>
          </el-submenu>
          <el-menu-item index="/testRequest" ><i class="el-icon-menu"></i>测试请求</el-menu-item>
          <el-menu-item index="/exampleAnalyse"><i class="el-icon-setting"></i>样例分析</el-menu-item>
        </el-menu>
  </div>
</template>

<script>

export default {
  name:'sideBar',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClick:function(key,keyPath){
       console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .sideBar{
    width:170px;
    height:100%;
    background:#eef1f6;
    float:left;
  }
</style>
