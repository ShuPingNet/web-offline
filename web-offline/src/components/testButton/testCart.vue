<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <ul>
      <li v-for="p in products" :key="p.id">
        {{ p.title }} - {{ p.price}} x {{ p.quantity }}
      </li>
    </ul>
    <p style="color:red">Total:{{total}} </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
   computed: {
    ...mapGetters({
      products: 'cartProducts'
    }),
    total(){
      return this.products.reduce((total,p) => {
        return total + p.price * p.quantity
      },0);
    }
  }
}
</script>
