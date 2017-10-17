<template>
  <div id="app">
    <Head></Head>
    <NavBar></NavBar>
    <section class="content-wrap">
      <div class="container">
        <div class="row">
          <content></content>
          <rightBar></rightBar>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Head from './components/common/head'
import NavBar from './components/common/sideBar'
import rightBar from './components/common/breadCrumb'
import content from './components/common/content'
export default {
  name: 'app',
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }

  },
  components: {
    Head,
    NavBar,
    rightBar,
    content
  }

}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  height: 100%;
  width: 100%;
}

body,
html {
  color: #505050;
  line-height: 1.75em;
  background: #ebebeb;
  position: relative;
  font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "WenQuanYi Micro Hei", "Microsoft YaHei UI", "Microsoft YaHei", sans-serif;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
}
.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.row {
    margin-right: -15px;
    margin-left: -15px;
}
.col-md-8{
  float: left;
}
.col-md-4{
  float: right;
}
</style>
