import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import JobsView from '../views/JobsView.vue'
import JobDetailsView from '../views/JobDetailsView.vue'
import SignUpFormView from '../views/SignUpFormView.vue'
import NotFound from '../views/NotFound.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: JobsView
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUpFormView
    },
    {
        path: '/about',
        name: 'about',
        // // route level code-splitting
        // // this generates a separate chunk (about.[hash].js) for this route
        // // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
        component: AboutView
    }, {
        path: '/jobDetails/:id',
        name: 'JobDetails',
        // // route level code-splitting
        // // this generates a separate chunk (about.[hash].js) for this route
        // // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
        component: JobDetailsView,
        props: true
    },
    //redirect
    {
        path: "/all-jobs",
        redirect: '/jobs',
    },
    //Not Found
    {

        path: '/:catchAll(.*)',
        name: "Not Found",
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router