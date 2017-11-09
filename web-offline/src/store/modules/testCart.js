import * as types from '../mutation-types'
import api from '../../api/shop'

const state = {
  added: []
}
const getters = {

}
const actions = {

}
const mutations = {
  //  分发增加操作
  [types.ADD_TO_CART](state, { id }) {
    const record = state.added.find(p => p.id === id)
    if (!record) {
      state.added.push({
        id,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
