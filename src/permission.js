import settings from '@/settings'
import { getToken } from '@/utils/cookies'
import router from '@/router'

// 设置当前网站标题
function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${settings.title}`
  }
  return settings.title
}

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  const hasToken = getToken()
  document.title = getPageTitle(to.meta.title)

  if (hasToken && to.path === '/login') {
    return next({ path: '/system' })
  }
  if (!hasToken && !to.meta.noAuth && whiteList.indexOf(to.path) === -1) {
    // 需要权限且不存在于白名单内的目标，添加跳转来源参数后跳转至登录页.
    next(`/login?redirect=${to.path}`)
  }
  next()
})
