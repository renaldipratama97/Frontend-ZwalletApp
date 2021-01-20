import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    idUser: null || localStorage.getItem('id'),
    token: null || localStorage.getItem('token'),
    search: []
  },
  mutations: {
    SET_USER (state, payload) {
      state.user = payload
      state.token = payload.token
    },
    REMOVE_TOKEN (state) {
      state.token = null
    },
    SET_SEARCH_USERNAME (state, payload) {
      state.search = payload
    }
  },
  actions: {
    searchUser (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}/users?username=${payload}`)
          .then((res) => {
            console.log(res)
            const result = res.data.result
            context.commit('SET_SEARCH_USERNAME', result)
            resolve(result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    login (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/auth/login`, payload)
          .then((res) => {
            const result = res.data.result
            localStorage.setItem('token', result.token)
            localStorage.setItem('id', result.id)
            context.commit('SET_USER', result)
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    register (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/auth/register`, payload)
          .then((res) => {
            const result = res.data.result
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    addPhone (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/phones`, payload)
          .then((res) => {
            const result = res.data.result
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  },
  getters: {
    isLogin (state) {
      return state.token !== null
    },
    getUser (state) {
      return state.user
    },
    resultSearch (state) {
      return state.search
    }
  },
  modules: {
  }
})
