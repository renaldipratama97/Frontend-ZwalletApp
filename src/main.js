import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuelidate from 'vuelidate' // IMPORT LIBRARY
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(Vuelidate) // DEFINE AS GLOBAL

Vue.directive('set-font', {
  bind: function (el, binding) {
    if (binding.arg === 'large') {
      el.style.fontSize = '40px'
    } else if (binding.arg === 'medium') {
      el.style.fontSize = '22px'
    } else if (binding.arg === 'small') {
      el.style.fontSize = '18px'
    } else {
      el.style.fontSize = '16px'
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
