import { isJsonString } from "@/utils/validate"
import {IUserInfo} from "@/types/UserInfo";

export type UserInfoResponse = IUserInfo | null

// 用户
const tokenKey = "admin_access_token"
export const getToken = () => localStorage.getItem(tokenKey) || ""
export const setToken = (token: string) => localStorage.setItem(tokenKey, token)
export const removeToken = () => localStorage.removeItem(tokenKey)

// 用户信息
const userInfoKey = "admin_user_info"
export const getUserInfo = (): UserInfoResponse => {
  const userInfo = localStorage.getItem(userInfoKey)
  return userInfo && isJsonString(userInfo) ? JSON.parse(userInfo) : null
}
export const setUserInfo = (userInfo: IUserInfo) => localStorage.setItem(userInfoKey, JSON.stringify(userInfo))
export const removeUserInfo = () => localStorage.removeItem(userInfoKey)
