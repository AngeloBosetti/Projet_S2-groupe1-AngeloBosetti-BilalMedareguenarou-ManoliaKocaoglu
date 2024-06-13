import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChatIndex from '../pages/chat/index.vue'
import ChatView from '../pages/chat/[id].vue'
import ProfileFriend from '../pages/profile/[id].vue'
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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/chat',
      name: 'chat-index',
      component: ChatIndex
    },
    {
      path: '/chat/:id',
      name: 'chat-view',
      component: ChatView
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: ProfileFriend
    }
  ]
})

export default router
