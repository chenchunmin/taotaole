import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../views/Home.vue'
import Shopcar from '../views/Shopcar.vue'
import Users from '../views/Users.vue'
import Address from '../views/Address.vue'
import Index from '../views/Index.vue'
import GoodsDetail from '../views/GoodsDetail.vue'
import Goodslist from '../views/Goodslist.vue'

import 'nprogress/nprogress.css'
import nprogress from 'nprogress'
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

        {
            path: '/goodsDetail/:id', component: GoodsDetail,
            props: true,
            meta: { pageTitle: '商品详情' }
        },

        {
            path: '/goodslist', component: Goodslist,
            meta: { pageTitle: '商品列表' }
        },

    ]
})


nprogress.configure({ showSpinner: false });
// 全局导航（针对所有路由）前守卫
router.beforeEach((to, from, next) => {
    console.log('beforeEach')
    nprogress.start()
    next();
})
// 全局导航后守卫
router.afterEach((to, from) => {
    console.log('afterEach')
    nprogress.done()
})

export default router;