import { createRouter, createWebHistory } from 'vue-router'
import Menu from '@/components/Menu.vue'
import AuthPage from '@/components/AuthPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'Login',
    //   component: HomeView,
    // },
    // {
    //   path: '/register',
    //   name: 'R',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  
  
    {
      path: '/',
      name: 'AuthPage',
    component: AuthPage,
    },

  

    {
      path: '/menu',
      name: 'Menu',
      component: Menu,
    }


  ],
})



    

export default router
