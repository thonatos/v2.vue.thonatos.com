<template>
  <div class="info">
    <mt-cell v-for="(value, key) in info" :title="key" :label="value.toString()" class="detail">
    </mt-cell>    
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: {
        'active': true,
        'avatar': 'http://static.dingtalk.com/media/lADOEYgqsM0C7s0C7A_748_750.jpg',
        'department': [
          8587047,
          8587094
        ],
        'dingId': '$:LWCP_v1:$U0XeYFU8ZSuy97nv94X1pg==',
        'email': 'thonatos@arashivision.com',
        'errcode': 0,
        'errmsg': 'ok',
        'isAdmin': true,
        'isBoss': false,
        'isHide': false,
        'isLeaderInDepts': '{8587047:false,8587094:false}',
        'jobnumber': '',
        'mobile': '18013140302',
        'name': '杨贺强',
        'openId': 'XFkjaWWaZO1jCpEqMw8fHwiEiE',
        'orderInDepts': '{8587047:8101628983469050,8587094:8101628983469050}',
        'position': '应用软件部 工程师',
        'remark': '',
        'tel': '',
        'userid': '02034201333231',
        'workPlace': '深圳'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
