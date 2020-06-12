import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import day03 from '../views/day03.vue'
import day04 from '../views/day04.vue'
import day05 from '../views/day05.vue'
import day06 from '../views/day06.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/day03',
    name: 'day03',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: day03
  },
  {
    path: '/day04',
    name: 'day04',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: day04
  },
  {
    path: '/day05',
    name: 'day05',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: day05
  },
  {
    path: '/day06',
    name: 'day06',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: day06
  },
]

const router = new VueRouter({
  routes
})

export default router
