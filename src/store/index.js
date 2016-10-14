import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      console.log('####')

      // Vue.http.get('http://api.thonatos.com/', {}).then((res) => {
      //   console.log(res)
      // }, (res) => {
      //   console.log(res)
      // })
      state.count++
    }
  }
})
