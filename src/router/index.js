import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Admin from '@/components/admin'
import Saler from '@/components/saler'
import Cus from '@/components/cus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/saler',
      name: 'Saler',
      component: Saler
    },
    {
      path: '/cus',
      name: 'Cus',
      component: Cus
    }
  ]
})
