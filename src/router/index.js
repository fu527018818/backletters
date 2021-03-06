import Vue from 'vue'
import Router from 'vue-router'
import login from './login'
// import huopin from './huopin'
// import huotao from './huotao'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRouterMap
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRouterMap = [
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home/index',
    children: [{
      path: '/home/index',
      name: 'HomeIndex',
      component: () => import('@/views/home/index'),
      meta: { title: '首页', icon: 'peoples' }

    }]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/index',
    children: [{
      path: 'index',
      name: 'UserIndex',
      component: () => import('@/views/user/index'),
      meta: { title: 'user', icon: 'peoples' }
    }]
  },
  {
    path: '/apply',
    component: Layout,
    redirect: '/apply/index',
    meta: {
      title: '申请保函'
    },
    children: [{
      path: 'index',
      name: 'ApplyIndex',
      component: () => import('@/views/apply/index'),
      meta: { title: '申请保函', icon: 'peoples', breadcrumb: false }
    }]
  },
  {
    path: '/project',
    component: Layout,
    redirect: '/project/search',
    meta: {
      title: '项目查询'
    },
    children: [{
      path: 'search',
      name: 'ProjectSearch',
      component: () => import('@/views/project/search'),
      meta: { title: '项目查询', icon: 'peoples', breadcrumb: false }
    }, {
      path: 'order',
      name: 'ProjectOrder',
      component: () => import('@/views/project/order'),
      meta: { title: '保函查询', icon: 'peoples' }
    },
    {
      path: 'detail',
      name: 'ProjectDetail',
      component: () => import('@/views/project/detail'),
      meta: { title: '项目详情', icon: 'peoples' }
    }

    ]
  },
  {
    path: '/personal',
    component: Layout,
    redirect: '/personal/index',
    meta: { title: '个人中心', icon: 'peoples' },
    children: [{
      path: 'index',
      name: 'ProjectSearch',
      component: () => import('@/views/personal/index'),
      meta: { title: '个人中心', icon: 'peoples', breadcrumb: false }
    },
    {
      path: 'changePassword',
      name: 'ChangePassword',
      component: () => import('@/views/personal/changePassword'),
      meta: { title: '修改密码', icon: 'peoples' }
    }

    ]
  },

  {
    path: '/certification',
    component: Layout,
    redirect: '/certification/index',
    meta: { title: '我要认证', icon: 'peoples' },
    children: [{
      path: 'index',
      name: 'CertificationIndex',
      component: () => import('@/views/certification/index'),
      meta: { title: '我要认证', icon: 'peoples', breadcrumb: false }
    }, {
      path: 'company',
      name: 'CertificationCompany',
      component: () => import('@/views/certification/company'),
      meta: { title: '企业认证', icon: 'peoples' }
    }
    ]
  },
  ...login,
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                // hidden: true,
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]
export const asyncRouterMap = [
  // ...huopin,
  // ...huotao
]
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
