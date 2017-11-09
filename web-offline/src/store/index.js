import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import testButton from './modules/testButton'
import testCart from './modules/testCart'
Vue.use(Vuex)
const store = new Vuex.Store({
  actions,
  getters,
  modules: {
    testButton,
    testCart
  }
})
export default store
