<template>
  <div> 
  <hr>
  <router-link to ="/login">Login</router-link> |
  <router-link to ="/SignUp" >SignUp</router-link>  
   <router-view/>
      
</div>
</template>

<script>
import PostComponent from '/src/components/PostComponent.vue'
import Login from '/src/components/Login.vue'
import SignUp from '/src/components/SignUp.vue'

export default {
  name: 'Enter',
  components: {
     Login ,SignUp,

  }
}
</script>