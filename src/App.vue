<template>
	<div id="app">
    <div class="header">      
    </div>

		<div class="content">
			<router-view></router-view>			
		</div>
		
    <div class="footer">
			<mt-tabbar v-model="selected">
				<mt-tab-item id="user">
					<img slot="icon" src="./assets/100x100.png"> User
				</mt-tab-item>
				<mt-tab-item id="info">
					<img slot="icon" src="./assets/100x100.png"> Info
				</mt-tab-item>
				<mt-tab-item id="about">
					<img slot="icon" src="./assets/100x100.png"> About
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
  methods: {
    loadMore () {
      console.log(this)
    }
  },
  watch: {
    selected (val) {
      console.log(this)
      this.$store.commit('increment')
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
	}
	
	#app {	
		overflow: hidden;
		display: flex;
    min-height: 100vh;
    flex-direction: column;
    
    .content{
      flex: 1;   
      background: #f8f8f8;         
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