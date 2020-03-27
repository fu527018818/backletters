import util from '@/utils/util'

/* eslint-disable no-param-reassign */
export default {
  install(Vue) {
    Vue.prototype.$util = util
  }
}
