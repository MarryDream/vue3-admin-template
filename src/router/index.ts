import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import userCenterRoutes from "./modules/usercenter"
    
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
    meta: { title: "登录", layout: "login", noAuth: true }
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/Register.vue"),
    meta: {title: "注册", layout: "login", noAuth: true}
  },
  ...userCenterRoutes,
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("@/views/404.vue"),
    meta: { title: "404", noAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: (to, from, savePosition) => {
    // 在按下 后退/前进 按钮时，就会像浏览器的原生表现那样
    if (savePosition) {
      return savePosition
    }
    return {top: 0}
  },
  routes
})

export default router
