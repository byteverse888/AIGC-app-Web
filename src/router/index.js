import { createRouter, createMemoryHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Chat from '@/pages/chat/index.vue'
import Create from '@/pages/create/index.vue'
import Simulate from '@/pages/simulate/index.vue'
import Painting from '@/pages/painting/index.vue'
import Knowledge from '@/pages/knowledge/index.vue'
import More from '@/pages/more/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  {
    path: '/simulate',
    name: 'simulate',
    component: Simulate
  },
  {
    path: '/painting',
    name: 'painting',
    component: Painting
  },
  {
    path: '/knowledge',
    name: 'knowledge',
    component: Knowledge
  },
  {
    path: '/more',
    name: 'more',
    component: More
  },
]

const router = new createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
