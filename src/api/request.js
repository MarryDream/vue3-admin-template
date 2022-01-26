import axios from 'axios'

const server = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  responseType: 'json',
  timeout: 60000
})

server.interceptors.response.use(response => {
  return response.data
})

export default server
