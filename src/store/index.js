import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id:sessionStorage.getItem('id')
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
debugger