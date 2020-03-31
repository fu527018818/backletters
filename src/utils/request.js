import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import Qs from 'qs'
// import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 15000 // request timeout
  // transformRequest: [
  //   function(data) {
  //     // 这里可以在获取请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
  //     if (data instanceof FormData) {
  //       return data
  //     } else {
  //       return Qs.stringify(data)
  //     }
  //   }
  // ],
  // responseType: 'json'
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    // const token = store.getters.token
    // if (token) {
    // 让每个请求携带token
    // eslint-disable-next-line no-param-reassign
    // config.headers.Authorization = `Basic ${token}`
    // }
    return config
  },
  error => {
    // do something with request error

    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 0) {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      store.commit('app/setPageLoading', false)
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log(error)
    const msg = error.response.msg || error.response.data.msg || error.message
    Message({
      message: msg,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
