import Vue from 'vue'
import VueRouter from 'vue-router'

const Home =()=> import('views/home/Home.vue') 
const Sort =()=> import('views/sort/Sort.vue') 
const Collect =()=> import('views/collect/Collect.vue') 
const Profile =()=> import('views/profile/Profile.vue')
const Details =()=>import('views/details/Details.vue') 

Vue.use(VueRouter)

const routes = [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/sort',
    component:Sort
  },
  {
    path:'/collect',
    component:Collect
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/details',
    component:Details
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
