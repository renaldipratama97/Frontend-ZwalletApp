import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/auth/index.vue'
import Login from '../views/auth/login/index.vue'
import Register from '../views/auth/register/index.vue'
import Home from '../views/main/Home.vue'
import Transfer from '../views/main/Transfer.vue'
import Topup from '../views/main/Topup.vue'
import Profil from '../views/main/Profil.vue'
import PersonalInformation from '../views/main/PersonalInformation.vue'
import ManagePhone from '../views/main/ManagePhone.vue'
import Inputtransfer from '../views/main/Inputtransfer.vue'
import AddPhone from '../views/main/AddPhone.vue'
import AddPhonePrimary from '../views/main/AddPhonePrimary.vue'
import TransactionHistory from '../views/main/TransactionHistory.vue'
import DetailTransaction from '../views/main/DetailTransaction.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
        meta: { requiresVisitor: true }
      },
      {
        path: 'register',
        name: 'Register',
        component: Register,
        meta: { requiresVisitor: true }
      }
    ]
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/transfer',
    name: 'Transfer',
    component: Transfer
  },
  {
    path: '/topup',
    name: 'Topup',
    component: Topup
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/personal-information',
    name: 'PersonalInformation',
    component: PersonalInformation
  },
  {
    path: '/manage-phone',
    name: 'ManagePhone',
    component: ManagePhone
  },
  {
    path: '/input-transfer/:receiverId',
    name: 'Inputtransfer',
    component: Inputtransfer
  },
  {
    path: '/add-phone',
    name: 'AddPhone',
    component: AddPhone
  },
  {
    path: '/add-phone-primary/:idUser',
    name: 'AddPhonePrimary',
    component: AddPhonePrimary
  },
  {
    path: '/transactions-history',
    name: 'TransactionHistory',
    component: TransactionHistory
  },
  {
    path: '/detail-transaction/:idTransfer',
    name: 'DetailTransaction',
    component: DetailTransaction
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // console.log('ini meta data', to.matched.some(record => record.meta.requiresAuth))
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/auth/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
