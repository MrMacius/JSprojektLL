import { createRouter, createWebHistory } from 'vue-router'
import ChatRoom from '../components/ChatRoom.vue'
import ChatInterface from '../components/ChatInterface.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'chatroom',
      component: ChatRoom,
    },
    {
      path: '/server/:id',
      name: 'server',
      component: ChatInterface,
    },
  ]
})

export default router