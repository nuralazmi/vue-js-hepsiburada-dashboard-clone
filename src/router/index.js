import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        name : 'HomePage',
        path : '/',
        component : () => import('../views/Home')
    }
]

export default createRouter({
    routes,
    history :createWebHashHistory()
})


