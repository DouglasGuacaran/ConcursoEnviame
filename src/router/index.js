import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import ('../views/Home.vue') 
  },
  {
    path: '/ejercicio1',
    name: 'Ejercicio1',
    component: () => import( '../views/Ejercicio1.vue')
  },
  {
    path: '/ejercicio2',
    name: 'Ejercicio2',
    component: () => import( '../views/Ejercicio2.vue')
  },
  {
    path: '/ejercicio3',
    name: 'Ejercicio3',
    component: () => import( '../views/Ejercicio3.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
