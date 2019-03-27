import Vue from 'vue'
import Router from 'vue-router'
import about from './views/About.vue';
import stars from './views/Stars.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/stars',
      name: 'stars',
      component: stars
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ],
  mode: 'history'
})
