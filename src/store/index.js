import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id:sessionStorage.getItem('id'),
    name:""
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
debugger