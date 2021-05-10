
<template>
  <div > 
  <hr>
  <router-link to ="/login">Login</router-link> |
  <router-link to ="/SignUp" >SignUp</router-link>  
   <router-view/>
      
</div>
</template>

<script>

export default {
name: 'Enter'
}
</script>