// store/modules/products.js
import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../mutation-types'

// 该模块的初始状态
const state = {
  all: []
}
// 相关的 mutations
const mutations = {
  [RECEIVE_PRODUCTS](state, products) {
    state.all = products
  },

  [ADD_TO_CART](state, productId) {
    state.all.find(p => p.id === productId).inventory--
  }
}

export default {
  state,
  mutations
}
