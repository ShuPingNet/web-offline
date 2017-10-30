import Vue from 'vue'
import Vuex from 'vuex'
import HeadModules from './modules/HeadModules'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
      head:HeadModules
  }
})

export default store
