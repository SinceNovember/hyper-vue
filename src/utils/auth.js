import Cookies from 'js-cookie'

const tokenKey = 'hyper-token',
  userInfoKey = 'hyper-userInfo'

export function getToken() {
  return Cookies.get(tokenKey)
}

export function setToken(token) {
  return Cookies.set(tokenKey, token)
}

export function removeToken() {
  return Cookies.remove(tokenKey)
}

export function clearToken() {
  Cookies.remove(tokenKey)
  Cookies.remove(userInfoKey)
}

export function setUserCookie(userInfo) {
  return Cookies.set(userInfoKey, userInfo)
}

export function getUserCookie() {
  return Cookies.get(userInfoKey)
}
