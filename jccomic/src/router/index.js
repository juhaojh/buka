import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import About from '@/components/about'
import Info from '@/components/info'
import Login from '@/components/login'
import Register from '@/components/register'
import Search from '@/components/search'
import Xtx from '@/components/xtx'
import Comic from '../comic'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Comic',
      component: Comic,
      children:[
        {path:"home",
         name:"home",
        component:Home},
        {
          path: 'about',
          name: 'about',
          component: About
        },
        {
          path: 'info',
          name: 'info',
          component: Info
        },
      ],
      redirect: { name: 'home' }
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/xtx/:id',
      name: 'xtx',
      component: Xtx
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/login/:id',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
   
  ]
})
