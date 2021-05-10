<template>
  <div>
    <div v-if="loggedIn">מחובר</div>
    <div v-else> לא מחובר</div>
    <button class="but" v-if="loggedIn"  @click="signOut">Sign out</button>
  </div>
</template>

<script>
import { firebase } from '@firebase/app'
import '@firebase/auth'
export default {
  name: "top-header",
  mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          this.loggedIn = true;
        } else {
          // No user is signed in.
          this.loggedIn = false;
        }
      });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "login" });
        });
    }
  },
  data() {
    return {
      loggedIn: false
    };
  }
};
</script>
