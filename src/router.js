import Vue from 'vue'
import Router from 'vue-router'
import Stars from './views/Stars.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/stars',
      name: 'stars',
      component: Stars
    }
  ],
  mode: 'history'
})
