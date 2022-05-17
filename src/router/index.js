import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../views/Home.vue'
import Shopcar from '../views/Shopcar.vue'
import Users from '../views/Users.vue'
import Address from '../views/Address.vue'
import Index from '../views/Index.vue'
// 创建路由对象
const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home/index' },

        {

            path: '/home', component: Index,
            children: [
                { path: 'index', component: Home, meta: { name: 'Home', isShowNavBar: true } },
                { path: 'shopcar', component: Shopcar, meta: { name: 'Shopcar', isShowNavBar: true } },
                { path: 'users', component: Users, meta: { name: 'Users', isShowNavBar: true } },
            ]

        },

        {
            path: '/address', component: Address,
            meta: { pageTitle: '我的地址' }
        },

    ]
})

export default router