import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../pages/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@/pages/UserManagementView.vue')
    },
    {
      path: '/gt',
      name: 'GroupTrials',
      component: () => import('@/pages/GroupTrialView.vue')
    },
    {
      path: '/crsedetails',
      name: 'CourseDetails',
      component: () => import('@/pages/CourseDetailView.vue')
    },
    {
      path: '/helpdesk',
      name: 'HelpDesk',
      component: () => import('@/pages/HelpDeskView.vue')
    }
  ]
});

export default router;
