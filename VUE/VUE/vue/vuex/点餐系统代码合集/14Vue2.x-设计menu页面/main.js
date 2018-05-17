import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import axios from 'axios'

Vue.use(VueRouter)

axios.defaults.baseURL = 'https://wd2468178309upkmpi.wilddogio.com/'

const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to,from,savedPosition){
    // return { x:0, y:100 }
    // return { selector: '.btn'}

    if(savedPosition){
      return savedPosition
    }else{
      return { x:0, y:0 }
    }
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
