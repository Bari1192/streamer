import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@layouts/FooldalLayout.vue'),
    meta: {
      title: 'Főoldal',
    },
  },
    {
    name: 'about',
    path: '/about',
    component: () => import('@layouts/HeaderLayout.vue'),
    meta: {
      title: 'Rólunk',
  },
},
];
const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
