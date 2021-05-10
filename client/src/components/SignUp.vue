<template>
  <div>
    <div class="error" v-if="error">{{error.message}}</div>
    <form @submit.prevent="pressed">
      <h1>SignUp</h1>
      <div class="email">
        <label >דואר אלקטרוני    </label>
        <input type="email" v-model="email" placeholder="example@example.com" />
      </div>
      <div class="password">
         <label >סיסמא</label>
        <input type="password" v-model="password" placeholder="*******" />
      </div>
      <div class="password2">
         <label >אימות סיסמא</label>
        <input type="password" v-model="password2" placeholder="*******" />
      </div>
      <button type="submit">הירשם </button>
    </form>  
      <router-link to ="/login" >כבר רשום</router-link>
  </div>
</template>


<script>
import { firebase } from '@firebase/app'
//import firebase from "firebase/app";
import '@firebase/auth'
export default {
  data() {
    return {
      email: "",
      password2: "",
      password: "",
      error: ""
    };
  },
  methods: {
  async  pressed() {
      try{
      firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
        .then(() => {
                alert('רישום בוצע בהצלחה');
           this.$router.replace({ name: "PostComponent" });
        })
      }
        catch(error) { (this.error = error);}
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
  font-size: 18px;
}
input {
  width: 300px;
  padding: 10px;
  margin: 05px;
  font-size: 21px;
}

</style>