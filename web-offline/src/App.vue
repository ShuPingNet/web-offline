<template>
  <div id="app">
      <Head></Head>
      <SideBar></SideBar>
      <div class="content">
         <BreadCrumb></BreadCrumb>
         <router-view></router-view>
      </div>
  </div>
</template>

<script>
import Head from './components/common/head'
import SideBar from './components/common/sideBar'
import BreadCrumb from './components/common/breadCrumb'

export default {
  name: 'app',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }

  },
  components: {
    Head,
    SideBar,
    BreadCrumb
  }

}
</script>

<style>
body{
  margin:0px;
  padding:0px;
  height: 100%;
  width: 100%;
}
html,body,#app {height: 100%;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0px;
  padding:0px;
  width: 100%;
  height: 100%;
}
.el-menu--horizontal .el-submenu{
    float: right
  }
  .el-menu--horizontal .el-submenu>.el-menu{
    border:0px;
  }
  .el-submenu .el-menu-item{
      min-width:0px;
  }
  .titleDes{
    color: #fff;
    font-size: 20px;
    float: right;
    margin: 10px;
  }
  .content{
    height: 100%;
    width: calc(100% - 170px);
    float: right;
  }
</style>
