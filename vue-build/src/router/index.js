import Vue from 'vue'
import VueRouter from 'vue-router'
import Com from '../views/module1/page1/components/com1/com1'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Com',
    component: Com
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
