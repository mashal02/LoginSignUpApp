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
        component: () => import('../views/Home.vue'),

    },
    {
        path:'/login',
        name:'login',
        component: () => import('../views/loginform.vue'),
        meta: { requiresAuth: false }

    },
    {
        path:'/signup',
        name:'signup',
        component: () => import('../views/signup.vue'),
        meta: { requiresAuth: false }

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
    const loggedIn = localStorage.getItem('token') || localStorage.getItem('name');
  
    if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
      next('/login');
    } 
    else if (to.path === '/login'  && loggedIn){
       next('/profile');
    }
    else {
      next();
    }

  });

export default router