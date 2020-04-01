import $api from '@/api'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken()
  }
}

const state = {
  ...getDefaultState(),
  userInfo: {}
  // productList: [],
  // permissionList: []
}

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  setUserInfo: (state, userInfo = {}) => {
    state.userInfo = userInfo
  },
  removeInfo: (state, userInfo = {}) => {
    state.userInfo = userInfo
  }
  // setPermissionList: (state, permissionList = []) => {
  //   state.permissionList = permissionList
  // }
}

const actions = {
  login({ commit }, { form, loginType }) {
    console.log(form)
    console.log(loginType)
    return new Promise((resolve, reject) => {
      if (+loginType === 2) {
        $api.loginAccount(form)
          .then(response => {
            const { result } = response
            commit('SET_TOKEN', result.token)
            setToken(result.token)
            commit('setUserInfo', result.userInfo)
            resolve()
          }).catch(error => {
            reject(error)
          })
      } else {
        $api.loginPhone(form)
          .then(response => {
            const { result } = response
            commit('SET_TOKEN', result.token)
            setToken(result.token)
            resolve()
          }).catch(error => {
            reject(error)
          })
      }
    })
  },
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      $api.getInfo({}).then(response => {
        const { data } = response
        if (!data) {
          reject('Verification failed, please Login again.')
        }
        commit('setUserInfo', data.result)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }, // 获取商品列表
  // getUserPermission({ commit, state }) {
  //   return new Promise(resolve => {
  //     $api.domains({}).then(res => {
  //       resolve(res.data.result)
  //       commit('setPermissionList', res.data.result)
  //     })
  //   })
  // },
  logout({ commit, state }) {
    removeToken()
    resetRouter()
    commit('RESET_STATE')
    commit('removeInfo')
  },
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken()
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

