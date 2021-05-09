<template>
  <div class="container">
    <h1>Login</h1>
    <div >
      <label >דואר אלקטרוני    </label>
      <input type="text" id="select-email" v-model="email" placeholder="הכנס כתובת">
    </div>
    <div>
      <label >סיסמא      </label>
      <input type="password" id="_password" v-model="password" placeholder="password">
    </div>
    <i> </i>
    <p v-if="error">{{ eror }}</p>
 <button v-on:click="Enter()">כניסה</button>

  </div>
</template>



<script>
export default {
    גata() {
    return {
    password: '',
    email: ''
}
  },
   methods: {
   Enter(){   alert('The requested page has not yet been created');   }
  ,SwitchPage(){   alert('The requested page has not yet been created');  },
   }, 
}
</script>


