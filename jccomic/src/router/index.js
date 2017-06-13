import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import About from '@/components/about'
import Info from '@/components/info'
import Login from '@/components/login'
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
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})
