import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../views/Main.vue'),  //按需引入    
        // redirect: '/home',
        children: [
            // {
            //     path: 'home',
            //     name: 'home-',
            //     component: () => import('../views/home')
            // },
            // {
            //     path: 'user',
            //     name: 'user-',
            //     component: () => import('../views/User')
            // },
            // {
            //     path: 'mall',
            //     name: 'mall-',
            //     component: () => import('../views/mall')
            // },
            // {
            //     path: 'page1',
            //     name: 'page-1',
            //     component: () => import('../views/other/pageone')
            // },
            // {
            //     path: 'page2',
            //     name: 'page-2',
            //     component: () => import('../views/other/pagetwo')
            // }
        ]
    },
    {
        path: '/login',
        name: 'login-',
        component: () => import('../views/Login/login')
    },
    {
        path: '*', // 页面不存在的情况下会跳到404页面
        // redirect: '/404',
        name: '404-',
        hidden: true,
        component: () => import('../views/404')
    }
]

const router = new VueRouter({
    model: 'history',
    routes
})

export default router