import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    id: null || localStorage.getItem('id'),
    accessToken: null || localStorage.getItem('accessToken'),
    refreshToken: null || localStorage.getItem('refreshToken'),
    search: [],
    userLogin: {},
    phone: {},
    toTransfer: {},
    transactions: {},
    detailTransaction: {}
  },
  mutations: {
    SET_USER (state, payload) {
      state.user = payload
      state.accessToken = payload.accessToken
      state.refreshToken = payload.refreshToken
    },
    SET_PHONE (state, payload) {
      state.phone = payload
    },
    SET_OTHER_USER (state, payload) {
      state.toTransfer = payload
    },
    REMOVE_PHONE (state, payload) {
      state.phone = {}
    },
    SET_PROFILE (state, payload) {
      state.userLogin = payload
    },
    SET_FIRSTNAME (state, payload) {
      state.userLogin = {
        ...state.userLogin,
        firstname: payload
      }
    },
    SET_LASTNAME (state, payload) {
      state.userLogin = {
        ...state.userLogin,
        lastname: payload
      }
    },
    SET_PICTURE (state, payload) {
      state.userLogin = {
        ...state.userLogin,
        picture: payload
      }
    },
    SET_DETAIL_TRANSACTION (state, payload) {
      state.detailTransaction = payload
    },
    REMOVE_TOKEN (state) {
      state.accessToken = null
      state.refreshToken = null
      state.id = null
    },
    SET_SEARCH_USERNAME (state, payload) {
      state.search = payload
    },
    SET_SORT_USERNAME (state, payload) {
      state.search = payload
    },
    SET_TRANSACTION (state, payload) {
      state.transactions = payload
    }
  },
  actions: {
    sortUser (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}/users?order=${payload}`)
          .then((res) => {
            console.log(res)
            const result = res.data.result.users
            context.commit('SET_SORT_USERNAME', result)
            resolve(result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    searchUser (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}/users?username=${payload}`)
          .then((res) => {
            console.log(res)
            const result = res.data.result.users
            context.commit('SET_SEARCH_USERNAME', result)
            resolve(result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    transfer (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/transfer`, payload)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    login (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/auth/login`, payload)
          .then((res) => {
            const result = res.data.result
            localStorage.setItem('accessToken', result.accessToken)
            localStorage.setItem('refreshToken', result.refreshToken)
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
    getUserLogin (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}/users/${localStorage.id}`)
          .then((res) => {
            const result = res.data.result
            context.commit('SET_PROFILE', result)
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getUserToTransfer (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}/users/${payload.id}`)
          .then((res) => {
            const result = res.data.result
            context.commit('SET_OTHER_USER', result)
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    updatefirstname (context, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(`${process.env.VUE_APP_BASE_URL}/users/updatefirstname/${payload.id}`, payload)
          .then((res) => {
            Swal.fire({
              icon: 'success',
              title: 'Update firstname success',
              showConfirmButton: false,
              timer: 2000
            })
            context.commit('SET_FIRSTNAME', payload.firstname)
            this.router.push('/personal-information')
            resolve(res)
          })
          .catch((err) => {
            console.log(err.response.data.error.message)
            Swal.fire({
              icon: 'error',
              title: 'Update firstname failed',
              showConfirmButton: false,
              timer: 2000
            })
            reject(err)
          })
      })
    },
    updatelastname (context, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(`${process.env.VUE_APP_BASE_URL}/users/updatelastname/${payload.id}`, payload)
          .then((res) => {
            Swal.fire({
              icon: 'success',
              title: 'Update lastname success',
              showConfirmButton: false,
              timer: 2000
            })
            context.commit('SET_LASTNAME', payload.lastname)
            this.router.push('/personal-information')
            resolve(res)
          })
          .catch((err) => {
            console.log(err.response.data.error.message)
            Swal.fire({
              icon: 'error',
              title: 'Update lastname failed',
              showConfirmButton: false,
              timer: 2000
            })
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
    },
    deletePhoneUser (context, payload) {
      return new Promise((resolve, reject) => {
        axios.delete(`${process.env.VUE_APP_BASE_URL}/phones/${payload.id}`)
          .then((res) => {
            context.commit('REMOVE_PHONE')
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getPhone (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}/phones/getPhoneByIdUser/${localStorage.id}`)
          .then((res) => {
            const result = res.data.result
            context.commit('SET_PHONE', result)
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    updatePicture (context, payload) {
      return new Promise((resolve, reject) => {
        const formData = new FormData()
        formData.append('picture', payload.image)
        axios.patch(`${process.env.VUE_APP_BASE_URL}/users/updatepicture/${payload.id}`, formData)
          .then((res) => {
            console.log(payload.image.name)
            context.commit('SET_PICTURE', URL.createObjectURL(payload.image))
            Swal.fire({
              icon: 'success',
              title: 'Update picture Success',
              showConfirmButton: false,
              timer: 1500
            })
            this.router.push('/profil')
            resolve(res)
          })
          .catch((err) => {
            Swal.fire({
              icon: 'error',
              title: 'Update picture failed',
              showConfirmButton: false,
              timer: 1500
            })
            reject(err)
          })
      })
    },
    addPhonePrimary (context, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(`${process.env.VUE_APP_BASE_URL}/users/updatephonenumber/${payload.id}`, payload)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            console.log(err.response.data.error.message)
            reject(err)
          })
      })
    },
    getTransactionLogin (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}/transfer/getTransaction/${localStorage.id}`)
          .then((res) => {
            const result = res.data.result
            context.commit('SET_TRANSACTION', result)
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getDetailTransaction (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}/transfer/detailTransaction/${payload.id}`)
          .then((res) => {
            const result = res.data.result[0]
            context.commit('SET_DETAIL_TRANSACTION', result)
            resolve(result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    interceptorRequest () {
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    }
  },
  getters: {
    isLogin (state) {
      return state.refreshToken !== null && state.accessToken !== null
    },
    getUser (state) {
      return state.user
    },
    userLogin (state) {
      return state.userLogin
    },
    phoneUser (state) {
      return state.phone
    },
    resultSearch (state) {
      return state.search
    },
    toTransfer (state) {
      return state.toTransfer
    },
    resultTransactions (state) {
      return state.transactions
    },
    detailTransaction (state) {
      return state.detailTransaction
    }
  },
  modules: {
  }
})
