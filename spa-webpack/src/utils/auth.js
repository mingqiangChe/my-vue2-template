import Cookies from 'js-cookie'

export function getToken() {
  return Cookies.get('authorization')
}

export function setToken(token) {
  return Cookies.set('authorization', token)
}

export function removeToken() {
  return Cookies.remove('authorization')
}
