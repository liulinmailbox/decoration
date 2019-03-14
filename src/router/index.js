import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 登录相关
import Login from '../pages/login/login.vue'

import Index from '../pages/index.vue'

export const constantRouterMap = [
    {
        path: '/login',
        component: Login,
        hidden: true
    },
    {
        path: '',
        component: Index,
        hidden: true
    }
]

export default new VueRouter({
    routes: constantRouterMap
})
