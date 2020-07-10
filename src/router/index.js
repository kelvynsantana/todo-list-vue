import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home/Home.vue';
import Kanbam from '@/pages/Kanbam/Kanbam.vue';

Vue.use(Router);

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'kanbam',
    path: '/kanbam',
    component: Kanbam,
  },
];

const router = new Router({ routes, mode: 'history', hash: false });

export default router;
