import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import state from './state'
import actions from './actions'
import mutations from './mutations'
// import moduleB from './module/moduleA'

// import user from './module/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    // user,
  },
  getters
})

export default store
