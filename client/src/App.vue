<template>
  <div id="app">
  <img alt="Vue logo" src="./assets/nature.png"  width="130" >
  <div>
  <router-link to ="/">  __Posts__  </router-link>
  <router-link to ="/Enter">  ___Enter___    </router-link>
   <router-view/>
  </div>

  </div>
</template>

<script>
import PostComponent from './components/PostComponent.vue'
import Enter from './components/Enter.vue'

export default {
  name: 'app',
  components: {
    PostComponent, Enter

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
