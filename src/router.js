import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue';
import Stars from './views/Stars.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/stars',
      name: 'stars',
      component: Stars
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ],
  mode: 'history'
})
