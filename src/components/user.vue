<template>
	<div class='user'>
    <div class="detail">
      <img class="avatar" :src="user.avatar" alt="">
      <h4>{{ getDesc(user.name, user.workPlace) }}</h4>      
      <ul class="info">
        <li>{{ user.mobile }}</li>
        <li>{{ user.position }}</li>          
        <li>{{ user.email }}</li>          
      </ul>
    </div>    
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  methods: {
    getDesc: function (name, place) {
      if (name && place) {
        return name + ',' + place
      }
      return ''
    },
    ...mapActions([
      'loadUser'
    ])
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