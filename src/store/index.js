import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import permission from './modules/permission'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [
    createPersistedState({
      // storage: window.cookie,
      paths: ['user.userInfo']
    }
    )
  ],
  modules: {
    app,
    settings,
    user,
    permission
  },
  getters
})

export default store
