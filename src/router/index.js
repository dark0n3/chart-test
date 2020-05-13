import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Excel from '../views/Excel.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dash',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/xls',
    name: 'Excel',
    component: Excel
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
