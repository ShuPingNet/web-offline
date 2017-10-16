<template>
  <div id="app">
      <Head></Head>
      <NavBar></NavBar>
      <div class="content">
         <router-view></router-view>
      </div>
  </div>
</template>

<script>
import Head from './components/common/head'
import NavBar from './components/common/sideBar'
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
    NavBar,
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
body, html {
    color: #505050;
    line-height: 1.75em;
    background: #ebebeb;
    position: relative;
    font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","WenQuanYi Micro Hei","Microsoft YaHei UI","Microsoft YaHei",sans-serif;
}
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

</style>
