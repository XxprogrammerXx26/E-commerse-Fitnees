import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Dashboard from '../components/Dashboard.vue'; 
import { auth } from '../firebase';



const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/dashboard', component: Dashboard , meta: {requiresAuth: true } },
  { path: '/', redirect: '/login' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser;
  if (to.matched.some(record => record.meta.requiresAuth) && !currentUser) {
    next('/login');
  } else {
    next();
  }
});

export default router;