import { createRouter, createWebHistory } from 'vue-router'
import usercenterRoutes from './modules/usercenter'
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录', noAuth: true }
  },
  ...usercenterRoutes,
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@/views/404.vue'),
    meta: { title: '404', noAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
