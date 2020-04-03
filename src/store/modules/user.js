import $api from '@/api'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
import util from '@/utils/util'
const getDefaultState = () => {
  return {
    token: getToken()
  }
}

const state = {
  ...getDefaultState(),
  userInfo: {},
  companyInfo: {}
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
  },
  setCompanyInfo: (state, companyInfo = {}) => {
    state.companyInfo = companyInfo
  },
  removeCompanyInfo: (state) => {
    state.companyInfo = {}
  }
}

const actions = {
  login({ commit }, { form, loginType }) {
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
  getCompanyInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      $api.companyInfo({})
        .then(response => {
          const { data } = response
          // 4 未认证 0：待审核，1：已审核，2：已变更，3：审核不通过
          const companyInfo = util.isEmpty(data.result) ? {
            companyStatusCode: 4
          } : {
            ...data.result,
            companyStatusCode: util.isEmpty(data.result.companyStatusCode) ? 4 : data.result.companyStatusCode
          }
          commit('setCompanyInfo', companyInfo)
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
    commit('removeCompanyInfo')
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

