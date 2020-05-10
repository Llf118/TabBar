import Vue from 'vue'
import VueRouter from  'vue-router'

const Home =() =>import('../views/home/Home')
const Category =() =>import('../views/category/Category')
const Cart=() =>import('../views/cart/Cart')
const Profile =() =>import('../views/profile/Profile')
Vue.use(VueRouter)

//2.创建路由对象
const routes= [
  {
    path:'',
    redirect:'/Home',
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/profile',
    component: Profile,
  }
]
  const  router=new VueRouter({
    routes,
    mode: 'history'
})

//3.导出router
export default router
