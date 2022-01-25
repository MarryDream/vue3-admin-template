import Layout from '@/layout/index.vue'

const usercenterRoutes = [
  {
    path: '/system',
    name: 'system',
    redirect: '/system/dashboard',
    meta: { title: '后台管理' }
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
        meta: { title: '概要' }
      }
    ]
  }
]

export default usercenterRoutes
