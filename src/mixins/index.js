import router from '../router'
import store from '../store/index'
const mixins = {
  methods: {
    logout () {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('id')
      store.commit('REMOVE_TOKEN')
      router.push('/auth/login')
    }
  }
}
export default mixins
