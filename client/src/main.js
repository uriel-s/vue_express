import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase/app";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBlNLFq0Iu34w2pQ5ZPK9GWq4wYhJudKy4",
    authDomain: "makom-balev.firebaseapp.com",
    projectId: "makom-balev",
    storageBucket: "makom-balev.appspot.com",
    messagingSenderId: "607398022791",
    appId: "1:607398022791:web:7a43871e9955e3f4f3b222"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
