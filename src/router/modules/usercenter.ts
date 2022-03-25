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
    path: '/system/pages',
    name: 'Pages',
    component: Layout,
    redirect: '/system/pages/first',
    meta: {title: '页面'},
    children: [
      {
        path: '/system/pages/first',
        name: 'PagesFirst',
        component: () => import('@/views/system/pages/PageFirst.vue'),
        meta: {title: '页面一'}
      },
      {
        path: '/system/plugins/second',
        name: 'PagesSecond',
        component: () => import('@/views/system/pages/PageSecond.vue'),
        meta: {title: '页面二'}
      }
    ]
  }
]

export default usercenterRoutes
