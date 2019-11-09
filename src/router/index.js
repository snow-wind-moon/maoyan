import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Cinema from '../views/cinema'
import Mine from '../views/mine'
import Error from '../views/error'
import HomeComing from '../views/home/HomeComing'
import HomeHot from '../views/home/HomeHot'
import City from '../views/city'
import Search from '../views/search'

Vue.use( VueRouter )

const router = new VueRouter({
    mode: 'history', //哈希模式
    routes: [
        {
            path: '/',
            redirect: '/home' // 重定向
        },
        {
            path: '/home',
            component: Home,
            redirect: '/home/f-hot',
            children: [
                {
                    path: 'f-coming',
                    component: HomeComing,
                    name: 'f-coming'
                },
                {
                    path: 'f-hot',
                    component: HomeHot,
                    name: 'f-hot'
                }
            ]
        },
        {
            path: '/cinema',
            component: Cinema
        },
        {
            path: '/mine',
            component: Mine
        },
        {
            path: '/city',
            component: City
        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '*',
            component: Error
        }
    ]
})

export default router