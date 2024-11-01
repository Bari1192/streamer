import { createRouter, createWebHistory } from 'vue-router';
import FooldalLayout from '@layouts/FooldalLayout.vue'

const routes = [
  {
    name: 'home',
    path: '/',
    component:FooldalLayout,
    meta: {
      title: 'Főoldal',
    },
  }
];
const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
