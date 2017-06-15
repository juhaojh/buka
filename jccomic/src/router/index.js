import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import About from '@/components/about'
import Info from '@/components/info'
import Login from '@/components/login'
import Classify from '@/components/classify'
import Comic from '../comic'
import ComicInfo from '@/components/comicInfo'
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
        {path:"comicInfo/:id",
         name:"comicInfo",
        component:ComicInfo},
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
        {
          path: 'classify',
          name: 'classify',
          component: Classify
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
