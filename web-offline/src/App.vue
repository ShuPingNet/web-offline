<template>
  <div id="app">
    <Head ></Head>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Head from "./components/common/head";
import NavBar from "./components/common/navBar";
import Footer from "./components/common/footer";

export default {
  name: "app",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: {
    Head,
    NavBar,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
font,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
dd,
dl,
dt,
li,
ol,
ul,
fieldset,
form,
input,
textarea,
button,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
}
img {
  border: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
q:before,
q:after,
blockquote:before,
blockquote:after {
  content: "";
}
ol,
ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: #707070;
}
a:hover {
  color: #ee5044;
}

a,
button,
.yd-player-tip {
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
::selection {
  background: #ee5044;
  color: #fff;
}
html,
body,
input,
textarea,
button {
  -webkit-font-smoothing: antialiased;
}
html,
body {
  width: 100%;
  height: 100%;
}
body {
  background: #f5f5f5;
  color: #707070;
  font: 12px/1.5 "Open Sans", Arial, "Hiragino Sans GB", "Microsoft YaHei",
    "å¾®è½¯é›…é»‘", "STHeiti", "WenQuanYi Micro Hei", SimSun, sans-serif;
  letter-spacing: 0.5px;
}
textarea {
  resize: none;
}
label {
  cursor: pointer;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.hd-wp,
#bd,
#ft,
.my-wp {
  width: 1010px;
  margin: auto;
}
.hide {
  display: none;
}
.mb40 {
  margin-bottom: 40px;
}
.f12 {
  font-size: 12px;
}
.f16 {
  font-size: 16px;
}
.red {
  color: #ee5044;
}
.gray {
  color: #999;
}
.red-link {
  color: #ee5044;
}
.red-link:hover {
  color: #d7382c;
}
.gray-link {
  color: #999;
}
.gray-link:hover {
  color: #ee5044;
}

#bd {
  padding: 40px 0;
}
.wp {
  width: 620px;
}
.side {
  width: 360px;
}
.side-sponsor {
  overflow: hidden;
  margin-bottom: 30px;
}

.set-title {
  font-size: 18px;
  margin-bottom: 25px;
}
.setting-form {
}
.form-controls {
  overflow: hidden;
  padding-bottom: 15px;
}
.form-label {
  display: block;
  width: 80px;
  text-align: right;
  line-height: 35px;
  float: left;
}
.form-input {
  margin-left: 110px;
  color: #999;
}
.input {
  padding: 10px 15px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  background: #fff;
}
select.input {
  border-radius: 0;
  height: 35px;
  border: 0;
}
.btn {
  height: 36px;
  padding: 0 30px;
  background: #ee5044;
  color: #fff;
  text-align: center;
  cursor: pointer;
}
.btn:hover {
  background: #d7382c;
}
button[disabled="disabled"],
button[disabled="disabled"]:hover {
  color: #ccc;
  background: #eee;
  cursor: default;
  text-shadow: 1px 1px 1px #fff;
}
</style>
