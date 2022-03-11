import {defineStore} from "pinia";
import {reactive, toRefs} from "vue";
import { getToken, setToken, removeToken, getUserInfo, setUserInfo, removeUserInfo } from "@/utils/cookies";

interface ILoginParams {
  username: string,
  password: string
} 

export const useUserStore = defineStore("user", () => {
  const state = reactive({
    userInfo: getUserInfo(),
    token: getToken()
  })

  /* 更新用户信息方法 */
  function setUserInfoState(userInfo: any) {
    if (userInfo.token) {
      state.token = userInfo.token
      setToken(userInfo.token)
      delete userInfo.token
    }
    state.userInfo = userInfo
    setUserInfo(JSON.stringify(userInfo))
  }
  
  /* 登陆操作 */
  function loginByPassword(params: ILoginParams) {
    return new Promise((resolve, reject) => {
      // login(params)
      //   .then(res => {
      //     dispatch('setUserinfo', res.data)
      //     resolve(res)
      //   })
      //   .catch(err => {
      //     reject(err)
      //   })
      const accountTest: ILoginParams = { 
        username: "admin",
        password: "admin123"
      }
      if (accountTest.username === params.username && accountTest.password === params.password) {
        const resTest = { username: 'admin', token: 'abaaba123456' }
        setUserInfoState(resTest)
        resolve(resTest)
      } else {
        reject('用户名或密码错误')
      }
    })
  }
  
  function logout() {
    state.token = ""
    state.userInfo = ""
    removeToken()
    removeUserInfo()
  }
  
  return {
    ...toRefs(state),
    setUserInfoState,
    loginByPassword,
    logout
  }
})
