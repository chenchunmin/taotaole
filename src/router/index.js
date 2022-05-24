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
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

import 'nprogress/nprogress.css'
import nprogress from 'nprogress'
import store from '../store/index.js'
// 创建路由对象
const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home/index' },

        {

            path: '/home', component: Index,
            children: [
                { path: 'index', component: Home, meta: { name: 'Home', isShowNavBar: true } },
                { path: 'shopcar', component: Shopcar, meta: { name: 'Shopcar', pageTitle: '购物车' } },
                { path: 'users', component: Users, meta: { name: 'Users', isShowNavBar: true, requireAuth: true, } },
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
            meta: { pageTitle: '海淘超市' }
        },

        {
            path: '/login', component: Login,
            meta: { pageTitle: '用户登录' }
        },

        {
            path: '/register', component: Register,
            meta: { pageTitle: '用户注册' }
        },

    ]
})


nprogress.configure({ showSpinner: false }); // 去掉圆圈加载
// 全局导航（针对所有路由）前守卫
router.beforeEach((to, from, next) => {
    // console.log('beforeEach')
    nprogress.start();
    // 判断访问的路由是否需要权限
    if (to.meta.requireAuth) {
        // 需要权限
        let token = store.state.token;
        if (token) {
            next();
        } else {
            // 获取上次访问页面,登录成功,在原来访问页面
            next({ path: '/login?redirect=' + to.fullPath });
        }
    } else {
        // 需要权限
        next();
    }
})
// 全局导航后守卫
router.afterEach((to, from) => {
    // console.log('afterEach')
    nprogress.done()
})

export default router;