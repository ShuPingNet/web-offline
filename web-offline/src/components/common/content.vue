<template>
  <div class="wp fl">
    <ul class="channels">
      <li v-for="(item,index) in mainContentData" :key="index">
        <div class="channel-pic fl">
          <a href="/article/1021/">
            <img src="../../assets/1.jpg" alt="醒来觉得甚是爱你 - 悦读FM">
          </a>
        </div>
        <div class="channel-body">
          <div class="channel-title">
            <a href="/article/1021/">{{item.title}}</a>
          </div>
          <div class="channel-meta">
            <span>
              <i class="fa fa-pencil"></i> {{item.name}}</span>
            <span>
              <i class="fa fa-microphone"></i> {{item.author}}</span>
            <span>
              <i class="fa fa-clock-o"></i>{{item.time}}</span>
            <span>
              <i class="fa fa-headphones"></i> {{item.view}}次</span>
          </div>
          <div class="channel-desc">{{item.text}}</div>
        </div>
      </li>
    </ul>
    <div class="pg">
      <span class="cur">1</span>
      <a href="/channel/1/2/">2</a>
      <a href="/channel/1/3/">3</a>
      <a href="/channel/1/4/">4</a>
      <a href="/channel/1/5/">5</a>
      <a href="/channel/1/6/">6</a>
      <a href="/channel/1/7/">7</a>
      <a href="/channel/1/8/">8</a>
      <a href="/channel/1/2/">下一页</a>
    </div>
  </div>
</template>

<script>
  import api from '../../api'
  import {
    mapGetters,
    mapActions,
    mapMutations
  } from 'vuex'
  export default {
    name: 'content',
    methods: {
      ...mapActions(['getMainContent']),
      search() {
        this.getMainContent()
      },
    },
    created(){
      this.search()
    },
    computed: {
      ...mapGetters(['mainContentData'])
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tab {
    height: 40px;
  }

  .tab li {
    float: left;
    padding: 0 15px;
    line-height: 40px;
    cursor: pointer;
  }

  .tab li.cur {
    color: #ee5044;
    background: #FFF;
  }

  .sub-tab {
    overflow: hidden;
    margin-bottom: 40px;
  }

  .sub-tab li {
    float: left;
    margin-right: 20px;
  }

  .sub-tab li a {
    display: block;
    padding: 0 10px 4px 10px;
    font-size: 14px;
  }

  .sub-tab li.cur a {
    font-weight: bold;
    border-bottom: 2px solid #ee5044;
    padding: 0 10px 2px 10px;
  }

  .pg {
    text-align: center;
    padding: 30px;
  }

  .pg a,
  .pg span {
    padding: 3px 10px;
  }

  .pg .cur {
    color: #ee5044;
    font-weight: bold;
  }

  .comment-pg {
    background: #FFF;
    border-top: 1px solid #EEE;
  }

  .follow-link {
    font-size: 12px;
    padding: 0 15px;
    color: white;
    background: #ee5044;
    line-height: 30px;
    display: inline-block;
  }

  .follow-link:hover {
    color: white;
    background: #d7382c;
  }

  .followed {
    background: #999;
  }

  .followed:hover {
    background: #777;
  }

  #ft {
    padding-bottom: 40px;
    color: #AAA;
  }

  .ft-links {
    padding-bottom: 8px;
  }

  .item {}

  .item-base {
    background: #FFF;
    padding: 30px;
    margin-bottom: 30px;
  }

  .item-name {
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 8px;
  }

  .item-meta {
    color: #999;
    line-height: 20px;
    margin-bottom: 25px;
  }

  .item-meta em {
    font-style: normal;
    margin-right: 20px;
  }

  .item-pic {
    overflow: hidden;
  }

  .item-pic img {
    width: 100%;
    display: block;
  }

  .item-intro {
    padding: 20px 30px;
    background: #FFF;
    margin-bottom: 30px;
  }

  .item-intro p {
    padding: 10px 0;
  }

  .item-intro div {
    height: 280px;
    overflow: hidden;
    position: relative;
    line-height: 22px;
    letter-spacing: 1px;
  }

  .item-intro-hide {
    display: block;
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-image: -moz-linear-gradient(top, rgba(255, 255, 255, 0), #FFF);
    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(255, 255, 255, 0)), color-stop(1, #FFF));
  }

  .item-f {
    padding: 5px 30px;
    background: #FFF;
    margin-bottom: 30px;
    line-height: 28px;
  }

  .item-tags a {
    margin-right: 10px;
  }

  .item-pg {
    font-size: 14px;
    padding: 0 30px;
    margin-bottom: 30px;
  }




  .channels li {
    overflow: hidden;
    margin-bottom: 30px;
    background: #FFF;
  }

  .channel-pic {
    height: 210px;
    width: 210px;
    overflow: hidden;
  }

  .channel-pic img {
    height: 100%;
    display: block;
  }

  .channel-body {
    margin-left: 210px;
    padding: 30px;
    text-align: left;
  }

  .channel-title {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .channel-meta {
    margin-bottom: 25px;
    color: #999;
  }

  .channel-meta span {
    display: inline-block;
    margin-right: 15px;
  }

  .channel-desc {
    line-height: 22px;
    letter-spacing: 1px;
  }

</style>

