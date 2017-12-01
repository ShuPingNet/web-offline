import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mainContent from './modules/mainContent'

Vue.use(Vuex)
const store = new Vuex.Store({
  actions,
  getters,
  modules: {
    mainContent
  }
})
export default store
