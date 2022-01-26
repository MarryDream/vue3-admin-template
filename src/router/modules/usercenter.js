import Layout from '@/layout/index.vue'

const usercenterRoutes = [
  {
    path: '/system',
    name: 'system',
    redirect: '/system/dashboard',
    meta: { title: '后台管理', hidden: true }
  },
  {
    path: '/system/dashboard',
    name: 'Dashboard',
    component: Layout,
    redirect: '/system/dashboard/Outline',
    meta: { title: '控制台' },
    children: [
      {
        path: '/system/dashboard/Outline',
        name: 'Outline',
        component: () => import('@/views/system/dashbord/index.vue'),
        meta: { title: '控制台' }
      }
    ]
  },
  {
    path: '/system/plugins',
    name: 'Plugins',
    component: Layout,
    redirect: '/system/plugins/list',
    meta: { title: '插件' },
    children: [
      {
        path: '/system/plugins/list',
        name: 'PluginsList',
        component: () => import('@/views/system/plugins/index.vue'),
        meta: { title: '插件' }
      }
    ]
  }
]

export default usercenterRoutes
