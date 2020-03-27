import Api from '@/api'
export default {
  install(Vue) {
    Vue.prototype.$api = Api
  }
}
