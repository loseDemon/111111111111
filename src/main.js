import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store';
import router from '../router'
import Cookie from 'js-cookie'

Vue.config.productionTip = false
Vue.use(ElementUI);


//添加全局前卫守护逻辑
router.beforeEach((to, from, next) => {
    // 1.判断token存不存在
    const token = Cookie.get('token')
        // 如果token不存在，并且不在登录页面，要跳转到登录页面
    if (!token && to.name !== 'login') {
        next({ name: 'login' })
    } else if (token && to.name == 'login') {
        next({ name: 'home' })
    } else {
        next()
    }
})


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')