import Vue from 'vue'
import VueRouter from 'vue-router'
import Step1 from '../views/Step1.vue'
import Step2 from '../views/Step2.vue'
import Step3 from '../views/Step3.vue'
import Step4 from '../views/Step4.vue'
import Step5 from '../views/Step5.vue'
import Step6 from '../views/Step6.vue'
import Step7 from '../views/Step7.vue'
import Step8 from '../views/Step8.vue'
import Step9 from '../views/Step9.vue'
import Step10 from '../views/Step10.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Step1',
    component: Step1
  },
  {
    path: '/Step2',
    name: 'Step2',
    component: Step2
  },
  {
    path: '/Step3',
    name: 'Step3',
    component: Step3
  },
  {
    path: '/Step4',
    name: 'Step4',
    component: Step4
  },
  {
    path: '/Step5',
    name: 'Step5',
    component: Step5
  },
  {
    path: '/Step6',
    name: 'Step6',
    component: Step6
  },
  {
    path: '/Step7',
    name: 'Step7',
    component: Step7
  },
  {
    path: '/Step8',
    name: 'Step8',
    component: Step8
  },
  {
    path: '/Step9',
    name: 'Step9',
    component: Step9
  },
  {
    path: '/Step10',
    name: 'Step10',
    component: Step10
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
