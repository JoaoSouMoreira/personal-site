import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import AzoresPage from './pages/AzoresPage.vue';
import routes from './routes';

Vue.use(VueRouter);

const pages = [HomePage, AzoresPage, ProjectsPage];

export default new VueRouter({
  mode: 'history',
  routes: routes.map((route, index) => ({
    ...route,
    component: pages[index],
  }))
});
