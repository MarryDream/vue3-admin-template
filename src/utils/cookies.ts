import { isJsonString } from '@/utils/validate'

// 用户
const tokenKey = 'sirius_access_token'
export const getToken = () => localStorage.getItem(tokenKey)
export const setToken = (token: string) => localStorage.setItem(tokenKey, token)
export const removeToken = () => localStorage.removeItem(tokenKey)

// 用户信息
const userInfoKey = 'sirius_user_info'
export const getUserInfo = () => {
  const userInfo = localStorage.getItem(userInfoKey)
  return userInfo && isJsonString(userInfo) ? JSON.parse(userInfo) : null
}
export const setUserInfo = (userInfo: any) => localStorage.setItem(userInfoKey, userInfo)
export const removeUserInfo = () => localStorage.removeItem(userInfoKey)
