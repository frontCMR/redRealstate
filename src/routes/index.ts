import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import AboutView from '../views/Nosotros/AboutView.vue'
import ProductsView from '../views/ProductosServicios/ProductsView.vue'
import EventsView from '../views/Eventos/EventsView.vue'
import OportunityView from '../views/Oportunidad/OportunityView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/nosotros',
    name: 'nostros',
    component: AboutView
  },
  {
    path: '/productos-y-servicios',
    name: 'productosServicios',
    component: ProductsView
  },
  {
    path: '/eventos',
    name: 'eventos',
    component: EventsView
  },
  {
    path: '/oportunidad',
    name: 'oportunidad',
    component: OportunityView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
