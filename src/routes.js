import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import AzoresPage from './pages/AzoresPage.vue';

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomePage,
      name: 'Home',
      meta: {
        sections: [
          { path: '', name: 'Introduction' },
          { path: 'experience', name: 'Experience' },
          { path: 'skills', name: 'Skills' },
        ],
      },
    },
    {
      path: '/azores',
      component: AzoresPage,
      name: 'Where I am from',
      meta: {
        sections: [],
      },
    },
    {
      path: '/projects',
      component: ProjectsPage,
      name: 'Projects',
      meta: {
        sections: [],
      },
    },
    {
      path: '/home',
      redirect: '/',
    },
  ],
});
