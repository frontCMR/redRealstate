import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
//   {
//     path: '/login',
//     name: 'loginAuth',
//     component: FirebaseView
//   },
//   {
//     path: '/register',
//     name: 'registerAuth',
//     component: RegisterFView
//   },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
