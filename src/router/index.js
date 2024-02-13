import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../pages/HomeView.vue';

import { useAuthStore, useAlertStore } from '@/stores';
import accountRoutes from './account.routes';
import usersRoutes from './users.routes';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { ...accountRoutes },
    { ...usersRoutes },
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
    },
    {
      path: '/crsedelivery',
      name: 'CourseDelivery',
      component: () => import('@/pages/CourseDeliveryView.vue')
    },
    {
      path: '/analysis',
      name: 'Analysis',
      component: () => import('@/pages/AnalysisView.vue')
    }
  ]
});

router.beforeEach(async (to) => {
    // clear alert on route change
    const alertStore = useAlertStore();
    alertStore.clear();

    // redirect to login page if not logged in and trying to access a restricted page 
    const publicPages = ['/account/login', '/account/register'];
    const authRequired = !publicPages.includes(to.path);
    const authStore = useAuthStore();

    if (authRequired && !authStore.user) {
        authStore.returnUrl = to.fullPath;
        return '/account/login';
    }
});
