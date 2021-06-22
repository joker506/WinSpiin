import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const user = {
  namespaced: true,
  state: {
    isAuth: true,
    email: '',
    password: ''
  },
  mutations: {
    SET_AUTHENTICATED(state, payload) {
      console.log(state.isAuth)
      state.isAuth = payload.isAuth
    }
  },
  actions: {
    userAuthenticated(context, payload) {
      console.log(payload)
      context.commit('SET_AUTHENTICATED', payload)
    }
  }
}
export default user
