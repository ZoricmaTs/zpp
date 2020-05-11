import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProfileUser from '../views/ProfileUser.vue'
import ProfileTrainer from '../views/ProfileTrainer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profileuser/:id',
    name: 'profileuser', //для роутеров
    component: ProfileUser,
    props: true
  },
  {
    path: '/profiletrainer/:id',
    name: 'profiletrainer',
    component: ProfileTrainer,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
