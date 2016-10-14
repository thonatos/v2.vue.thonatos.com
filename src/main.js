import Vue from 'vue'
import VueRouter from 'vue-router'
import Mint from 'mint-ui'

import App from './App'
import store from './store/'

import Info from './components/info'
import About from './components/about'
import User from './components/user'

Vue.use(Mint)
Vue.use(VueRouter)

const routes = [
  { path: '/about', component: About },
  { path: '/info', component: Info },
  { path: '/user', component: User },
  { path: '/', redirect: '/user' }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  ...App
}).$mount('#app')