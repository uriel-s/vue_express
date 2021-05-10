<template>
  <div class>
    <h1>Login</h1>
    <form @submit.prevent="pressed">
       <div >
         <label >דואר אלקטרוני    </label>
         <input type="text" id="select-email" v-model="email" placeholder="הכנס כתובת">
      </div>
      <div>
        <label >סיסמא      </label>
        <input type="password" id="_password" v-model="password" placeholder="password">
      </div>
  <button>Login</button>
  </form>
    <p v-if="error">{{ eror }}</p>
   <router-link to ="/SignUp" >להרשמה</router-link>  
  </div>
</template>



<script>
import { firebase } from '@firebase/app'
import "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    async pressed() {
     try{
    firebase.auth().signInWithEmailAndPassword(this.email,this.password).
    then(() => {
                alert('התחברות בוצעה בהצלחה');
           this.$router.replace({ name: "PostComponent" });
        })
    }
        catch(error) {this.error = error;}
    }
  }
};
</script>


