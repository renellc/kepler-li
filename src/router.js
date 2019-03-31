import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import StarList from './views/StarList.vue';
import Star from './views/Star.vue';
import About from './views/About.vue';
import NotFound from './views/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/stars',
      name: 'stars',
      component: StarList,
    },
    {
      path: '/stars/:starId',
      name: 'star',
      component: Star,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/error',
      name: 'error',
      component: NotFound,
    },
  ],
});
