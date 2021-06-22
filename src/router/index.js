import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Numbers from '@/components/dashboard/Numbers'
import All from '@/components/dashboard/All'
import Table from '@/components/dashboard/Table'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SignUp',
    meta: {
      title: 'Регистрация'
    },
    //beforeEnter: guardMyroute,
    component: () =>
      import(/*webpackChunkName: "Main" */ '../../src/views/SignUp.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'About'
    },
    children: [
      {
        path: '/about/numbers',
        name: 'numbers',
        component: Numbers
      },
      {
        path: '/about/table',
        name: 'table',
        component: Table
      },
      {
        path: '/about/all',
        name: 'all',
        component: All
      }
    ],

    beforeEnter: (to, from, next) => {
      if (store.state.user.isAuth) {
        console.log(to)
        next()
      } else {
        next('/')
      }
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "About" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
// function guardMyroute() {

// }

export default router
