import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/quiz',
    component: () => import('../views/quiz.vue'),
  },
  {
    path: '/volyasfairytales',
    component: () => import('../views/VolyasFairytale'),
  },
  {
    path: '/readtogether',
    component: () => import('../views/readTogether'),
  },
  {
    path: '/advices',
    component: () => import('../views/advicesForParents'),
  },/*
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  }*/
]

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  routes
});


export default router
