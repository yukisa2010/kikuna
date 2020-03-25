import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Third from '../views/Third.vue'
import Forth from '../views/Forth.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/body',
    name: 'Body',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Body.vue')
  },
  {
    path: '/third',
    name: 'Third',
    component: Third
  },
  {
    path: '/Forth',
    name: 'Forth',
    component: Forth
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
