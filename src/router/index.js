import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

const routerOptions = [
  { path: '/signin', component: 'Login', name: 'Login' },
  { path: '/signup', component: 'Register', name: 'Register' },
  { path: '/', component: 'Home', meta: { requiresAuth: true }, name: 'Home' },
  { path: '/constructor/:page', component: 'Page', meta: { requiresAuth: true }, name: 'Page' },
  { path: '*', component: 'NotFound' }
];

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/views/${route.component}.vue`)
  }
})

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  /** чистим ошибки */
  if (store.state.error) {
    store.commit('setError', null);
  }
  /** проверка авторизации */
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  const isAuthenticated = store.getters['auth/email'];
  if (requiresAuth && !isAuthenticated) {
    next('/signin');
  } else {
    next();
  }
});

export default router;
