<template>
	<div id="app">
		<div class="content">
			<router-view></router-view>			
		</div>
		
    <div class="footer">
			<mt-tabbar v-model="selected">
				<mt-tab-item id="user">
					<img slot="icon" src="./assets/user.png"> User
				</mt-tab-item>
				<mt-tab-item id="info">
					<img slot="icon" src="./assets/info.png"> Info          
				</mt-tab-item>
				<mt-tab-item id="message">
					<img slot="icon" src="./assets/message.png"> Message
				</mt-tab-item>
			</mt-tabbar>
		</div>

	</div>
</template>

<script>
export default {
  data () {
    return {
      selected: 'user'
    }
  },
  watch: {
    selected (val) {
      this._router.push(val)
    }
  }
}
</script>

<style lang="less">
	html,
	body {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
    font-family: monospace;
	}
	
	#app {	
		overflow: hidden;		
    min-height: 100vh;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    
    .content{
      flex: 1;   
      // background: #f8f8f8;         
      overflow: scroll; 
    }

    .footer{      
      flex: 0 0 55px;
      .mint-tabbar {
        background-color: #fff !important;
        > .mint-tab-item.is-selected {           
            background-color: #f8f8f8 !important;
        }
      }
    }
	}
</style>