import {createRouter, createWebHistory} from 'vue-router'

import homepage from "./../components/homepage.vue"
import products from "./../components/products.vue"                 
import AboutUs from "./../components/AboutUs.vue"
import Menu from "./../components/Menu.vue"
import cart from "./../components/cart.vue"
import Shop from "./../components/Shop.vue"
import Location from "./../components/Location.vue"
import Franchising from "./../components/Franchising.vue"
import Catering from "./../components/Catering.vue"


const routes = [
    {
      path: '/',
      name: 'home',
      component: homepage,
    },
    {
        path: '/products',
        name: 'Products',
        component: products,
      },
      {
        path: '/AboutUs',
        name: 'AboutUs',
        component: AboutUs,
      },
      {
        path: '/Location',
        name: 'Location',
        component: Location,
      },
      {
        path: '/cart',
        name: 'cart',
        component: cart,
      },
      {
        path: '/Franchising',
        name: 'Franchising',
        component: Franchising,
      },
      {
        path: '/Menu',
        name: 'Menu',
        component: Menu,
      },
      {
        path: '/Catering',
        name: 'Catering',
        component: Catering,
      },
      {
        path: '/Shop',
        name: 'Shop',
        component: Shop,
      },
]
const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router