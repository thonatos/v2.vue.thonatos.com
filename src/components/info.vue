<template>
  <div class="info" checkActive>
    <div class="pass">
      <h4>密码设置</h4>
      <mt-field v-model="pass_old" label="password" placeholder="Input old password" type="password"></mt-field> 
      <mt-field v-show="info.active" v-model="pass_new" label="password" placeholder="Input new password" type="password"></mt-field>
      <mt-button @click.native="submit()" class="submit" size="large">{{ info.submit_text }}</mt-button>
      
      <p class="tips">
        友情提示：不填写则设置出事密码为手机号
      </p>
      <p class="warning">
        {{ info.msg }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      pass_old: '',
      pass_new: ''
    }
  },
  computed: {
    ...mapGetters({
      user: 'user',
      info: 'info'
    })
  },
  methods: {
    submit: function () {
      this.$store.commit('updateUser', {
        pass_old: this.pass_old,
        pass_new: this.pass_new
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .info{         
    padding: 1rem;        
    .pass{
      h4{
        margin-bottom: 4rem;
      }
      .submit{
        margin-top: 12rem;
      }
      .tips{
        color: #ccc;
        font-size: 0.5rem;
        margin-top: 2rem;
      }
      .warning{
        color: red;
      }
    }
  }
</style>
