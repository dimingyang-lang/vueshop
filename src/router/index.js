import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/login',
  },
  {
    path:'/login',
    component:()=>import('components/content/login')
  },
  {
    path:'/op',
    component:()=>import('components/content/op')
  }
]

const router = new VueRouter({
  routes
})

export default router
