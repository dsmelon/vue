import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Category from '@/components/Category'
import Cart from '@/components/Cart'
import User from '@/components/User'
import Search from '@/components/Search'
import Vuex from 'vuex'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
    	path: '/category',
    	name: 'category',
    	component: Category
    },{
    	path: '/cart',
    	name: 'cart',
    	component: Cart
    },{
    	path: '/user',
    	name: 'user',
    	component: User
    },{
    	path: '/category',
    	name: 'category',
    	component: Category
    },{
    	path: '/search',
    	name: 'search',
    	component: Search
    }
  ]
})
