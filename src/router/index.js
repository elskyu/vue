//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import( /* webpackChunkName: "home" */ '../views/home.vue')
    },
    {
        path: '/posts',
        name: 'posts.index',
        component: () => import( /* webpackChunkName: "index" */ '../views/posts/index.vue')
    },
    {
        path: '/create',
        name: 'posts.create',
        component: () => import( /* webpackChunkName: "create" */ '../views/posts/create.vue')
    },
    {
        path: '/edit/:id',
        name: 'posts.edit',
        component: () => import( /* webpackChunkName: "edit" */ '../views/posts/edit.vue')
    },
    {
        path: '/',
        name: 'login',
        component: () => import( /* webpackChunkName: "login" */ '../views/login.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes, // <-- routes,
})

// Define a global navigation guard
// router.beforeEach((to, from, next) => {
//     // Check if the user is logged in
//     const isAuthenticated = localStorage.getItem('auth'); // example check

//     if (to.name !== 'login' && !isAuthenticated) {
//         // If the user is not authenticated and trying to access a protected route, redirect to login
//         next({ name: 'login' });
//     } else {
//         // Allow the navigation
//         next();
//     }
// });

export default router
