<template>
  <ul>
    <li v-for="item in products" :key="item.id">
      {{ item.title }} - {{ item.price}}

      <el-button type="primary" :disabled="!item.inventory" @click="addToCart(item)">
        +添加
      </el-button>
    </li>
  </ul>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed:mapGetters({
    products:'allProducts'
  }),
  methods:mapActions([
    'addToCart'
  ]),
  created(){
    this.$store.dispatch('getAllProducts')
  }
}
</script>
<style scoped>
  ul li{
    line-height: 40px;
  }
</style>


