<template>
  <div id="app">
    <Top_Header/>
    <img alt="Vue logo" src="./assets/nature.png"  width="130" >
    <div>
      <router-link to ="/">  PostComponent  </router-link> |
      <router-link to ="/Enter">  Enter  " </router-link>
      <router-view/>
   </div>
  </div>
</template>

<script>

import Top_Header from './components/Top_Header.vue'

export default {
  name: 'app',
  components: {
     Top_Header
  }
  , methods: {
    onclick(){
this.$roter.push('/Enter')
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
