import { getToken, setToken, removeToken, getUserInfo, setUserInfo, removeUserInfo } from '@/utils/cookies'

const state = () => ({
  userInfo: getUserInfo(),
  token: getToken()
})
const mutations = {
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}
const actions = {
  // 更新用户信息方法
  setUserinfo: ({ commit }, userInfo) => {
    if (userInfo.token) {
      commit('SET_TOKEN', userInfo.token)
      setToken(userInfo.token)
      delete userInfo.token
    }
    commit('SET_USERINFO', userInfo)
    setUserInfo(JSON.stringify(userInfo))
  },
  // 登录操作
  loginByPassword: ({ commit, dispatch }, params) => {
    return new Promise((resolve, reject) => {
      // login(params)
      //   .then(res => {
      //     dispatch('setUserinfo', res.data)
      //     resolve(res)
      //   })
      //   .catch(err => {
      //     reject(err)
      //   })
      const acountTest = { admin: 'admin123' }
      if (acountTest[params.username] === params.password) {
        const resTest = { username: 'admin', token: 'abaaba123456' }
        dispatch('setUserinfo', resTest)
        resolve(resTest)
      } else {
        reject('用户名或密码错误')
      }
    })
  },
  // 退出登录
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', '')
      commit('SET_USERINFO', '')
      removeToken()
      removeUserInfo()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
