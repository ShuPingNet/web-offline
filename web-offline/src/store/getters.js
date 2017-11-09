import * as types from './mutation-types'

export const cartProducts = state =>{
  return state.testCart.added.map(({id,quantity}) => {
    const product = state.testButton.all.find(p => p.id === id)
    return {
      title: product.title,
      price: product.price,
      quantity:quantity
    }
  });
}
