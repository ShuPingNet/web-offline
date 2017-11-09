import * as types from '../mutation-types'
import api from '../../api/shop'

const state = {
  all: []
}
const getters = {
  allProducts: state => state.all
}
const actions = {
  getAllProducts({ commit }) {
    api.getProducts(products => {
      commit(types.RECEIVE_PRODUCTS, { products });
    });
  }
}
const mutations = {
  [types.RECEIVE_PRODUCTS](state, { products }) {
    state.all = products
  },
  //每点击一下，减少一个
  [types.ADD_TO_CART](state,{id}){
    state.all.find(p =>p.id === id).inventory--
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
