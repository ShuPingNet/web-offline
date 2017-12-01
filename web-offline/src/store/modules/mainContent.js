import * as types from '../mutation-types'
import api from '../../api'
const state = {
  mainContentData: []
}
const getters = {
  mainContentData: state => state.mainContentData
}
const actions = {
  getMainContent({ commit }) {
    api.getMainContent(data => {
      commit(types.SET_MAINCONTENT_DATA, data)
    })
  }
}
const mutations = {
  [types.SET_MAINCONTENT_DATA](state, data) {
    console.log(data)
    state.mainContentData = data.data;
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
