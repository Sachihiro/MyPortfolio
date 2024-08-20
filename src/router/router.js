import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'; // Adjust the path to where your components are located
// import About from '../components/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
//   {
//     path: '/about',
//     name: 'About',
//     component: About,
//   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
