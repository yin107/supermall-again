//src/router/index.js
import Vue from 'vue'
import Router from 'vue-router'
const Home = () =>
    import ('views/home/Home.vue')
const Cart = () =>
    import ('views/cart/Cart.vue')
Vue.use(Router)
export default new Router({
    routes: [{
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                isshow: true
            }
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
            meta: {
                isshow: true
            }
        }, {
            path: '/category',
            name: 'category',
            component: () =>
                import ('views/category/Category'),
            meta: {
                isshow: true
            }
        },
        {
            path: '/profile',
            name: 'profile',
            component: () =>
                import ('views/profile/Profile'),
            meta: {
                isshow: true
            }
        },
        {
            path: '/detail/:iid',
            name: 'detail',
            component: () =>
                import ('views/detail/Detail'),
            meta: {
                isshow: false
            }
        }
    ]
})