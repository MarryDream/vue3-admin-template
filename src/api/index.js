import * as apis from './api'
import server from './request'

const ajax = {}

const getRequest = ['get', 'delete']
const postRequest = ['post', 'put']

function getServer(url, params, method = 'post', config = {}) {
  const serverConfig = {
    method,
    url
  }
  if (getRequest.indexOf(method) !== -1) {
    serverConfig.params = params
  }
  if (postRequest.indexOf(method) !== -1) {
    serverConfig.data = params
  }
  return server({
    ...serverConfig,
    ...config
  })
}

for (const key in apis) {
  for (const api in apis[key]) {
    ajax[api] = getServer(apis[key][api], params, (method = 'post'), config)
  }
}

export default ajax
