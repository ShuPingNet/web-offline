<template>
  <div id="app">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list></product-list>
    <hr>
    <CartList></CartList>
  </div>
</template>

<script>
  import ProductList from './testButton'
  import CartList from './testCart'

  export default {
    components: {
      ProductList,
      CartList
    }
  }

</script>

