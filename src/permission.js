import router from '@/router'
// import store from './store'
// import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'
// import I18n from '@/lang'
// import { util } from '@/utils'
// import { asyncRouterMap, constantRouterMap } from '@/router'
NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/home/login', '/home/register', '/home/forgetPwd'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()
  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      // const hasGetUserInfo = store.getters.name
      // if (hasGetUserInfo) {
      //   next()
      // } else {
      //   try {
      // get user info
      // if (util.isEmpty(store.state.user.userInfo)) {
      //   router.addRoutes(asyncRouterMap)
      //   await store.dispatch('user/getInfo')
      // }
      next()
    }
    // }
  } else {
    /* has no token*/
    next()
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
