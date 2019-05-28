import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
/* Layout */
import Layout from '@/components/Layouts/layout'

export const constantRoutes = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/error-page/404'), hidden: true },
  {
    path: '/',
    redirect: '/assets'
  },
  {
    path: '/assets',
    name: 'assets',
    component: () => import('@/views/assets/index'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    children: [
          {
            path: 'meituan',
            component: () => import('@/views/meituan/index')
          },
          {

            path: 'meituan/changecity',
            name: 'changecity',
            component: () => import('@/views/changeCity/index')
          },


    ]
  },

  // {
  //   path: '/meituan',
  //   component: () => import('@/views/meituan/index'),
  //   name: 'meituan',
  //   hidden: true,
  //   children: [
  //     {
  //       path: '/',
  //       component: () => import('@/views/meituan/index')
  //     },
  //     {
  //       path: 'changecity',
  //       component: () => import('@/views/changeCity/index')
  //     }
  //   ]
  // },
  {
    path: '/chart',
    component:() => import('@/views/chart/index')
  }
]

const createRouter = () => new Router({
  mode: 'history',
  linkActiveClass: 'active-link',
  scrollBehavior: () => ({ y : 0 }),
  routes: constantRoutes
})

const router = createRouter()

export default router
