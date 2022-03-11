import Layout from '@/layout/index.vue'
import {RouteRecordRaw} from "vue-router";

const usercenterRoutes: Array<RouteRecordRaw> = [
  {
    path: '/system',
    name: 'system',
    redirect: '/system/dashboard',
    meta: {title: '后台管理', hidden: true}
  },
  {
    path: '/system/dashboard',
    name: 'Dashboard',
    component: Layout,
    redirect: '/system/dashboard/Outline',
    meta: {title: '控制台'},
    children: [
      {
        path: '/system/dashboard/Outline',
        name: 'Outline',
        component: () => import('@/views/system/dashboard/index.vue'),
        meta: {title: '控制台'}
      }
    ]
  },
  {
    path: '/system/plugins',
    name: 'Plugins',
    component: Layout,
    redirect: '/system/plugins/first',
    meta: {title: '插件'},
    children: [
      {
        path: '/system/plugins/first',
        name: 'PluginsFirst',
        component: () => import('@/views/system/plugins/First.vue'),
        meta: {title: '插件一'}
      },
      {
        path: '/system/plugins/second',
        name: 'PluginsSecond',
        component: () => import('@/views/system/plugins/Second.vue'),
        meta: {title: '插件二'}
      }
    ]
  }
]

export default usercenterRoutes
