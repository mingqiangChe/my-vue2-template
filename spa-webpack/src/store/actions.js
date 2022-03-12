/** 最后的 action 的话，他传入还是只有 context 对象，然后咧，这个对象里面的 state 属性指模块内的状态，rootState 指根状态，如下
const actions = {
  ASYNC_SET_NAME({ state, commit, rootState }, payload) {
    setTimeout(() => {
      state.bName = 'asyncName'
    }, 4000)
  }
}
**/


