import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '../pages/layout/Layout.vue'

// 登录相关
import Login from '../pages/login/login.vue'

import Index from '../pages/index.vue'

import sellerAuth from '../pages/seller/auth.vue'
import sellerBase from '../pages/seller/base.vue'
import sellerQualification from '../pages/seller/qualification.vue'

Vue.use(VueRouter)

export const constantRouterMap = [
    {
        path: '/login',
        component: Login,
        hidden: true
    },
    {
        path: '',
        redirect: '/index',
        component: Layout,
        name: '首页',
        children: [{ path: 'index', component: Index, name: '首页' }]
    },
    {
        path: '/seller',
        component: Layout,
        redirect: '/seller/account',
        noDropdown: false,
        name:'商家资料',
        icon:'star',
        children: [
            { path: 'base', component: sellerBase, name:"基础资料" },
            { path: 'qualification', component: sellerQualification, name:"企业资质" },
            { path: 'auth', component: sellerAuth, name:"认证资料" },
        ]
    }
]

export default new VueRouter({
    routes: constantRouterMap
})
