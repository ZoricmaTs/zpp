/* eslint-disable dot-notation */
/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable prefer-destructuring */
import axios from 'axios'

export default {
  state: {
    status: '',
    token: localStorage.getItem('api_token') || '',
    user: {}
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, item) {
      state.status = 'success'
      const { token, userI } = item
      state.token = token
      state.user = userI
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
    }
  },
  // ПЕРЕПИСАТЬ ПРОМИСЫ на asynv and await!!!!!!!!!!!!!!!!!!!!!!!!
  actions: {
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
          url: 'http://www.host1813334.hostland.pro/public/api/user',
          data: user,
          method: 'POST'
        })
          .then(resp => {
            const token = null
            const userI = null
            localStorage.setItem('api_token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', { token, userI })
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('api_token')
            reject(err)
          })
      })
    },
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
          url: 'http://www.host1813334.hostland.pro/public/api/login',
          data: user,
          method: 'POST'
        })
          .then(resp => {
            const token = resp.data.api_token
            const userI = resp.data[0]
            localStorage.setItem('api_token', token)
            localStorage.setItem('name', userI.name)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', { token, userI })
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('api_token')
            reject(err)
          })
      })
    },
    logout({ commit }) {
      return new Promise(resolve => {
        commit('logout')
        localStorage.removeItem('api_token')
        localStorage.removeItem('name')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  }
}
