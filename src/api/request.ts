import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import {useUserStore} from "@/store";

const server = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api`,
  withCredentials: false, // 跨域时是否携带cookies
  responseType: "json",
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

server.interceptors.request.use((config: AxiosRequestConfig) => {
  const user = useUserStore();
  if (user.token) {
    config.headers!["Authorization"] = user.token;
  }
  return config;
})

server.interceptors.response.use((response: AxiosResponse) => {
  if (response.status !== 200) {
    return Promise.reject(new Error("出错啦"));
  }
  const user = useUserStore();
  const data = response.data;
  /* 当不存在code或code为200时，正常返回数据，否则报错 */
  if (!data.code || data.code === 200) {
    return data;
  } else {
    if (data.code === 403) {
      user.logout();
    }
    return Promise.reject(new Error(data.msg ? data.msg.toString() : "出错啦"));
  }
})

export default server
