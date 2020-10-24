import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home'
import Test from './../views/Test'
import myVuex from './../views/Vuex'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/home',
    component:Home
  },{
    path:'/test',
    component:Test
  },{
    path:'/Vuex',
    component:myVuex
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
