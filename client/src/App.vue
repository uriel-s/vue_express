<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/nature.png"  width="130" >
    <PostComponent />
    <Login />
  </div>
</template>

<script>
import PostComponent from './components/PostComponent.vue'
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'

export default {
  name: 'app',
  components: {
    PostComponent, Login ,SignUp

  }
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
