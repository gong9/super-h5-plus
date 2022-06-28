import Vue from 'vue'
import VueRouter from 'vue-router'

import Simple from '../components/simple.jsx'
import transitionExample from '../components/transition-example.jsx'

Vue.use(VueRouter)

export const routes = [{
        path: '/simple',
        component: Simple,
        label: '示例1：简单例子'
    },
    {
        path: '/transition-sexample',
        component: transitionExample,
        label: '示例2：简单例子'
    },
]

export default new VueRouter({
    routes
})