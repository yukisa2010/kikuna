import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Third from '../views/Third.vue'
import Forth from '../views/Forth.vue'
import Fifth from '../views/Fifth.vue'
import Sixth from '../views/Sixth.vue'
import Seventh from '../views/Seventh.vue'
import Eighth from '../views/Eighth.vue'
import Ninth from '../views/Ninth.vue'
import Tenth from '../views/Tenth.vue'


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
    path: '/forth',
    name: 'Forth',
    component: Forth
  },
  {
    path: '/fifth',
    name: 'Fifth',
    component: Fifth
  },
  {
    path: '/sixth',
    name: 'Sixth',
    component: Sixth
  },
  {
    path: '/seventh',
    name: 'Seventh',
    component: Seventh
  },
  {
    path: '/eighth',
    name: 'Eighth',
    component: Eighth
  },
  {
    path: '/ninth',
    name: 'Ninth',
    component: Ninth
  },
  {
    path: '/tenth',
    name: 'Tenth',
    component: Tenth
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
