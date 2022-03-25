import {defineStore} from "pinia";
import {reactive, toRefs} from "vue";
import {getToken, setToken, removeToken, getUserInfo, setUserInfo, removeUserInfo} from "@/utils/cookies";
import {UserInfoResponse} from "@/utils/cookies";
import {IUserInfo} from "@/types/UserInfo";
import router from "@/router"

interface ILoginParams {
  username: string,
  password: string
}

interface IState {
  userInfo: UserInfoResponse
  token: string
}

export const useUserStore = defineStore("user", () => {
  const state: IState = reactive({
    userInfo: getUserInfo(),
    token: getToken()
  })

  /* 更新token */
  function setTokenState(token: string) {
    state.token = token
    setToken(token)
  }

  /* 更新用户信息方法 */
  function setUserInfoState(userInfo: IUserInfo) {
    state.userInfo = userInfo
    setUserInfo(userInfo)
  }
  
  /* 登陆操作 */
  function loginByPassword(params: ILoginParams) {
    return new Promise((resolve, reject) => {
      const accountTest: ILoginParams = {
        username: "admin",
        password: "admin123"
      }
      if (accountTest.username === params.username && accountTest.password === params.password) {
        const testUser: IUserInfo = {username: 'admin', auth: 1, createTime: 1648219377278} // 测试 user 数据
        const testToken = "Mary0721" // 测试token数据
        setTokenState(testToken)
        setUserInfoState(testUser)
        resolve(testUser)
      } else {
        reject("用户名或密码错误")
      }
    })
  }

  function logout() {
    state.token = "";
    state.userInfo = null;
    removeToken();
    removeUserInfo();
    router.push("/login").catch(() => {
    })
  }

  return {
    ...toRefs(state),
    setUserInfoState,
    loginByPassword,
    logout
  }
})
