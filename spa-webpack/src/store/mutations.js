/** 
mutation 里面的回调函数传入的第一个参数也是 模块内的 state，其他和根状态定义的时候一样 
const mutations = {
  // 这里的 `state` 对象是模块的局部状态
  SET_B_NAME(state, payload) {
    debugger
    state.bName = payload.name;
  }
}
**/
