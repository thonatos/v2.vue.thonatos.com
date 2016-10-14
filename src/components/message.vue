<template>
  <div class="message">
    <h4>#Contact</h4>
    <a :href="site">{{ site }}</a>
    <p>{{ email }}</p>    
    <h4>#Copyright</h4>
    <p class="detail">            
      {{ copyright }}
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      site: 'http://www.thonatos.com',
      email: 'thonatos.yang@gmail.com',
      copyright: new Date().getFullYear() + ' © Arashivision .Inc'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .message{    
    padding: 1rem;
    .detail{
      font-size: 1rem;
      margin: 0;      
    }
  }
</style>
