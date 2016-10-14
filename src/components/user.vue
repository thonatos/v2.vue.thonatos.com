<template>
	<div class='user'>
    <div class="detail">
      <img class="avatar" :src="user.avatar" alt="">
      <h4>{{ user.name }} - {{ user.workPlace }}</h4>      
      <ul class="info">
        <li>{{ user.mobile }}</li>
        <li>{{ user.position }}</li>          
        <li>{{ user.email }}</li>          
      </ul>
    </div>    
	</div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        'avatar': 'http://static.dingtalk.com/media/lADOEYgqsM0C7s0C7A_748_750.jpg',
        'email': 'thonatos@arashivision.com',
        'isAdmin': true,
        'isBoss': false,
        'mobile': '18013140302',
        'name': '杨贺强',
        'openId': 'XFkjaWWaZO1jCpEqMw8fHwiEiE',
        'position': '应用软件部 工程师',
        'userid': '02034201333231',
        'workPlace': '深圳'
      }
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='less'>
	.user {
		.detail {
      padding: 6rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .avatar{
        width: 128px;
        border-radius: 50%;        
      }
      ul.info{
        list-style: none;
        padding: 0;
        li{
          text-align: center;
          padding: 0.2em;
        }
      }
		}
	}
</style>