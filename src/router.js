import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Stars from './views/Stars.vue';
import About from './views/About.vue';

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
      component: Stars,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
