import http from '../utils/http'
// 
/**
 *   resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *   '/testIp'代表vue-cil中config，index.js中配置的代理
 */
let resquest = "/testIp/request/"

// get请求
export function getUser(params) {
  return http.get(`${resquest}/getUser`, params)
}
