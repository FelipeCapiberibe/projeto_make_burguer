import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/pedidos', //Caminho para acessar a rota. 
    name: 'Pedidos', //qual vue que vai ser utilizado para acessar a rota
    component: () => import(/* webpackChunkName: "Pedidos" */ '../views/Pedidos.vue') //e aqui o import da vue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
