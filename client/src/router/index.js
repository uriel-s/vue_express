import Vue from 'vue'
import Router from 'vue-router'
import PostComponent from '../components/PostComponent'

import Login from '../components/Login'
import SignUp from '../components/SignUp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PostComponent',
      component: PostComponent
    },
    
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})