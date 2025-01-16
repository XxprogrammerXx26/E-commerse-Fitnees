import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Dashboard from '../components/Dashboard.vue'; 
import { auth } from '../firebase';
import Profile from '@/components/Profile.vue';
import Cart from '@/components/Cart.vue';
import Form from '@/components/Form.vue';
import Productos from '@/components/Productos.vue';


const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/Profile' , component: Profile},
  { path: '/Cart'  , component:Cart},
  { path: '/Form' , component:Form},
  { path: '/Productos', component:Productos},
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