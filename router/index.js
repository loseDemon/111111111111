import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../src/views/Main.vue'
import Home from '../src/views/Home.vue'
import User from '../src/views/User.vue'
import Mall from '../src/views/Mall.vue'
import PageOne from '../src/views/PageOne.vue'
import PageTwo from '../src/views/PageTwo.vue'
import Login from '../src/views/Login.vue'

Vue.use(VueRouter)

const routes = [
    // 主路由
    {
        path: '/',
        component: Main,
        name: 'Main',
        redirect: "/home", //重定向，打开就是首页
        children: [
            // 子路由
            { path: 'home', name: 'home', component: Home }, //首页
            { path: 'mall', name: 'mall', component: Mall }, //商品管理
            { path: 'user', name: 'user', component: User }, //用户管理
            { path: 'page1', name: 'page1', component: PageOne }, //页面一
            { path: 'page2', name: 'page2', component: PageTwo }, //页面二
        ]
    },
    {
        // 登录页面路由
        path: '/login',
        name: 'login',
        component: Login
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router