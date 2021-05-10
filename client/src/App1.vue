<template>
  <div id="app">
  <img alt="Vue logo" src="./assets/nature.png"  width="130" >
    <post-component/>
    <Button
      @click="onclick()"
      :showEnter="showEnter"
    />
   <div v-show="showEnter"   />
   <Enter />
  </div>

  
</template>

<script>
import PostComponent from './components/PostComponent.vue'
import Enter from './components/Enter.vue'
import Button  from './components/Button.vue'

export default {
  name: 'app',
  components: {
    PostComponent, Enter , Button

  }
  , methods: {
    onclick(){
   this.showEnter = ! this.showEnter
    }
  },
  props: {
    showEnter: Boolean,
  },
  data() {
    return {
      showEnter: false,
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
btn {

  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
