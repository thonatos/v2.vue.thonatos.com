import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

export default new Vuex.Store({
  state: {
    user: {
    },
    info: {
      active: false,
      submit_text: '初始化',
      msg: ''
    }
  },
  mutations: {
    updateUser (state, data) {
      console.log('updateUser')
      data.userid = state.user.userid || 0
      Vue.http.post(window.INSTA.host + '/active', data).then((res) => {
        switch (res.body.errcode) {
          case 0:
            if (state.info.active) {
              state.info.submit_text = '更新'
            }
            state.info.msg = '更新成功，感谢使用.'
            break
          case 403:
            state.info.msg = '认证失败，请重新打开并提交.'
            break
          case 500:
            state.info.msg = '更新失败，请联系管理员处理.'
            break
          default:
            state.info.msg = ''
        }
      }, (res) => {
        console.log(res)
        window.alert('Update Failed. Please try again.')
      })
    },
    loadUser (state) {
      console.log('loadUser')

      var dd = window.dd || {}
      dd.ready(function () {
        dd.biz.navigation.setTitle({
          title: '员工中心',
          onSuccess: function (result) {
          },
          onFail: function (err) {
            console.log(err)
          }
        })

        dd.runtime.permission.requestAuthCode({
          corpId: window.INSTA.corpId,
          onSuccess: function (result) {
            var HOST = window.INSTA.host + '/code'
            Vue.http.post(HOST, {
              code: result.code
            }).then((res) => {
              state.user = res.body
              if (state.user.auth) {
                state.info.active = true
                state.info.submit_text = '更新'
              }
            }, (res) => {
              // console.log('error')
              window.alert('Auth Failed. Please try again.')
            })
          },
          onFail: function (err) {
            // alert('code error:' + err)
            console.log(err)
            window.alert('code error:' + err)
          }
        })
      })
    }
  },
  getters: {
    user: state => {
      console.log('getters')
      return state.user
    },
    info: state => {
      console.log('getters')
      return state.info
    }
  },
  actions: {
    loadUser (context) {
      console.log('actions')
      context.commit('loadUser')
    }
  }
})
