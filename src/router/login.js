export default [
  {
    path: '/login',
    name: '/Login',
    component: () => import('@/views/login/index'),
    hidden: true,
    redirect: '/home/login',
    children: [{
      path: '/home/login',
      name: 'Login',
      hidden: true,
      component: () => import('@/views/login/login'),
      meta: { title: '登录', icon: 'peoples' }
    },
    {
      path: '/home/register',
      name: 'Register',
      hidden: true,
      component: () => import('@/views/login/register'),
      meta: { title: '注册', icon: 'peoples' }
    },
    {
      path: '/home/forgetPwd',
      name: 'ForgetPwd',
      hidden: true,
      component: () => import('@/views/login/forgetPwd'),
      meta: { title: '忘记密码', icon: 'peoples' }
    }

    ]
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/login/register'),
    hidden: true
  }
]
