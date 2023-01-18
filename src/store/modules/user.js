import { login, logout, getUser } from "@/api/user"
import { getToken, setToken, removeToken, clearToken, setUserCookie } from '@/utils/auth'
import { resetRouter } from '@/promission'

const state = {
  userInfo: {},
  userId: '',
  token: getToken(),
  name: '',
  avatar: '',
  roles: [],
}
const mutations = {
  SET_USERINFO: (state, userInfo) => {
    console.log(userInfo)
    state.userInfo = userInfo
  },
  SET_USERID: (state, userId) => {
    state.userId = userId
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        if (data.code == 200) {
          getUser({
            id: data.data.loginId
          }).then(res => {
            setUserCookie(JSON.stringify(res.data.data))
          })
          resolve()
        } else {
          reject(data.msg)
        }
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout({ tokenValue: getToken() }).then(() => {
        clearToken()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
