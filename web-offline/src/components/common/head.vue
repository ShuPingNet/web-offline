<template class="home-template">
  <header class="main-header">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h1>
            <span class="hide">shuping - </span>为有思想的你创造的书评网。
          </h1>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'head',
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home-template .main-header {
    padding-top: 62px;
    padding-bottom: 62px;
    background-repeat: no-repeat;
    background-position: center 20%;
    -webkit-background-size: cover;
    background-size: cover;
}
.main-header {
    text-align: center;
    padding: 42px 0;
    background: #f4645f;
}
.main-header h1 {
    color: #fff;
}
h1 {
    font-size: 3em;
}

</style>
