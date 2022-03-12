/** 
 getter 的话，他会有三个参数，第一个是模块内的 state，第二个是 模块内的 getters，第三个是根节点状态 rootState，
 const getters = {
  bFullName: (state, getters, rootState) => `full${state.bName}`
}  **/
const getters = {
  // device: state => state.app.device,
  // token: state => state.user.token,
  // avatar: state => state.user.avatar,
  // name: state => state.user.name,
  // userInfo: state => state.user.userInfo
}
export default getters
