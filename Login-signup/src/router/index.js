import { createRouter,  createWebHistory} from "vue-router";      
const routes = [
    {
    path:'/',
    name:'landing',
    redirect: '/home'
    }  ,
    {
        path:'/home',
        name:'home',
        component: () => import('../views/Home.vue')
    },
    {
        path:'/login',
        name:'login',
        component: () => import('../views/loginform.vue')
    },
    {
        path:'/signup',

        name:'signup',
        component: () => import('../views/signup.vue')
    },
    {
        path:'/profile',
        name:'Profile',
        component: () => import('../views/profile.vue'),
        meta: { requiresAuth: true }

    }
]

const router = createRouter({   
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('token');
  
    if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
      alert('You must be logged in to see this page');  
      next('/login');
    } else {
      next();
    }
  });

export default router