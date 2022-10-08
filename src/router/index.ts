<<<<<<< HEAD
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
=======
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

>>>>>>> b76963165f5e8ea81a7797f20e0b380aadbba6f1
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/sobre",
      name: "sobre",
      component: AboutView
    }
  ]
})

export default router
