import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChatRoom from '../components/ChatRoom.vue'
import ChatInterface from '../components/ChatInterface.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/chatroom',
      name: 'chatroom',
      component: () => import('../components/ChatRoom.vue')
    },
  ]
})

export default router
