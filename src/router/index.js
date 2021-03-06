import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  // createWebHistory() Use browsers buildt in history logic
  history: createWebHistory(process.env.BASE_URL), //Ensures user goes to previous page on back press
  routes,
});

export default router;
