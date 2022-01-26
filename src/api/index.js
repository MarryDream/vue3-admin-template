import * as apis from './api'
import server from './request'

const ajax = {}

const getRequest = ['get', 'delete']
const postRequest = ['post', 'put']

function getServer(url, params, method = 'post', config = {}) {
  const paramField = getRequest.indexOf(method) !== -1 ? 'params' : 'data'
  const serverConfig = {
    method,
    url,
    [paramField]: params,
    ...config
  }
  return server(serverConfig)
}

for (const key in apis) {
  for (const api in apis[key]) {
    ajax[api] = (params, method = 'post', config = {}) => {
      return getServer(apis[key][api], params, (method = 'post'), config)
    }
  }
}

export default ajax
